import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

interface TeamMemberCardProps {
  name: string
  role: string
  description: string
  imageSrc: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export function TeamMemberCard({ name, role, description, imageSrc, socialLinks }: TeamMemberCardProps) {
  return (
    <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={name}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-green-700 font-medium mb-3">{role}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{description}</p>
        {socialLinks && (
          <div className="flex justify-center gap-4 mt-4">
            {socialLinks.facebook && (
              <Link href={socialLinks.facebook} aria-label={`${name} on Facebook`}>
                <Facebook className="h-6 w-6 text-gray-500 hover:text-green-700 transition-colors" />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link href={socialLinks.instagram} aria-label={`${name} on Instagram`}>
                <Instagram className="h-6 w-6 text-gray-500 hover:text-green-700 transition-colors" />
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link href={socialLinks.linkedin} aria-label={`${name} on LinkedIn`}>
                <Linkedin className="h-6 w-6 text-gray-500 hover:text-green-700 transition-colors" />
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
