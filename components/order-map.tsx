"use client"

import { useEffect, useRef } from "react"

interface OrderMapProps {
  currentStep: number
}

export function OrderMap({ currentStep }: OrderMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw map background
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw roads
    ctx.strokeStyle = "#d1d5db"
    ctx.lineWidth = 8

    // Horizontal road
    ctx.beginPath()
    ctx.moveTo(0, canvas.height / 2)
    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.stroke()

    // Vertical roads
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.2, 0)
    ctx.lineTo(canvas.width * 0.2, canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.6, 0)
    ctx.lineTo(canvas.width * 0.6, canvas.height)
    ctx.stroke()

    // Draw restaurant
    const restaurantX = canvas.width * 0.2
    const restaurantY = canvas.height * 0.3

    ctx.fillStyle = "#ef4444"
    ctx.beginPath()
    ctx.arc(restaurantX, restaurantY, 10, 0, Math.PI * 2)
    ctx.fill()

    // Draw home
    const homeX = canvas.width * 0.8
    const homeY = canvas.height * 0.7

    ctx.fillStyle = "#3b82f6"
    ctx.beginPath()
    ctx.arc(homeX, homeY, 10, 0, Math.PI * 2)
    ctx.fill()

    // Draw delivery path
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 3
    ctx.setLineDash([5, 5])

    ctx.beginPath()
    ctx.moveTo(restaurantX, restaurantY)
    ctx.lineTo(restaurantX, canvas.height / 2)
    ctx.lineTo(homeX, canvas.height / 2)
    ctx.lineTo(homeX, homeY)
    ctx.stroke()

    // Draw delivery person based on current step
    if (currentStep >= 3) {
      let deliveryX, deliveryY

      if (currentStep === 3) {
        // On the way - somewhere on the path
        deliveryX = canvas.width * 0.5
        deliveryY = canvas.height / 2
      } else {
        // Delivered - at home
        deliveryX = homeX
        deliveryY = homeY
      }

      ctx.fillStyle = "#f59e0b"
      ctx.beginPath()
      ctx.arc(deliveryX, deliveryY, 8, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add labels
    ctx.fillStyle = "#000000"
    ctx.font = "12px sans-serif"
    ctx.fillText("Restaurant", restaurantX - 30, restaurantY - 15)
    ctx.fillText("Your Location", homeX - 40, homeY - 15)
  }, [currentStep])

  return (
    <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

