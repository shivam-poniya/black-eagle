import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Globe, Zap, ShieldCheck, ArrowRight, Users } from "lucide-react";
import { HeroScene } from "@/components/three/HeroScene";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      {/* Abstract Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] border border-primary/20 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] border border-primary/10 rounded-full"
        />
      </div>
      
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
            <span className="inline-block py-2 px-8 rounded-full bg-primary text-primary-foreground text-sm font-black tracking-[0.6em] uppercase mb-10 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Next-Gen IT Sourcing
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl sm:text-7xl md:text-[10rem] font-black font-heading leading-none mb-8 sm:mb-12 text-foreground tracking-tighter"
          >
            BLACK EAGLE
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-10 sm:mb-16 leading-relaxed max-w-3xl mx-auto font-light tracking-tight"
          >
            Scale your engineering team with elite global talent. <br className="hidden md:block" />
            Pre-vetted, production-ready, and seamlessly integrated.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link href="/contact">
              <Button size="lg" className="text-xl px-12 h-20 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group cursor-pointer shadow-2xl shadow-primary/40 transition-all hover:scale-105">
                Get Started
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link href="/talent">
              <Button size="lg" variant="outline" className="text-xl px-12 h-20 border-border text-foreground hover:bg-accent rounded-full backdrop-blur-xl cursor-pointer transition-all hover:scale-105">
                Explore Talent
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-black">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" 
        />
      </motion.div>
    </section>
  );
}

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      <Hero />

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
      <section className="py-32 bg-background/40 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">Our Solutions</span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black font-heading mt-4 tracking-tighter leading-[0.85]">Elite <br/><span className="text-primary italic">Engagement</span> Models</h2>
            </div>
            <Link href="/services">
              <Button variant="link" className="hidden md:flex gap-2 text-primary font-black text-lg p-0 h-auto hover:no-underline group">
                Exploration 
                <span className="group-hover:translate-x-2 transition-transform duration-500">——→</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Staff Augmentation", 
                desc: "Elite engineers integrated into your sprint cycle in record time.",
                icon: "01"
              },
              { 
                title: "Dedicated Teams", 
                desc: "Self-managing pods of excellence aligned with your core mission.",
                icon: "02"
              },
              { 
                title: "Strategic RPO", 
                desc: "Revolutionizing your internal hiring via our proprietary global network.",
                icon: "03"
              },
              { 
                title: "Managed ODC", 
                desc: "Fully operational offshore centers with enterprise-grade governance.",
                icon: "04"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group p-12 rounded-[2.5rem] bg-card/30 border border-border/50 hover:bg-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.25)] flex flex-col justify-between min-h-[400px]"
              >
                <div>
                  <span className="text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity mb-8 block font-heading">{service.icon}</span>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter leading-none group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 mb-10 leading-relaxed text-lg transition-colors">
                    {service.desc}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-45">
                  <ArrowRight className="w-8 h-8 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400 blur-[180px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500 blur-[180px] rounded-full animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading mb-8 md:mb-10 tracking-tighter leading-[0.9]">Why Global Leaders <br/><span className="text-blue-200">Choose Us</span></h2>
              <div className="space-y-4 sm:space-y-6">
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
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/20 transition-all">
                      <Check className="w-5 h-5 text-blue-200" />
                    </div>
                    <span className="text-xl font-medium opacity-90 group-hover:opacity-100 transition-opacity">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-16 text-2xl font-bold opacity-100 italic border-l-4 border-blue-400 pl-8 bg-white/5 py-6 rounded-r-2xl backdrop-blur-sm">
                "We don’t just provide talent—we build long-term partnerships."
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Elite Talent", value: "Pre-vetted", color: "bg-blue-500/20" },
                { label: "Hiring Models", value: "Flexible", color: "bg-indigo-500/20" },
                { label: "Security", value: "Full IP", color: "bg-cyan-500/20" },
                { label: "Success Rate", value: "98.5%", color: "bg-blue-400/20" }
              ].map((stat, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "p-12 rounded-[2rem] border border-white/10 text-center backdrop-blur-xl transition-transform hover:-translate-y-2",
                      stat.color
                    )}
                >
                  <div className="text-4xl font-black mb-3">{stat.value}</div>
                  <div className="text-xs opacity-60 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
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
