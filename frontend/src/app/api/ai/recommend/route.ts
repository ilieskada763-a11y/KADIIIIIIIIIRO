import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Use Edge Runtime for low latency and no timeout limits

export async function POST(req: Request) {
  try {
    // This is a placeholder for actual AI logic (e.g., OpenAI/Gemini)
    // Using streaming response would be even better for longer generation times.

    return NextResponse.json({
      recommendation: "Cyberpunk Edgerunners is a great choice based on your interest in Sci-Fi."
    });
  } catch (error) {
    return NextResponse.json({ error: 'AI Processing Failed' }, { status: 500 });
  }
}
