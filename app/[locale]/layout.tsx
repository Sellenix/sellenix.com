import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import type React from "react"

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }]
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

