import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Globe, Zap, ShieldCheck, ArrowRight, Users } from "lucide-react";
import { HeroScene } from "@/components/three/HeroScene";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* 3D Intro Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Next-Gen IT Sourcing
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black font-heading leading-none mb-8 text-white tracking-tighter"
            >
              BLACK <span className="text-primary">EAGLE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl text-blue-100/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
            >
              Scale your engineering team with elite global talent. Pre-vetted, production-ready, and seamlessly integrated.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 h-16 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="text-lg px-10 h-16 border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  Explore Talent
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trust Badges / Who We Are Summary */}
      <section className="py-32 bg-[#020617] relative">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white">Who We Are</h2>
            <p className="text-lg text-blue-100/50 mb-4">
              We are a <span className="font-bold text-white">Global IT Talent Solutions Company</span> helping businesses scale their technology teams with highly skilled, remote IT professionals.
            </p>
            <p className="text-lg text-blue-100/50">
              From talent sourcing and technical vetting to payroll, compliance, and ongoing management—we handle everything, so you can focus on building and scaling great products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Talent Pool", desc: "Access to a pre-vetted global talent pool" },
              { icon: Zap, title: "Accelerated Hiring", desc: "Reduced time-to-hire turnaround" },
              { icon: Users, title: "Predictable Pricing", desc: "Transparent and predictable pricing models" },
              { icon: ShieldCheck, title: "Enterprise Grade", desc: "Full security, NDAs & IP protection" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-100/40 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mt-4 tracking-tighter">Specialized Engagement Models</h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex gap-2 group text-primary font-bold">
                View All Services 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "IT Staff Augmentation", 
                desc: "Scale your existing team with experienced developers who integrate seamlessly—without long-term hiring risks." 
              },
              { 
                title: "Dedicated Teams", 
                desc: "Build a fully dedicated offshore team aligned to your product, timelines, and budget—managed for performance." 
              },
              { 
                title: "RPO", 
                desc: "End-to-end hiring support including sourcing, screening, and onboarding—hire efficiently without overhead." 
              },
              { 
                title: "Managed Teams", 
                desc: "We manage HR, payroll, compliance, and infrastructure while you maintain control over execution." 
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group p-10 rounded-3xl bg-muted/20 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-10 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-6 h-6 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white blur-[150px] rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-10 tracking-tighter leading-none">Why Global Leaders <br/>Choose Us</h2>
              <div className="space-y-8">
                {[
                  "Pre-vetted, production-ready engineers",
                  "Flexible hiring and engagement models",
                  "Full IP protection & NDAs",
                  "Dedicated account management",
                  "Time-zone aligned collaboration"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-medium opacity-90">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-12 text-2xl font-bold opacity-100 italic border-l-4 border-white/30 pl-6">
                We don’t just provide talent—we build long-term partnerships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Elite Talent", value: "Pre-vetted" },
                { label: "Hiring Models", value: "Flexible" },
                { label: "Security", value: "Full IP" },
                { label: "Success Rate", value: "98.5%" }
              ].map((stat, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 p-10 rounded-3xl border border-white/10 text-center backdrop-blur-md"
                >
                  <div className="text-3xl font-black mb-2">{stat.value}</div>
                  <div className="text-xs opacity-60 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeIn}
              className="bg-background p-12 rounded-3xl shadow-xl border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Users size={120} />
              </div>
              <div className="mb-8 text-primary flex gap-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
              </div>
              <blockquote className="text-2xl font-medium mb-10 leading-relaxed text-foreground italic">
                “We scaled our engineering team quickly with highly skilled developers. Communication and quality exceeded expectations.”
              </blockquote>
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full" />
                  <div>
                      <cite className="not-italic font-bold text-foreground">Founder</cite>
                      <p className="text-sm text-muted-foreground">US SaaS Company</p>
                  </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-background p-12 rounded-3xl shadow-xl border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe size={120} />
              </div>
              <div className="mb-8 text-primary flex gap-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
              </div>
              <blockquote className="text-2xl font-medium mb-10 leading-relaxed text-foreground italic">
                “A reliable outsourcing partner that understands both technology and business outcomes.”
              </blockquote>
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full" />
                  <div>
                      <cite className="not-italic font-bold text-foreground">CTO</cite>
                      <p className="text-sm text-muted-foreground">European Startup</p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black font-heading mb-10 tracking-tighter"
          >
            Ready to <span className="text-primary italic">Transform</span> <br/>Your Team?
          </motion.h2>
          <p className="text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light">
            Let’s discuss your requirements and connect you with the right talent today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-20 px-16 text-2xl rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              Start Hiring Now
            </Button>
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      </section>
    </div>
  );
}
