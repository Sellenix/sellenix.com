"use client"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your API to handle the password reset
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-6 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Forgot Password</h1>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <p className="text-green-600 dark:text-green-400 mb-4">
            If an account exists for {email}, you will receive password reset instructions.
          </p>
        </div>
      )}
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Remember your password?{" "}
        <Link href="/login" className="text-purple-600 hover:text-purple-500">
          Log in
        </Link>
      </p>
    </div>
  )
}

