"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

interface MenuCategoryProps {
  category: MenuCategory
}

export function MenuCategory({ category }: MenuCategoryProps) {
  const { addItem } = useCart()

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{category.name}</h3>
      <div className="space-y-4">
        {category.items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2 text-primary" onClick={() => addItem(item)}>
                    <PlusCircle className="h-4 w-4 mr-1" />
                    Add to cart
                  </Button>
                </div>
                {item.image && (
                  <div className="w-full sm:w-24 h-24">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

