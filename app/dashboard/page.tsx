"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    // Here you would typically check if the user is logged in
    // For now, we'll simulate this with a timeout
    const timer = setTimeout(() => {
      // Redirect to login if not authenticated
      router.push("/login")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Welcome to your Sellenix dashboard!</p>
        <p className="text-gray-700 dark:text-gray-300">
          Here you'll be able to manage your campaigns, view analytics, and more.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This page is currently under construction. Check back soon for more features!
        </p>
      </div>
    </div>
  )
}

