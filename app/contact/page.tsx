import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
        We'd love to hear from you! Whether you have questions about our services, want to book an appointment, or
        simply need more information, feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-7 w-7 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Our Location</h3>
                  <p className="text-gray-700 text-lg">123 Wellness Way, Healthville, 12345, New Zealand</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-7 w-7 text-green-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Phone</h3>
                  <p className="text-gray-700 text-lg">092178500</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-7 w-7 text-green-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Email</h3>
                  <p className="text-gray-700 text-lg">info@corechiropractic.co.nz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-7 w-7 text-green-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Operating Hours</h3>
                  <p className="text-gray-700 text-lg">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700 text-lg">Sat: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-700 text-lg">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for Map */}
          <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center text-gray-500 text-center p-4">
            <p>
              [Google Maps Placeholder]
              <br />
              (Actual map integration requires an API key and is beyond the scope of this static clone.)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-lg">
                Name
              </Label>
              <Input id="name" placeholder="Your Full Name" className="h-12 text-base" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input id="email" type="email" placeholder="your@example.com" className="h-12 text-base" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject" className="text-lg">
                Subject
              </Label>
              <Input id="subject" placeholder="Subject of your message" className="h-12 text-base" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-lg">
                Message
              </Label>
              <Textarea id="message" placeholder="Your message here..." rows={6} className="text-base" />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-md shadow-md"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
