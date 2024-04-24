
import { NextRequest } from 'next/server'

export async function GET(request:NextRequest) {
    return new Response(
        JSON.stringify({ success: false, message: "test" }),
        {
            headers: { "Content-Type": "application/json" },
        }
    );
}