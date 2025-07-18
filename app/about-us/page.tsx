import Image from "next/image"
import { TeamMemberCard } from "@/components/team-member-card"
import { CheckCircle } from "lucide-react"

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Dr. Jane Doe",
      role: "Lead Chiropractor",
      description:
        "Dr. Doe has over 15 years of experience in chiropractic care, specializing in spinal adjustments and holistic wellness. She is passionate about helping patients achieve optimal health.",
      imageSrc: "/Lead Chiropractor.jpg",
      socialLinks: {
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Mr. John Smith",
      role: "Senior Physiotherapist",
      description:
        "John is a highly skilled physiotherapist with expertise in sports injury rehabilitation and post-surgical recovery. He focuses on evidence-based exercises and manual therapy.",
      imageSrc: "/Senior Physiotherapist.jpg",
      socialLinks: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Ms. Emily White",
      role: "Wellness Coordinator",
      description:
        "Emily ensures a smooth patient experience and provides guidance on wellness programs. Her friendly approach makes every visit comfortable and welcoming.",
      imageSrc: "/Wellness Coordinator.jpg",
      socialLinks: {
        instagram: "#",
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">About Core Chiropractic</h1>

      {/* Our Story/Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/Chiropractic.jpg"
            alt="Modern chiropractic clinic interior"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">Our Commitment to Your Health</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Core Chiropractic, we believe in a holistic approach to health and wellness. Our mission is to empower
            our community to live healthier, pain-free lives through personalized chiropractic and physiotherapy care.
            We are committed to providing the highest standard of care in a compassionate and supportive environment.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Patient-Centered Care</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Evidence-Based Treatments</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Holistic Wellness Approach</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Meet Our Dedicated Team</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our experienced and compassionate team is here to guide you on your journey to optimal health.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Clinic Values Section */}
      <section className="bg-green-50 py-16 rounded-xl shadow-lg">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Image
                src="/placeholder.svg?text=Integrity+Icon&height=64&width=64"
                alt="Integrity Icon"
                width={64}
                height={64}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
              <p className="text-gray-700 text-sm">
                We operate with honesty and transparency, building trust with every patient interaction.
              </p>
            </div>
            <div className="space-y-3">
              <Image
                src="/placeholder.svg?text=Compassion+Icon&height=64&width=64"
                alt="Compassion Icon"
                width={64}
                height={64}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Compassion</h3>
              <p className="text-gray-700 text-sm">
                We approach every patient with empathy, understanding their unique needs and concerns.
              </p>
            </div>
            <div className="space-y-3">
              <Image
                src="/placeholder.svg?text=Excellence+Icon&height=64&width=64"
                alt="Excellence Icon"
                width={64}
                height={64}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
              <p className="text-gray-700 text-sm">
                We are committed to delivering the highest quality of care and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
