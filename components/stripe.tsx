"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

// Initialize Stripe with your publishable key
// In a real app, you would use an environment variable
const stripePromise = loadStripe("pk_test_your_publishable_key")

interface StripeProps {
  options: {
    mode: "payment" | "subscription"
    amount: number
    currency: string
  }
  children: React.ReactNode
  className?: string
}

export function Stripe({ options, children, className }: StripeProps) {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // In a real application, this would fetch from your API
    // to create a PaymentIntent or SetupIntent
    const mockClientSecret = "pi_mock_secret_" + Math.random().toString(36).substring(2, 15)
    setClientSecret(mockClientSecret)
  }, [options])

  if (!clientSecret) {
    return <div className={className}>Loading payment form...</div>
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      }}
    >
      <div className={className}>{children}</div>
    </Elements>
  )
}

