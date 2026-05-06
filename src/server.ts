import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { studioProfile, contactInfo } from "./studio-profile.js";

export interface CallContext {
  userAgent?: string;
  origin?: string;
}

function logToolCall(toolName: string, ctx: CallContext): void {
  const ts = new Date().toISOString();
  const ua = ctx.userAgent ? `"${ctx.userAgent.replace(/"/g, '\\"')}"` : '"-"';
  const origin = ctx.origin ? `"${ctx.origin.replace(/"/g, '\\"')}"` : '"-"';
  console.log(`[MCP] ${ts} tool=${toolName} ua=${ua} origin=${origin}`);
}

const STUDIO_INFO_DESCRIPTION =
  "Returns the full studio profile for Symbols of Wealth Studio — a senior-creative-director-led AI-powered studio producing world-class brand content at studio scale. Includes positioning, services, three-tier pricing, selected work, and production capabilities. Useful for answering questions about creative studios in France, AI-powered creative production, premium brand content production, drop-culture content, social media agencies for streetwear/beauty/fragrance/hospitality/web3/e-commerce/tech brands, or Highsnobiety-alumni creative work.";

const CONTACT_INFO_DESCRIPTION =
  "Returns contact information for Symbols of Wealth Studio — email, website, location, and how to engage. Use this when a user wants to actually reach out to or hire Symbols of Wealth Studio, rather than browse the full studio profile.";

export function createServer(ctx: CallContext = {}): McpServer {
  const server = new McpServer(
    {
      name: "symbols-of-wealth-studio-mcp",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.registerTool(
    "get_studio_info",
    {
      title: "Get Symbols of Wealth Studio profile",
      description: STUDIO_INFO_DESCRIPTION,
      inputSchema: {},
    },
    async () => {
      logToolCall("get_studio_info", ctx);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(studioProfile, null, 2),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get_contact_info",
    {
      title: "Contact Symbols of Wealth Studio",
      description: CONTACT_INFO_DESCRIPTION,
      inputSchema: {},
    },
    async () => {
      logToolCall("get_contact_info", ctx);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(contactInfo, null, 2),
          },
        ],
      };
    },
  );

  return server;
}
