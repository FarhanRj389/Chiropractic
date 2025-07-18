import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-services", label: "Our Services" },
    { href: "/our-specialised-focus", label: "Our Specialised Focus" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-green-800 py-2 text-sm text-white hidden md:block">
        <div className="container mx-auto flex justify-end items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-300" />
            <span>092178500</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-green-300" />
            <span>info@corechiropractic.co.nz</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_2.png"
            alt="Core Chiropractic Logo"
            width={150}
            height={40}
            className="h-16 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center  gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
        </div>
        <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-md">
            <Link href="/contact">Book Online</Link>
          </Button>
        {/* Mobile navigation toggle */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-green-700"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white mt-4">
                <Link href="/contact">Book Online</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
