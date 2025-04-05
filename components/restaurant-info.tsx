import { MapPin, Clock, Phone } from "lucide-react"

interface RestaurantInfoProps {
  restaurant: {
    name: string
    address: string
    hours: string
    phone: string
    description: string
  }
}

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">About {restaurant.name}</h3>
        <p className="text-muted-foreground">{restaurant.description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Address</h4>
            <p className="text-muted-foreground">{restaurant.address}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Hours</h4>
            <p className="text-muted-foreground">{restaurant.hours}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Phone</h4>
            <p className="text-muted-foreground">{restaurant.phone}</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1579767936177!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant location"
          className="rounded-md"
        ></iframe>
      </div>
    </div>
  )
}

