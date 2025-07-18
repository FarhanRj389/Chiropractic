import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function OurServicesPage() {
  const services = [
    {
      title: "Chiropractic Care",
      description:
        "Our chiropractic services focus on diagnosing and treating neuromuscular disorders through manual adjustment and manipulation of the spine. We aim to reduce pain, improve function, and support your body's natural healing process. We address conditions like back pain, neck pain, headaches, and sciatica.",
      image: "/Chiropractic Care.jpg",
      benefits: [
        "Pain Relief",
        "Improved Mobility",
        "Enhanced Nervous System Function",
        "Better Posture",
        "Stress Reduction",
      ],
    },
    {
      title: "Physiotherapy Services",
      description:
        "Physiotherapy helps individuals restore, maintain, and maximize their strength, function, movement, and overall well-being. Our therapists use a variety of techniques, including therapeutic exercises, manual therapy, electrotherapy, and patient education. Ideal for sports injuries, post-surgical recovery, and chronic pain management.",
      image: "/Physiotherapy Services.jpg",
      benefits: [
        "Injury Rehabilitation",
        "Increased Strength & Flexibility",
        "Improved Balance & Coordination",
        "Chronic Pain Management",
        "Preventative Care",
      ],
    },
    {
      title: "Rehabilitation Programs",
      description:
        "Tailored rehabilitation programs designed to help you recover from injuries, surgeries, or chronic conditions. We guide you through progressive exercises and strategies to regain strength, mobility, and function, ensuring a safe and effective return to your daily activities.",
      image: "/Rehabilitation Programs.jpg",
      benefits: [
        "Post-Surgical Recovery",
        "Sports Injury Rehab",
        "Chronic Pain Management",
        "Functional Movement Training",
        "Personalized Exercise Plans",
      ],
    },
    {
      title: "Wellness & Preventative Care",
      description:
        "Beyond treating existing conditions, we emphasize proactive wellness and preventative strategies. Our programs include lifestyle advice, nutritional guidance, and ergonomic assessments to help you maintain optimal health and prevent future issues.",
      image: "/Wellness & Preventative Care.jpg",
      benefits: [
        "Lifestyle Coaching",
        "Nutritional Guidance",
        "Ergonomic Assessments",
        "Stress Management",
        "Long-term Health Planning",
      ],
    },
  ]

  const conditionsTreated = [
    "Back Pain (Lower, Mid, Upper)",
    "Neck Pain & Stiffness",
    "Headaches & Migraines",
    "Sciatica",
    "Disc Herniations",
    "Whiplash Injuries",
    "Sports Injuries (Sprains, Strains)",
    "Shoulder Pain (Rotator Cuff, Frozen Shoulder)",
    "Knee Pain (Osteoarthritis, Ligament Injuries)",
    "Hip Pain",
    "Foot & Ankle Pain",
    "Carpal Tunnel Syndrome",
    "Posture Correction",
    "Arthritis Management",
    "Vertigo & Dizziness",
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Our Comprehensive Services</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        At Core Chiropractic, we offer a wide range of services designed to help you achieve optimal health and
        well-being. Our personalized approach ensures you receive the best care tailored to your needs.
      </p>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
        >
          <div
            className={`relative h-72 md:h-96 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-2" : ""}`}
          >
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">{service.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Key Benefits:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md mt-6">
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      ))}

      {/* Conditions We Treat Section */}
      <section className="bg-gray-50 py-16 rounded-xl shadow-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Conditions We Treat</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Our expertise covers a wide range of musculoskeletal conditions and pain points.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto text-left">
          {conditionsTreated.map((condition, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>{condition}</span>
            </div>
          ))}
        </div>
        <Button
          asChild
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full mt-12 text-lg shadow-md"
        >
          <Link href="/contact">Discuss Your Condition</Link>
        </Button>
      </section>
    </div>
  )
}
