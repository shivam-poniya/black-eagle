import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tighter leading-none italic">
              BLACK EAGLE
            </h3>
            <p className="text-lg text-primary-foreground/60 font-light leading-relaxed max-w-sm">
              The global standard for high-velocity engineering teams. We architect the future of technology by bridging the talent gap for the world's most ambitious companies.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-8">Solutions</h4>
              <ul className="space-y-4 text-base font-bold tracking-tight">
                <li><Link href="/services" className="hover:text-white/60 transition-colors flex items-center gap-2">Augmentation <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/services" className="hover:text-white/60 transition-colors flex items-center gap-2">Dedicated Pods <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/services" className="hover:text-white/60 transition-colors flex items-center gap-2">Strategic RPO <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/services" className="hover:text-white/60 transition-colors flex items-center gap-2">Managed ODC <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-8">Talent</h4>
              <ul className="space-y-4 text-base font-bold tracking-tight">
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Engineering <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Expertise <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">AI Systems <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/talent" className="hover:text-white/60 transition-colors flex items-center gap-2">Cloud Infrastructure <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-8">Agency</h4>
              <ul className="space-y-4 text-base font-bold tracking-tight">
                <li><Link href="/about" className="hover:text-white/60 transition-colors flex items-center gap-2">Our DNA <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/how-it-works" className="hover:text-white/60 transition-colors flex items-center gap-2">Methodology <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/pricing" className="hover:text-white/60 transition-colors flex items-center gap-2">Investment <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/contact" className="hover:text-white/60 transition-colors flex items-center gap-2">Global Reach <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-8">Connect</h4>
              <ul className="space-y-4 text-base font-bold tracking-tight">
                <li><Link href="/contact" className="hover:text-white/60 transition-colors flex items-center gap-2">Book Call <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><Link href="/contact" className="hover:text-white/60 transition-colors flex items-center gap-2">Inquiry <ArrowUpRight className="w-3 h-3 opacity-40" /></Link></li>
                <li><a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight className="w-3 h-3 opacity-40" /></a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2">X / Twitter <ArrowUpRight className="w-3 h-3 opacity-40" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <p className="text-[10px] font-black tracking-widest uppercase opacity-40">
            &copy; {new Date().getFullYear()} BLACK EAGLE ELITE. THE GLOBAL STANDARD.
          </p>
          <div className="flex gap-12 text-[10px] font-black tracking-widest uppercase opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Architecture</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Engagement</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
