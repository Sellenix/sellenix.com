import { authOptions } from "../auth/authOptions"
import { getServerSession } from "next-auth/next"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (session) {
    // The user is authenticated
    return new Response(JSON.stringify(session.user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } else {
    // The user is not authenticated
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }
}

