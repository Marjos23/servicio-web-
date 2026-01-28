# Exam2P Audit MCP Server

MCP Server that provides the `exam2p_query_audit` tool to query audit logs.

## Installation

```bash
cd mcp-server
npm install
npm run build
```

## Usage

The server exposes one tool:

### `exam2p_query_audit`

Query audit logs from the exam2p audit service.

**Parameters:**
- `limit` (optional, number): Maximum number of audit records to return. Defaults to 10.

**Example:**
```json
{
  "limit": 5
}
```

## Configuration for Claude Desktop

Add to your Claude Desktop config (`%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "exam2p-audit": {
      "command": "node",
      "args": ["C:\\Users\\jvice\\exam2p\\exam2p-audit-service\\mcp-server\\dist\\index.js"]
    }
  }
}
```

Make sure the audit service is running on `http://localhost:3001`.
