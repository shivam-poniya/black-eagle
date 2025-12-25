import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-heading uppercase tracking-tighter">Black Eagle</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Global IT outsourcing solutions. Building world-class engineering teams for modern enterprises.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.2em] text-white/50">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/services" className="hover:text-white text-slate-400 transition-colors cursor-pointer">Staff Augmentation</Link></li>
              <li><Link href="/services" className="hover:text-white text-slate-400 transition-colors cursor-pointer">Dedicated Teams</Link></li>
              <li><Link href="/services" className="hover:text-white text-slate-400 transition-colors cursor-pointer">ODC Setup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.2em] text-white/50">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white text-slate-400 transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/talent" className="hover:text-white text-slate-400 transition-colors cursor-pointer">Talent</Link></li>
              <li><Link href="/pricing" className="hover:text-white text-slate-400 transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.2em] text-white/50">Contact</h4>
            <p className="text-sm text-slate-400 mb-8">contact@blackeagle.com</p>
            <Link href="/contact">
              <Button className="btn-cta w-full font-bold rounded-none h-12 cursor-pointer uppercase tracking-widest text-xs">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
          <p>&copy; {new Date().getFullYear()} Black Eagle. Global Operations.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
