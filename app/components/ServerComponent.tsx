import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/authOptions"

export async function ServerComponent() {
  const session = await getServerSession(authOptions)

  if (session) {
    return <p>Signed in as {session.user?.email}</p>
  }
  return <p>Not signed in</p>
}

