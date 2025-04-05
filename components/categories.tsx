import { Utensils, Pizza, Coffee, Beef, Salad, IceCream, Fish, Sandwich } from "lucide-react"

const categories = [
  { name: "All", icon: <Utensils className="h-6 w-6" /> },
  { name: "Pizza", icon: <Pizza className="h-6 w-6" /> },
  { name: "Burgers", icon: <Beef className="h-6 w-6" /> },
  { name: "Sushi", icon: <Fish className="h-6 w-6" /> },
  { name: "Salads", icon: <Salad className="h-6 w-6" /> },
  { name: "Sandwiches", icon: <Sandwich className="h-6 w-6" /> },
  { name: "Desserts", icon: <IceCream className="h-6 w-6" /> },
  { name: "Coffee", icon: <Coffee className="h-6 w-6" /> },
]

export function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            style={{ backgroundColor: '#FFE8CC' }}
            className="flex flex-col items-center justify-center p-4 bg-muted /40 rounded-lg hover:bg-muted cursor-pointer transition-colors"
          >
            {category.icon}
            <span className="mt-2 text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

