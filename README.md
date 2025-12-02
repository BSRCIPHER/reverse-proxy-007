# Reverse Proxy Server

A simple Express.js reverse proxy server to bypass CORS and X-Frame-Options restrictions.

## Installation

```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Endpoints

- **Health Check**: `GET http://localhost:3001/health`
- **Proxy**: `GET http://localhost:3001/proxy?url=<target_url>`

## Example

```
http://localhost:3001/proxy?url=https://www.google.com
```

## Notes

- The server runs on port 3001 by default
- CORS is enabled for all origins
- X-Frame-Options headers are removed to allow iframe embedding
