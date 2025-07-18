import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="Core Chiropractic Logo"
              width={150}
              height={40}
              className="h-10 w-auto invert" // Invert for dark background
            />
          </Link>
          <p className="text-sm leading-relaxed">
            Dedicated to providing exceptional chiropractic and physiotherapy care to help you achieve optimal health
            and wellness. Your journey to a pain-free life starts here.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-green-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-services" className="hover:text-green-500 transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-green-500 transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/our-specialised-focus" className="hover:text-green-500 transition-colors">
                Specialised Focus
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-500 mt-1" />
              <span>123 Wellness Way, Healthville, 12345, New Zealand</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-green-500" />
              <span>092178500</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-500" />
              <span>info@corechiropractic.co.nz</span>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Operating Hours</h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 9:00 AM - 1:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Core Chiropractic. All rights reserved.
      </div>
    </footer>
  )
}
