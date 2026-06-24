import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-16 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Brand</h3>
            <p className="text-muted-foreground max-w-xs">
              We create digital experiences that elevate your brand and inspire your audience.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Partners', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>123 Design Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="pt-2">
                <a href="mailto:hello@brand.com" className="hover:text-foreground transition-colors">
                  hello@brand.com
                </a>
              </p>
              <p>
                <a href="tel:+14155555555" className="hover:text-foreground transition-colors">
                  +1 (415) 555-5555
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}