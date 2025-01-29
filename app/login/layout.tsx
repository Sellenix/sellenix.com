import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Sellenix",
  description: "Log in to your Sellenix account",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

