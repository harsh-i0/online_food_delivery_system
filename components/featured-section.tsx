import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RestaurantCard } from "@/components/restaurant-card"

interface FeaturedSectionProps {
  title: string
}

export function FeaturedSection({ title }: FeaturedSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href="/restaurants">
          <Button variant="ghost">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-3 overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img
              src="/50_banner.jpg?height=400&width=1200"
              alt="Featured restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <CardContent className="text-white p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">50% OFF Your First Order</h3>
                <p className="text-lg mb-4 max-w-md">Enjoy half price on your first order with code WELCOME50</p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Order Now
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>

        <RestaurantCard
          id="4"
          name="Taco Fiesta"
          image="/Crispy Chipotle Sweet Potato Tacos with Lime Crema_.jpg?height=200&width=300"
          rating={4.7}
          deliveryTime="20-30 min"
          deliveryFee="$2.99"
          cuisine="Mexican"
        />
        <RestaurantCard
          id="5"
          name="Noodle House"
          image="/Recettes de bols-repas _ smoothie, ramen et poke _ Zeste.jpg?height=200&width=300"
          rating={4.5}
          deliveryTime="25-35 min"
          deliveryFee="$1.99"
          cuisine="Asian"
        />
        <RestaurantCard
          id="6"
          name="Red Lobster"
          image="/Red Lobster.jpg?height=200&width=300"
          rating={4.6}
          deliveryTime="15-25 min"
          deliveryFee="$2.49"
          cuisine="Seafood"
        />
      </div>
    </section>
  )
}

