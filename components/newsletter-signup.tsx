"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("idle")
    setMessage("")

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address.")
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1000)
  }

  return (
    <div className="bg-green-700 text-white p-8 rounded-lg shadow-xl text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Stay Connected!</h2>
      <p className="text-lg mb-6">Subscribe to our newsletter for health tips, clinic updates, and special offers.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="grid gap-2 flex-grow">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email Address
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white text-gray-800 placeholder:text-gray-500 border-none focus:ring-2 focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-md">
          Subscribe
        </Button>
      </form>
      {status === "success" && (
        <div className="mt-4 flex items-center justify-center text-green-200">
          <CheckCircle className="h-5 w-5 mr-2" />
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 flex items-center justify-center text-red-200">
          <XCircle className="h-5 w-5 mr-2" />
          {message}
        </div>
      )}
    </div>
  )
}
