import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading">Black Eagle</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Global IT outsourcing. Building world-class engineering teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Staff Augmentation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Dedicated Teams</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">RPO Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/talent" className="hover:text-white transition-colors cursor-pointer">Talent</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Contact</h4>
            <p className="text-sm text-white/70 mb-4">contact@blackeagle.com</p>
            <Link href="/contact">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg cursor-pointer">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Black Eagle. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
