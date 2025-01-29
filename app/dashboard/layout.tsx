import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | Sellenix",
  description: "Manage your SEO campaigns and view analytics",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

