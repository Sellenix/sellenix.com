"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const switchLanguage = (newLocale: string) => {
    router.push(`/${newLocale}`)
  }

  return (
    <div className="flex space-x-2">
      <button onClick={() => switchLanguage("en")} className={`p-1 rounded ${locale === "en" ? "bg-gray-200" : ""}`}>
        <Image src="/flags/en.svg" alt="English" width={24} height={24} />
      </button>
      <button onClick={() => switchLanguage("nl")} className={`p-1 rounded ${locale === "nl" ? "bg-gray-200" : ""}`}>
        <Image src="/flags/nl.svg" alt="Nederlands" width={24} height={24} />
      </button>
    </div>
  )
}

