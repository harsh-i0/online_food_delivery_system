"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, ChefHat, Bike, Home, CheckCircle2 } from "lucide-react"
import { OrderMap } from "@/components/order-map"

export default function OrderTrackingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [estimatedTime, setEstimatedTime] = useState(30)

  // Simulate order progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
        setProgress((currentStep + 1) * 25)
        setEstimatedTime(Math.max(5, estimatedTime - 8))
      }
    }, 10000) // Update every 10 seconds for demo purposes

    return () => clearTimeout(timer)
  }, [currentStep, estimatedTime])

  const steps = [
    {
      id: 1,
      title: "Order Received",
      description: "Restaurant has received your order",
      icon: <Clock className="h-8 w-8" />,
      completed: currentStep >= 1,
    },
    {
      id: 2,
      title: "Preparing",
      description: "Chef is preparing your food",
      icon: <ChefHat className="h-8 w-8" />,
      completed: currentStep >= 2,
    },
    {
      id: 3,
      title: "On the Way",
      description: "Driver is on the way to your location",
      icon: <Bike className="h-8 w-8" />,
      completed: currentStep >= 3,
    },
    {
      id: 4,
      title: "Delivered",
      description: "Enjoy your meal!",
      icon: <Home className="h-8 w-8" />,
      completed: currentStep >= 4,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Order #12345</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Estimated Delivery: {estimatedTime} minutes
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Progress value={progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center text-center p-4 rounded-lg ${
                      step.completed ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div className="mb-2 relative">
                      {step.icon}
                      {step.completed && (
                        <CheckCircle2 className="h-4 w-4 absolute -top-1 -right-1 bg-white rounded-full text-green-500" />
                      )}
                    </div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-xs">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderMap currentStep={currentStep} />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>1x Classic Cheeseburger</span>
                  <span>$8.99</span>
                </div>
                <div className="flex justify-between">
                  <span>1x French Fries</span>
                  <span>$3.99</span>
                </div>
                <div className="flex justify-between">
                  <span>1x Soda</span>
                  <span>$1.99</span>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$14.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>$1.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$1.35</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t mt-4">
                    <span>Total</span>
                    <span>$18.31</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Having an issue with your order? Our support team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

