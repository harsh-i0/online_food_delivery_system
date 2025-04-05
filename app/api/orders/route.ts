import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// In a real app, this would connect to MongoDB
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the order data
    if (!body.items || !body.customer) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save the order to MongoDB
    // const order = await db.collection('orders').insertOne({
    //   items: body.items,
    //   customer: body.customer,
    //   total: body.total,
    //   status: 'pending',
    //   createdAt: new Date()
    // })

    // For demo purposes, we'll just return a mock order ID
    return NextResponse.json({
      success: true,
      orderId: "ord_" + Math.random().toString(36).substring(2, 10),
      estimatedDeliveryTime: "30-45 minutes",
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // In a real app, you would fetch orders from MongoDB
    // const orders = await db.collection('orders').find({ customerId: userId }).toArray()

    // For demo purposes, we'll just return mock orders
    return NextResponse.json({
      orders: [
        {
          id: "ord_abc123",
          restaurant: "Burger Palace",
          items: [
            { name: "Classic Cheeseburger", quantity: 1, price: 8.99 },
            { name: "French Fries", quantity: 1, price: 3.99 },
          ],
          total: 12.98,
          status: "delivered",
          createdAt: "2023-04-15T14:30:00Z",
        },
        {
          id: "ord_def456",
          restaurant: "Pizza Heaven",
          items: [
            { name: "Pepperoni Pizza", quantity: 1, price: 12.99 },
            { name: "Garlic Knots", quantity: 1, price: 4.99 },
          ],
          total: 17.98,
          status: "in_progress",
          createdAt: "2023-04-20T18:45:00Z",
        },
      ],
    })
  } catch (error) {
    console.error("Order fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

