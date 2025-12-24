import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading tracking-tighter">
              Black Eagle
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Global IT outsourcing and staff augmentation. We build world-class engineering teams for startups and enterprises.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">IT Staff Augmentation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Dedicated Teams</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">RPO Services</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Managed Offshore Teams</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors cursor-pointer">How It Works</Link></li>
              <li><Link href="/talent" className="hover:text-white transition-colors cursor-pointer">Our Talent</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>contact@blackeagle.com</li>
              <li>Global Operations</li>
              <li className="pt-4">
                <Link href="/contact" className="inline-block px-4 py-2 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  Start Hiring
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Black Eagle. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
