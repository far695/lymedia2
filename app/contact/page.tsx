import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Let's start a conversation about your next project.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="bg-muted/30 rounded-lg p-8 mb-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:hello@ascent.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    hello@ascent.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:+14155555555" className="text-muted-foreground hover:text-foreground transition-colors">
                    +1 (415) 555-5555
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">Address</h3>
                  <address className="not-italic text-muted-foreground">
                    123 Design Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 2pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? We've got answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We offer a comprehensive range of services including brand identity design, web development, UX design, and digital marketing. Each service is tailored to meet the specific needs of your business.'
              },
              {
                question: 'How much do your services cost?',
                answer: 'Our pricing is customized based on the scope and requirements of each project. We provide detailed proposals after understanding your specific needs during an initial consultation.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a comprehensive brand identity and digital platform could take 3-4 months. We\'ll provide a timeline estimate during our initial discussions.'
              },
              {
                question: 'Do you work with clients internationally?',
                answer: 'Yes, we work with clients globally. Our collaborative process and tools enable us to work effectively with clients regardless of location. We\'ve successfully completed projects for clients across North America, Europe, and Asia.'
              },
              {
                question: 'What is your project process?',
                answer: 'Our process typically includes discovery, strategy development, design and development, and launch. We maintain clear communication throughout and involve you at key decision points to ensure the final product aligns with your vision.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer various support and maintenance packages to keep your digital assets performing optimally. We can discuss the right support option for your needs during our project planning.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}