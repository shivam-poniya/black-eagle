import heroBg from "@assets/generated_images/abstract_tech_network_visualization_blue_and_black.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Code2, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 text-foreground">
              Scale Your Engineering Team with <span className="text-primary">Global IT Talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              We help startups and enterprises hire pre-vetted remote developers and dedicated engineering teams—fast, flexible, and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/80 backdrop-blur-sm">
                  View Available Talent
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges / Who We Are Summary */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We are a <span className="font-bold text-foreground">Global IT Talent Solutions Company</span> helping businesses scale their technology teams with highly skilled, remote IT professionals.
            </p>
            <p className="text-lg text-muted-foreground">
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
                className="bg-background p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">Specialized Engagement Models</h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex gap-2 group">
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
                className="group p-8 rounded-2xl bg-muted/20 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-8 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-white/20">
                  <span className="text-xl group-hover:text-white">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {[
                  "Pre-vetted, production-ready engineers",
                  "Flexible hiring and engagement models",
                  "Full IP protection & NDAs",
                  "Dedicated account management",
                  "Time-zone aligned collaboration"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-lg opacity-90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-xl font-bold opacity-100">
                We don’t just provide talent—we build long-term partnerships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Talent", value: "Pre-vetted" },
                { label: "Models", value: "Flexible" },
                { label: "Protection", value: "Full IP" },
                { label: "Partnership", value: "Long-term" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-primary-foreground/10 p-8 rounded-2xl border border-primary-foreground/10 text-center">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-60 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeIn}
              className="bg-background p-10 rounded-2xl shadow-sm border border-border"
            >
              <div className="mb-6 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                “We scaled our engineering team quickly with highly skilled developers. Communication and quality exceeded expectations.”
              </blockquote>
              <cite className="not-italic font-semibold text-muted-foreground">— Founder, US SaaS Company</cite>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-background p-10 rounded-2xl shadow-sm border border-border"
            >
              <div className="mb-6 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                “A reliable outsourcing partner that understands both technology and business outcomes.”
              </blockquote>
              <cite className="not-italic font-semibold text-muted-foreground">— CTO, European Startup</cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to Scale Your Team?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let’s discuss your requirements and connect you with the right talent.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-xl rounded-full">
              Start Hiring Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
