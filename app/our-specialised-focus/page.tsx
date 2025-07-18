import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpecialisedFocusPage() {
  const focusAreas = [
    {
      title: "Headache & Migraine Relief",
      description:
        "We specialize in identifying and addressing the underlying causes of headaches and migraines, offering non-pharmacological solutions to reduce frequency and intensity. Our approach includes spinal adjustments, posture correction, and lifestyle advice.",
      image: "/Headache & Migraine Relief.jpg",
      benefits: [
        "Reduced headache frequency",
        "Decreased migraine intensity",
        "Improved sleep quality",
        "Better overall well-being",
      ],
    },
    {
      title: "Sports Injury Recovery & Prevention",
      description:
        "Our focus includes helping athletes recover from sports-related injuries, improve performance, and prevent future issues through targeted chiropractic and physiotherapy interventions. We work with athletes of all levels to get them back in the game safely and effectively.",
      image: "/Sports Injury Recovery & Prevention.jpg",
      benefits: [
        "Faster recovery from injuries",
        "Enhanced athletic performance",
        "Improved flexibility and strength",
        "Injury prevention strategies",
      ],
    },
    {
      title: "Posture Correction & Ergonomics",
      description:
        "Poor posture can lead to various musculoskeletal issues. We provide comprehensive assessments and personalized plans for posture correction, including spinal adjustments, exercises, and ergonomic advice for your home and workplace.",
      image: "/Ergonomicss.jpg",
      benefits: [
        "Reduced back and neck pain",
        "Improved body alignment",
        "Increased energy levels",
        "Prevention of future issues",
      ],
    },
    {
      title: "Chronic Pain Management",
      description:
        "Living with chronic pain can be debilitating. Our integrated approach combines chiropractic care, physiotherapy, and lifestyle modifications to help manage chronic pain conditions, improve quality of life, and reduce reliance on medication.",
      image: "/Ergonomics.jpg",
      benefits: [
        "Significant pain reduction",
        "Improved daily function",
        "Enhanced mood and sleep",
        "Personalized coping strategies",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Our Specialised Focus</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        At Core Chiropractic, we have developed specialized expertise in several key areas to provide targeted and
        effective care for specific conditions, ensuring you receive the most advanced and appropriate treatments.
      </p>

      {focusAreas.map((area, index) => (
        <section
          key={index}
          className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
        >
          <div
            className={`relative h-72 md:h-96 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-2" : ""}`}
          >
            <Image src={area.image || "/placeholder.svg"} alt={area.title} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">{area.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{area.description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Benefits Include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700">
              {area.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md mt-6">
              <Link href="/contact">
                Learn More & Book <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      ))}

      {/* General CTA */}
      <section className="bg-green-700 text-white py-12 rounded-xl shadow-lg text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-bold">Not sure which focus area is right for you?</h2>
          <p className="text-lg">Contact us today for a personalized consultation to discuss your health goals.</p>
          <Button
            asChild
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg shadow-md"
          >
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
