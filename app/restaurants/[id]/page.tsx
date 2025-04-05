"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuCategory } from "@/components/menu-category"
import { RestaurantInfo } from "@/components/restaurant-info"
import { ReviewSection } from "@/components/review-section"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/hooks/use-cart"

export default function RestaurantPage() {
  const params = useParams()
  const { id } = params
  const [activeTab, setActiveTab] = useState("menu")
  const { items, totalPrice } = useCart()

  // This would be fetched from an API in a real application
  const restaurant = {
    id,
    name: "Burger Palace",
    image: "/burger facebook cover.jpg?height=300&width=800",
    rating: 4.8,
    reviewCount: 243,
    cuisine: "American",
    priceRange: "$$",
    address: "123 Main St, Anytown, USA",
    hours: "10:00 AM - 10:00 PM",
    phone: "(555) 123-4567",
    description:
      "Serving the juiciest burgers in town since 2010. Our ingredients are locally sourced and our recipes are crafted to perfection.",
  }

  // These would be fetched from an API in a real application
  const menuCategories = [
    {
      id: "1",
      name: "Popular Items",
      items: [
        {
          id: "101",
          name: "Classic Cheeseburger",
          description: "Beef patty, cheddar cheese, lettuce, tomato, onion, pickles, and our special sauce",
          price: 8.99,
          image: "/classic cheeseburger.jpg?height=100&width=100",
        },
        {
          id: "102",
          name: "Bacon Deluxe",
          description: "Beef patty, bacon, cheddar cheese, lettuce, tomato, onion, and mayo",
          price: 10.99,
          image: "/bacon delux.jpg?height=100&width=100",
        },
      ],
    },
    {
      id: "2",
      name: "Burgers",
      items: [
        {
          id: "201",
          name: "Mushroom Swiss",
          description: "Beef patty, swiss cheese, sautéed mushrooms, and truffle aioli",
          price: 11.99,
          image: "/mushroomswiss.jpg?height=100&width=100",
        },
        {
          id: "202",
          name: "Veggie Burger",
          description: "Plant-based patty, lettuce, tomato, onion, pickles, and vegan mayo",
          price: 9.99,
          image: "/veggie burger.jpg?height=100&width=100",
        },
      ],
    },
    {
      id: "3",
      name: "Sides",
      items: [
        {
          id: "301",
          name: "French Fries",
          description: "Crispy golden fries with sea salt",
          price: 3.99,
          image: "/french fries.jpg?height=100&width=100",
        },
        {
          id: "302",
          name: "Onion Rings",
          description: "Beer-battered onion rings with dipping sauce",
          price: 4.99,
          image: "/onion rings.jpg?height=100&width=100",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <img
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center mt-2">
              <span className="mr-2">{restaurant.cuisine}</span>
              <span className="mx-2">•</span>
              <span className="mr-2">{restaurant.priceRange}</span>
              <span className="mx-2">•</span>
              <span>
                {restaurant.rating} ★ ({restaurant.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <Tabs defaultValue="menu" className="mb-8">
            <TabsList>
              <TabsTrigger value="menu" onClick={() => setActiveTab("menu")}>
                Menu
              </TabsTrigger>
              <TabsTrigger value="info" onClick={() => setActiveTab("info")}>
                Info
              </TabsTrigger>
              <TabsTrigger value="reviews" onClick={() => setActiveTab("reviews")}>
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="menu" className="pt-6">
              {menuCategories.map((category) => (
                <MenuCategory key={category.id} category={category} />
              ))}
            </TabsContent>
            <TabsContent value="info" className="pt-6">
              <RestaurantInfo restaurant={restaurant} />
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <ReviewSection restaurantId={id as string} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:w-96">
          <div className="sticky top-6">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

