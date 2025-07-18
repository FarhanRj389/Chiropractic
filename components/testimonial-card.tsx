import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  avatarSrc?: string
  rating: number
}

export function TestimonialCard({ name, title, quote, avatarSrc, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg rounded-xl overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
        <Avatar className="w-20 h-20 mb-4 border-2 border-green-500">
          <AvatarImage src={avatarSrc || "/placeholder.svg?height=80&width=80"} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <p className="text-gray-700 italic mb-4 flex-grow">"{quote}"</p>
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </CardContent>
    </Card>
  )
}
