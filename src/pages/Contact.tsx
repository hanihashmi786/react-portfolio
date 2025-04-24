import { Mail, MapPin, Phone } from "lucide-react"
import SectionTitle from "../components/SectionTitle"
import ContactForm from "../components/ContactForm"
import TestimonialCard from "../components/TestimonialCard"

const Contact = () => {
  const testimonials = [
    {
      content:
        "Working with Hani was a fantastic experience. He delivered high-quality code on time and was very responsive to feedback.",
      author: "Jane Smith",
      position: "CTO",
      company: "Tech Innovations",
    },
    {
      content:
        "An exceptional developer who consistently delivers clean, well-structured code. His attention to detail and problem-solving skills are outstanding.",
      author: "John Doe",
      position: "Product Manager",
      company: "Digital Solutions",
    },
    {
      content:
        "I was impressed by Hani's technical expertise and ability to translate our requirements into a beautiful, functional website.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Creative Agency",
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact Me" subtitle="Get in touch for collaborations or inquiries" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to contact me using the form or through my contact information.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:hanimhashmi121@gmail.com"
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      hanimhashmi121@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="tel:+11234567890"
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      +1 (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">City, Country</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
