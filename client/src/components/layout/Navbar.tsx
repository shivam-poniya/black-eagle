import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/talent", label: "Talent" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black font-heading cursor-pointer tracking-tighter text-black uppercase">
          Black Eagle
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all cursor-pointer",
                  location === link.href
                    ? "text-black border-b-2 border-black"
                    : "text-slate-400 hover:text-black"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button size="sm" className="btn-cta font-bold rounded-none px-6 h-10 cursor-pointer uppercase tracking-widest text-xs">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <span className="font-black text-xl uppercase tracking-tighter">Menu</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex flex-col p-6 gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={cn(
                        "text-lg font-bold uppercase tracking-widest transition-all cursor-pointer",
                        location === link.href
                          ? "text-black"
                          : "text-slate-400"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-8 border-t border-slate-100">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="btn-cta w-full font-bold rounded-none h-12 cursor-pointer uppercase tracking-widest">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
