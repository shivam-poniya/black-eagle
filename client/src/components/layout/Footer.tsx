import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-24 md:py-40 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-5 space-y-12">
            <h3 className="text-6xl md:text-8xl font-black font-heading tracking-tighter leading-none italic">
              BLACK <br/>EAGLE
            </h3>
            <p className="text-2xl text-primary-foreground/60 font-light leading-relaxed max-w-md">
              The global standard for high-velocity engineering teams. We bridge the talent gap for the world's most ambitious builds.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs font-black tracking-[0.5em] uppercase opacity-40 mb-10">Strategy</h4>
              <ul className="space-y-6 text-xl font-bold tracking-tight">
                <li><Link href="/services" className="hover:text-white/60 transition-colors flex items-center gap-2">Solutions <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
                <li><Link href="/how-it-works" className="hover:text-white/60 transition-colors flex items-center gap-2">Methodology <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
                <li><Link href="/pricing" className="hover:text-white/60 transition-colors flex items-center gap-2">Engagement <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black tracking-[0.5em] uppercase opacity-40 mb-10">Talent</h4>
              <ul className="space-y-6 text-xl font-bold tracking-tight">
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Engineering <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Expertise <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Industries <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black tracking-[0.5em] uppercase opacity-40 mb-10">Network</h4>
              <ul className="space-y-6 text-xl font-bold tracking-tight">
                <li><Link href="/about" className="hover:text-white/60 transition-colors flex items-center gap-2">Agency <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
                <li><Link href="/contact" className="hover:text-white/60 transition-colors flex items-center gap-2">Connect <ArrowUpRight className="w-4 h-4 opacity-40" /></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/10 gap-8">
          <p className="text-sm font-black tracking-widest uppercase opacity-40">
            &copy; {new Date().getFullYear()} BLACK EAGLE ELITE.
          </p>
          <div className="flex gap-12 text-sm font-black tracking-widest uppercase opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Architecture</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
