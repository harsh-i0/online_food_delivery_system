"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckoutSummary } from "@/components/checkout-summary"
import { PaymentForm } from "@/components/payment-form"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { items, totalPrice, clearCart } = useCart()
  const [deliveryMethod, setDeliveryMethod] = useState("delivery")
  const [paymentStep, setPaymentStep] = useState(false)

  const handleContinueToPayment = () => {
    setPaymentStep(true)
  }

  const handlePaymentSuccess = () => {
    toast({
      title: "Order placed successfully!",
      description: "Your food is being prepared and will be on its way soon.",
    })
    clearCart()
    router.push("/orders/tracking")
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add some delicious items to your cart and come back!</p>
        <Button onClick={() => router.push("/")}>Browse Restaurants</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {!paymentStep ? (
            <>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Delivery Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    defaultValue="delivery"
                    value={deliveryMethod}
                    onValueChange={setDeliveryMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex-1">
                        Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1">
                        Pickup
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {deliveryMethod === "delivery" && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Delivery Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main St" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apt">Apt/Suite (optional)</Label>
                      <Input id="apt" placeholder="Apt 4B" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Anytown" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="12345" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructions">Delivery Instructions (optional)</Label>
                      <Input id="instructions" placeholder="Leave at door, ring doorbell" />
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button onClick={handleContinueToPayment} className="w-full" size="lg">
                Continue to Payment
              </Button>
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentForm onSuccess={handlePaymentSuccess} amount={totalPrice} />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setPaymentStep(false)}>
                  Back
                </Button>
                <Button onClick={handlePaymentSuccess}>Place Order</Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}

