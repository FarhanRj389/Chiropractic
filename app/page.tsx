import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah J.",
      title: "Long-term Patient",
      quote:
        "Core Chiropractic has transformed my life! I no longer suffer from chronic back pain. The team is incredibly professional and caring.",
      avatarSrc: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Mark T.",
      title: "Sports Enthusiast",
      quote:
        "After my sports injury, the physiotherapy here was exceptional. I'm back on the field stronger than ever. Highly recommend their expertise.",
      avatarSrc: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Emily R.",
      title: "Office Worker",
      quote:
        "My neck pain from sitting all day was unbearable. Core Chiropractic provided effective adjustments and exercises that made a huge difference.",
      avatarSrc: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  const faqs = [
    {
      question: "What is chiropractic care?",
      answer:
        "Chiropractic care is a healthcare profession focused on the diagnosis, treatment, and prevention of musculoskeletal disorders, especially those affecting the spine. It emphasizes the body's natural ability to heal.",
    },
    {
      question: "Is chiropractic treatment safe?",
      answer:
        "Yes, chiropractic treatment is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal complaints.",
    },
    {
      question: "What should I expect on my first visit?",
      answer:
        "Your first visit will typically involve a comprehensive consultation, physical examination, and possibly diagnostic imaging. Based on the findings, a personalized treatment plan will be discussed.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We work with various insurance providers. Please contact our office directly to verify your insurance benefits.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className=" relative lg:h[800px] w-full overflow-hidden">
        <img
          src="/images_1.jpg"
          alt="Young physiotherapist helping patient with back problems"
          
          className="z-0 object-fill w-full h-[400px] lg:h-[900px]"
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Restore Your Health, Reclaim Your Life
            </h1>
            <p className="text-lg md:text-xl font-light drop-shadow-md">
              Providing exceptional chiropractic and physiotherapy care for optimal well-being.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Book Your Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-green-700 bg-transparent"
              >
                <Link href="/our-services">Learn More Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Philosophy Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Welcome to Core Chiropractic: Your Partner in Wellness
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a reputed Chiropractor, I strive to provide exceptional care to my patients and help them to effectively
            manage their condition. This gives me an excellent opportunity to serve my community and express my
            gratitude for their support and goodwill. Our philosophy centers on holistic healing, empowering your body's
            natural ability to recover and thrive.
          </p>
          <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
            <Link href="/about-us">
              Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/Chiropractic.jpg"
            alt="Doctor with patient physiotherapy clinic"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a range of services designed to address your unique health needs, from pain relief to performance
            enhancement.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <Image
                src="/chiropractic.png"
                alt="Chiropractic Icon"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Chiropractic Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Non-invasive treatments to alleviate pain, improve mobility, and enhance overall wellness through spinal
                adjustments.
              </p>
              <Button variant="link" asChild className="text-green-700 hover:text-green-800 px-0">
                <Link href="/our-services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <Image
                src="/massage.png"
                alt="Physiotherapy Icon"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Physiotherapy Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Evidence-based treatments and exercises to enhance physical function, manage pain, and promote recovery.
              </p>
              <Button variant="link" asChild className="text-green-700 hover:text-green-800 px-0">
                <Link href="/our-services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <Image
                src="/rehabilitation.png"
                alt="Rehabilitation Icon"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Rehabilitation Programs</h3>
              <p className="text-gray-700 leading-relaxed">
                Personalized programs to help you recover from injuries, improve strength, and prevent future issues.
              </p>
              <Button variant="link" asChild className="text-green-700 hover:text-green-800 px-0">
                <Link href="/our-services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Hear directly from those whose lives we've helped transform.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Start Your Journey to Better Health?
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Book an appointment today and experience the Core Chiropractic difference.
          </p>
          <Button
            asChild
            className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Book Online Now</Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest Insights from Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Stay informed with our articles on chiropractic care, physiotherapy, wellness tips, and healthy living.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Re-using blog post structure from app/blogs/page.tsx for snippet */}
            {[
              {
                id: 1,
                title: "Understanding the Benefits of Regular Chiropractic Adjustments",
                date: "July 10, 2024",
                excerpt:
                  "Discover how consistent chiropractic care can improve your overall health, reduce pain, and enhance your body's natural healing abilities.",
                image: "/RegularChiropractic.jpg",
              },
              {
                id: 2,
                title: "The Role of Physiotherapy in Post-Injury Rehabilitation",
                date: "June 25, 2024",
                excerpt:
                  "Learn how physiotherapy is crucial for effective recovery after an injury, helping to restore strength, mobility, and function.",
                image: "/Physiotherapy.jpg",
              },
              {
                id: 3,
                title: "Ergonomics at Work: Preventing Back Pain in the Office",
                date: "June 15, 2024",
                excerpt:
                  "Simple tips and adjustments to your workspace can make a big difference in preventing common office-related back and neck pain.",
                image: "/Ergonomics at Work.jpg",
              },
            ].map((post) => (
              <div
                key={post.id}
                className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
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
          <Button
            asChild
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full mt-12 text-lg shadow-md"
          >
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-12">
            Find answers to common questions about our services and what to expect.
          </p>
          <Accordion type="single" collapsible className="w-full text-left">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
