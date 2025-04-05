import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface RestaurantCardProps {
  id: string
  name: string
  image: string
  rating: number
  deliveryTime: string
  deliveryFee: string
  cuisine: string
}

export function RestaurantCard({ id, name, image, rating, deliveryTime, deliveryFee, cuisine }: RestaurantCardProps) {
  return (
    <Link href={`/restaurants/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{cuisine}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
          <span>{deliveryTime}</span>
          <span>{deliveryFee} delivery</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

