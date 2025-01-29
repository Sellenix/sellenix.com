import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Sellenix</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user.name || session.user.email}</p>
          <Link href="/api/auth/signout" className="text-blue-500 hover:underline">
            Sign out
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/api/auth/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      )}
    </main>
  )
}

