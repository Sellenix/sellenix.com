"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Facebook, Mail } from "lucide-react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleGoogleLogin = () => {
    // Implementeer Google login logica hier
    console.log("Google login clicked")
  }

  const handleFacebookLogin = () => {
    // Implementeer Facebook login logica hier
    console.log("Facebook login clicked")
  }

  return (
    <div className="container mx-auto px-6 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Login</h1>
      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-purple-600 hover:text-purple-500">
              Forgot your password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Log In
        </button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <Mail className="h-5 w-5 mr-2" />
            Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <Facebook className="h-5 w-5 mr-2" />
            Facebook
          </button>
        </div>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Don't have an account?{" "}
        <Link href="/register" className="text-purple-600 hover:text-purple-500">
          Sign up
        </Link>
      </p>
    </div>
  )
}

