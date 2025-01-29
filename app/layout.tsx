import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import dynamic from "next/dynamic"
import { ThemeToggle } from "@/components/ThemeToggle"
import LanguageSwitcher from "@/components/LanguageSwitcher"

const Header = dynamic(() => import("@/components/Header"), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sellenix - Empowering Your Online Presence",
  description: "Sellenix offers top-tier services in e-commerce, website creation, and SEO tools.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))]">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <div className="fixed top-4 right-4 z-50 flex space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

