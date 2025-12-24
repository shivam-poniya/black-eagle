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
              Scale Your Tech Team with <span className="text-primary">World-Class IT Talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              We help startups and enterprises hire pre-vetted remote developers and dedicated teams — faster, smarter, and cost-effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/80 backdrop-blur-sm">
                  View Talent Profiles
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Global Leaders Trust Black Eagle</h2>
            <p className="text-lg text-muted-foreground">
              From sourcing and vetting talent to payroll, compliance, and ongoing management — we take care of everything so you can focus on building great products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Talent Pool", desc: "Access top 1% engineers worldwide" },
              { icon: Zap, title: "Fast Turnaround", desc: "Hire within 7-14 days" },
              { icon: ShieldCheck, title: "Enterprise Security", desc: "Full IP protection & compliance" },
              { icon: Users, title: "Transparent Pricing", desc: "No hidden fees or overhead" },
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
              <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">Flexible Engagement Models</h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex gap-2 group">
                View All Services 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "IT Staff Augmentation", 
                desc: "Quickly extend your existing team with skilled developers on a contract or full-time basis. Scale up or down without long-term commitments." 
              },
              { 
                title: "Dedicated Teams", 
                desc: "Build a fully managed, dedicated offshore team tailored to your project needs, timelines, and budget." 
              },
              { 
                title: "Managed Offshore Teams", 
                desc: "We manage HR, payroll, compliance, infrastructure, and retention while you maintain full control over work and deliverables." 
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group p-8 rounded-2xl bg-muted/20 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-8 leading-relaxed">
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

      {/* Tech Stack Marquee (Static grid for now) */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-12 text-muted-foreground">Expertise across modern technology stacks</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {["Java", "Spring Boot", "Node.js", "React", "Angular", "Next.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"].map((tech) => (
              <span key={tech} className="text-2xl font-bold font-heading">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Simple, Transparent Process</h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              We streamline hiring so you can focus on building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary-foreground/20 z-0" />

            {[
              { step: "01", title: "Share Requirements", desc: "Tell us your tech stack & team size." },
              { step: "02", title: "Shortlisting", desc: "We screen and share best-fit profiles." },
              { step: "03", title: "Interview", desc: "You interview and approve candidates." },
              { step: "04", title: "Onboard", desc: "We handle onboarding & management." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 rounded-full bg-primary border-4 border-primary-foreground/20 flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">
                  {item.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
                “We scaled our engineering team in under two weeks with highly skilled developers. Communication and quality were excellent.”
              </blockquote>
              <cite className="not-italic font-semibold text-muted-foreground">— US SaaS Founder</cite>
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
                “A reliable outsourcing partner that understands both technology and business.”
              </blockquote>
              <cite className="not-italic font-semibold text-muted-foreground">— CTO, European Startup</cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to scale your team?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let’s discuss your requirements and get you the right talent.
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
