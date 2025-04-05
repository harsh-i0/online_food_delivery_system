"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Wallet, ShieldCheck } from "lucide-react"

interface PaymentFormProps {
  onSuccess: () => void
  amount: number
}

export function PaymentForm({ onSuccess, amount }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would process the payment through Stripe
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
        <div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card" className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Credit / Debit Card
            </Label>
          </div>

          {paymentMethod === "credit-card" && (
            <Card className="mt-3">
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="digital-wallet" id="digital-wallet" />
            <Label htmlFor="digital-wallet" className="flex items-center">
              <Wallet className="h-4 w-4 mr-2" />
              Digital Wallet
            </Label>
          </div>

          {paymentMethod === "digital-wallet" && (
            <Card className="mt-3">
              <CardContent className="p-4 space-y-4">
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    <img src="/placeholder.svg?height=20&width=20" alt="Apple Pay" className="mr-2 h-5 w-5" />
                    Apple Pay
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <img src="/placeholder.svg?height=20&width=20" alt="Google Pay" className="mr-2 h-5 w-5" />
                    Google Pay
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </RadioGroup>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 mr-1" />
          Secure payment
        </div>
        <div className="font-bold">Total: ${amount.toFixed(2)}</div>
      </div>
    </form>
  )
}

