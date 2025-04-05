import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RestaurantCard } from "@/components/restaurant-card"
import { SearchBar } from "@/components/search-bar"
import { FeaturedSection } from "@/components/featured-section"
import { Categories } from "@/components/categories"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Delicious food, delivered to your door</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
            Order from your favorite local restaurants with free delivery on your first order
          </p>
          <SearchBar />
        </div>
      </section>

      <Categories />

      <FeaturedSection title="Popular Restaurants" />

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Restaurants Near You</h2>
          <Link href="/restaurants">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RestaurantCard
            id="1"
            name="Burger Palace"
            image="/A juicy and delicious burger cooked over a wood fire.jpg?height=200&width=300"
            rating={4.8}
            deliveryTime="15-25 min"
            deliveryFee="$1.99"
            cuisine="American"
          />
          <RestaurantCard
            id="2"
            name="Pizza Heaven"
            image="/Veggie Pizza.jpg?height=200&width=300"
            rating={4.6}
            deliveryTime="20-30 min"
            deliveryFee="$2.49"
            cuisine="Italian"
          />
          <RestaurantCard
            id="3"
            name="Sushi World"
            image="/Discover Deliciousness_ 13 Mixed Sashimi Bowl Ideas for Irresistible Sushi Bowls!.jpg?height=200&width=300"
            rating={4.9}
            deliveryTime="25-35 min"
            deliveryFee="$3.99"
            cuisine="Japanese"
          />
        </div>
      </section>

      <section style={{ backgroundColor: '#FFE8CC' }} className="rounded-lg p-8 mb-12 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-4">Become a Delivery Partner</h2>
            <p className="text-muted-foreground mb-4">Earn competitive pay delivering food on your own schedule.</p>
            <Button>Sign Up to Deliver</Button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/Food delivery service, Fast food delivery - Photos by Canva.jpg?height=300&width=500" alt="Delivery partner" className="rounded-lg w-full" />
          </div>
        </div>
      </section>
    </div>
  )
}

