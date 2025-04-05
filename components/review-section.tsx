"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, StarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReviewSectionProps {
  restaurantId: string
}

export function ReviewSection({ restaurantId }: ReviewSectionProps) {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState("")
  const [hoveredRating, setHoveredRating] = useState(0)

  // This would be fetched from an API in a real application
  const reviews = [
    {
      id: "1",
      user: {
        name: "Sarah Johnson",
        image: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely loved the burgers here! The meat was juicy and cooked to perfection. The fries were crispy and well-seasoned. Will definitely be ordering again soon.",
    },
    {
      id: "2",
      user: {
        name: "Michael Chen",
        image: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      date: "1 month ago",
      text: "Great food and quick delivery. The only reason I'm not giving 5 stars is because they forgot the extra sauce I requested. Otherwise, very satisfied with my order.",
    },
    {
      id: "3",
      user: {
        name: "Emily Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      date: "2 months ago",
      text: "Best burgers in town! The Classic Cheeseburger is my go-to order. Always arrives hot and fresh. Highly recommend!",
    },
  ]

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "You must select a rating before submitting your review.",
        variant: "destructive",
      })
      return
    }

    if (reviewText.trim() === "") {
      toast({
        title: "Please enter a review",
        description: "You must enter a review before submitting.",
        variant: "destructive",
      })
      return
    }

    // In a real application, this would send the review to an API
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    })

    setRating(0)
    setReviewText("")
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-0">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={review.user.image} alt={review.user.name} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{review.user.name}</h4>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-medium">Rating</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 font-medium">Review</p>
            <Textarea
              placeholder="Share your experience with this restaurant..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
            />
          </div>

          <Button onClick={handleSubmitReview}>Submit Review</Button>
        </div>
      </div>
    </div>
  )
}

