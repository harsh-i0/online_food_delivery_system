import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// In a real app, this would connect to MongoDB
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q") || ""
    const category = searchParams.get("category") || ""

    // In a real app, you would query MongoDB with filters
    // const restaurants = await db.collection('restaurants')
    //   .find({
    //     $or: [
    //       { name: { $regex: query, $options: 'i' } },
    //       { cuisine: { $regex: query, $options: 'i' } }
    //     ],
    //     ...(category ? { cuisine: category } : {})
    //   })
    //   .toArray()

    // For demo purposes, we'll just return mock restaurants
    const mockRestaurants = [
      {
        id: "1",
        name: "Burger Palace",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviewCount: 243,
        deliveryTime: "15-25 min",
        deliveryFee: "$1.99",
        cuisine: "American",
        priceRange: "$$",
        address: "123 Main St, Anytown, USA",
      },
      {
        id: "2",
        name: "Pizza Heaven",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        reviewCount: 187,
        deliveryTime: "20-30 min",
        deliveryFee: "$2.49",
        cuisine: "Italian",
        priceRange: "$$",
        address: "456 Oak Ave, Anytown, USA",
      },
      {
        id: "3",
        name: "Sushi World",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviewCount: 312,
        deliveryTime: "25-35 min",
        deliveryFee: "$3.99",
        cuisine: "Japanese",
        priceRange: "$$$",
        address: "789 Pine St, Anytown, USA",
      },
      {
        id: "4",
        name: "Taco Fiesta",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviewCount: 156,
        deliveryTime: "20-30 min",
        deliveryFee: "$2.99",
        cuisine: "Mexican",
        priceRange: "$$",
        address: "101 Elm St, Anytown, USA",
      },
      {
        id: "5",
        name: "Noodle House",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.5,
        reviewCount: 98,
        deliveryTime: "25-35 min",
        deliveryFee: "$1.99",
        cuisine: "Asian",
        priceRange: "$$",
        address: "202 Maple Dr, Anytown, USA",
      },
      {
        id: "6",
        name: "Green Garden",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        reviewCount: 124,
        deliveryTime: "15-25 min",
        deliveryFee: "$2.49",
        cuisine: "Vegetarian",
        priceRange: "$$",
        address: "303 Cedar Ln, Anytown, USA",
      },
    ]

    // Filter based on query and category
    let filteredRestaurants = mockRestaurants

    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(lowerQuery) || restaurant.cuisine.toLowerCase().includes(lowerQuery),
      )
    }

    if (category) {
      filteredRestaurants = filteredRestaurants.filter(
        (restaurant) => restaurant.cuisine.toLowerCase() === category.toLowerCase(),
      )
    }

    return NextResponse.json({ restaurants: filteredRestaurants })
  } catch (error) {
    console.error("Restaurant fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch restaurants" }, { status: 500 })
  }
}

