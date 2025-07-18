import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Benefits of Regular Chiropractic Adjustments",
      date: "July 10, 2024",
      excerpt:
        "Discover how consistent chiropractic care can improve your overall health, reduce pain, and enhance your body's natural healing abilities.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Chiropractic",
    },
    {
      id: 2,
      title: "The Role of Physiotherapy in Post-Injury Rehabilitation",
      date: "June 25, 2024",
      excerpt:
        "Learn how physiotherapy is crucial for effective recovery after an injury, helping to restore strength, mobility, and function.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Physiotherapy",
    },
    {
      id: 3,
      title: "Ergonomics at Work: Preventing Back Pain in the Office",
      date: "June 15, 2024",
      excerpt:
        "Simple tips and adjustments to your workspace can make a big difference in preventing common office-related back and neck pain.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Wellness",
    },
    {
      id: 4,
      title: "Nutrition for Spinal Health: What to Eat for a Healthy Back",
      date: "May 30, 2024",
      excerpt:
        "Explore how your diet impacts spinal health and discover foods that can support a strong and healthy back.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Nutrition",
    },
    {
      id: 5,
      title: "Managing Chronic Headaches with Chiropractic Care",
      date: "May 15, 2024",
      excerpt:
        "If you suffer from chronic headaches, chiropractic adjustments might offer the relief you've been seeking. Learn about our approach.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Chiropractic",
    },
    {
      id: 6,
      title: "The Importance of Stretching for Flexibility and Injury Prevention",
      date: "April 28, 2024",
      excerpt:
        "Regular stretching is vital for maintaining flexibility and preventing injuries. Discover effective stretches you can incorporate into your routine.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Physiotherapy",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Our Latest Insights & News</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Stay informed with our articles on chiropractic care, physiotherapy, wellness tips, and healthy living. We
        regularly share valuable information to help you on your health journey.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <Button variant="link" asChild className="text-green-700 hover:text-green-800 px-0">
                <Link href={`/blogs/${post.id}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination or Load More (optional) */}
      <div className="text-center mt-16">
        <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-lg shadow-md">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
