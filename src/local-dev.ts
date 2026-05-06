import { createServer as createHttpServer, type IncomingMessage, type ServerResponse } from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer, type CallContext } from "../api/_lib/server.js";

const PORT = Number.parseInt(process.env.PORT ?? "3000", 10);
const PATH = "/api/mcp";

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => {
      if (chunks.length === 0) {
        resolve(undefined);
        return;
      }
      const raw = Buffer.concat(chunks).toString("utf8");
      try {
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

const httpServer = createHttpServer(async (req: IncomingMessage, res: ServerResponse) => {
  if (!req.url || !req.url.startsWith(PATH)) {
    res.statusCode = 404;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "not found" }));
    return;
  }

  const userAgentHeader = req.headers["user-agent"];
  const originHeader = req.headers["origin"];
  const ctx: CallContext = {
    userAgent: typeof userAgentHeader === "string" ? userAgentHeader : undefined,
    origin: typeof originHeader === "string" ? originHeader : undefined,
  };

  let body: unknown = undefined;
  if (req.method === "POST") {
    try {
      body = await readJsonBody(req);
    } catch {
      res.statusCode = 400;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ error: "invalid JSON body" }));
      return;
    }
  }

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  const server = createServer(ctx);

  res.on("close", () => {
    void transport.close();
    void server.close();
  });

  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, body);
  } catch (err) {
    console.error("[MCP] local-dev handler error", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ error: "internal server error" }));
    }
  }
});

httpServer.listen(PORT, () => {
  console.log(`[local-dev] MCP server listening on http://localhost:${PORT}${PATH}`);
  console.log(`[local-dev] Connect the inspector with transport=streamable-http url=http://localhost:${PORT}${PATH}`);
});
