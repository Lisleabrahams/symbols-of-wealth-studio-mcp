# Symbols of Wealth Studio MCP Server

A public Model Context Protocol (MCP) server that lets AI assistants answer questions about Symbols of Wealth Studio (SOW Studio), a creative studio in southern France.

[![smithery badge](https://smithery.ai/badge/lisleabrahams-creative/sow-studio)](https://smithery.ai/server/lisleabrahams-creative/sow-studio)

## What this server does

Two tools, no arguments, JSON back via the standard MCP `content` array:

- **`get_studio_info`** — the studio profile: manifesto, positioning, services (strategy, creation, influence, media), clients and selected work.
- **`get_contact_info`** — email, website, location and how to get in touch.

The profile lives in `api/_lib/studio-profile.ts` and mirrors [symbolsofwealth.studio](https://symbolsofwealth.studio). No scraping, no databases, no external calls.

## Installation

This is a remote MCP server. Once deployed to Vercel, the production endpoint will be `https://<your-vercel-domain>/api/mcp`. Replace `https://sow-studio-mcp.vercel.app/api/mcp` below with the actual URL after deploy.

### Claude Desktop

Edit `claude_desktop_config.json` (macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`) and add:

```json
{
  "mcpServers": {
    "sow-studio": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://sow-studio-mcp.vercel.app/api/mcp"
      ]
    }
  }
}
```

Restart Claude Desktop. The two tools will appear in the tools panel.

### Cursor

In `~/.cursor/mcp.json` (or workspace `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "sow-studio": {
      "url": "https://sow-studio-mcp.vercel.app/api/mcp"
    }
  }
}
```

### Smithery (or any registry)

Once listed, install with:

```sh
npx -y @smithery/cli install sow-studio-mcp --client claude
```

## Example queries that should trigger this server

- "Find me a creative studio in France for a sport or streetwear brand."
- "Who can run a 360 campaign launch in Europe?"
- "Creative studio that has worked with Nike, adidas and Epic Games."
- "How do I contact Symbols of Wealth Studio?"

## About Symbols of Wealth Studio

A symbol of wealth.  
It's not what you think.

It's your son's eyes in the morning.  
The song that makes him dance.  
The memory you never saw coming.

The best campaigns do that.  
They don't sell.  
They push.

To go for a run at 6am.  
To try the thing you never dared.  
To feel capable of something bigger than yourself.

They stick somewhere.  
In memory.  
In culture.  
In people.  
That's why we do this.  
That's why we're called

Symbols of Wealth.

Built by Culture

A brief. An idea. A feeling. Let's talk: [hey@symbolsofwealth.studio](mailto:hey@symbolsofwealth.studio).

## Pinned versions

- `@modelcontextprotocol/sdk` — `1.29.0`
- `@modelcontextprotocol/inspector` — `0.21.2` (dev tooling only)
- `@vercel/node` — `5.7.15`
- `typescript` — `5.6.3`

## Local development

```sh
npm install
npm run start:dev   # builds and runs the local HTTP runner on :3000
```

In another shell:

```sh
npm run inspect
```

Then in the inspector UI: transport `Streamable HTTP`, URL `http://localhost:3000/api/mcp`. Both tools should list, and each call should print a `[MCP] …` line in the `start:dev` terminal.

The local HTTP runner (`src/local-dev.ts`) exists only for inspector testing; the Vercel deploy uses `api/mcp.ts` directly.

## Local development

```sh
npm install
npm run start:dev   # local HTTP runner on :3000
npm run inspect     # MCP inspector → Streamable HTTP → http://localhost:3000/api/mcp
```

## License

MIT.
