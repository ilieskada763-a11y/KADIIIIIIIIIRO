# Troubleshooting Vercel 500: INTERNAL_SERVER_ERROR (AI Applications)

If you are encountering `FUNCTION_INVOCATION_FAILED` on Vercel for your AI app, follow these steps to diagnose and fix the issue.

## 1. Refactoring for Streaming & Edge Runtime

### Use Edge Runtime
AI requests often exceed the 10s (Hobby) or 15s-30s (Pro) timeout limit of Serverless Functions. Edge Runtime has no execution time limit (only a 25s window to start sending a response).

**In Next.js App Router (`route.ts`):**
```typescript
export const runtime = 'edge';

export async function POST(req: Request) {
  // Your AI logic here
}
```

### Implement Streaming
Streaming allows you to send data to the client as it's generated, preventing the connection from closing due to inactivity.

**Using AI SDK (e.g., Vercel AI SDK):**
```typescript
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });
  return result.toDataStreamResponse();
}
```

## 2. Pinpointing the Crash in Vercel Logs

To find the exact line causing the crash:
1. Go to your **Vercel Dashboard**.
2. Select your project -> **Logs** tab.
3. Look for entries with a **red dot** or status **500**.
4. Click on the log entry to expand it.
5. Search for `Runtime.ImportModuleError` (missing package) or `Error: ... at Page (./src/app/api/...)` (code crash).
6. Check for `Task timed out after 10.01 seconds` – this confirms you need **Edge Runtime** or **Streaming**.

## 3. Common Fixes for AI SDKs

### Missing External Packages
Some AI libraries (like `onnxruntime-node` or `sharp`) contain binary dependencies that Next.js might not bundle correctly.
**Fix in `next.config.mjs`:**
```javascript
const nextConfig = {
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
};
```

### Environment Variables
Ensure `OPENAI_API_KEY` or `GEMINI_API_KEY` are not just in `.env.local` but also added to **Vercel Project Settings -> Environment Variables**.

### Memory Limits
AI models can be memory-intensive. If you see `Memory Limit Exceeded`, you may need to upgrade your Vercel plan or offload processing to a dedicated backend.

### Max Duration
If you must use Serverless Functions (not Edge), increase the timeout in `page.tsx` or `route.ts`:
```typescript
export const maxDuration = 60; // Set to 60 seconds (Pro plan only)
```

## 4. Mandatory Environment Variables

For AKAI STREAM to function correctly on Vercel, ensure the following are set in **Project Settings**:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (Supabase/Neon) |
| `JWT_SECRET` | Secret key for authentication |
| `NEXT_PUBLIC_API_URL` | Points to `/api` or the full production URL |
| `REDIS_URL` | (Optional) Redis connection for caching |
