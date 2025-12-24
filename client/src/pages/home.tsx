import heroBg from "@assets/generated_images/abstract_tech_network_visualization_blue_and_black.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8 text-foreground">
              Scale Your Engineering Team with Global IT Talent
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
              We help startups and enterprises hire pre-vetted remote developers and dedicated engineering teams—fast, flexible, and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-8 h-12 cursor-pointer">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-foreground/20 cursor-pointer font-semibold">
                  View Available Talent
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Companies Trust Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Companies Trust Black Eagle</h2>
            <p className="text-lg text-foreground/60">
              From talent sourcing and technical vetting to payroll, compliance, and ongoing management—we handle everything, so you can focus on building and scaling great products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Talent Pool", desc: "Access to pre-vetted professionals worldwide" },
              { icon: Zap, title: "Accelerated Hiring", desc: "Fast turnaround without compromise" },
              { icon: ShieldCheck, title: "Enterprise Security", desc: "IP protection, NDAs & compliance" },
              { icon: Users, title: "Transparent Pricing", desc: "Predictable, no hidden costs" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">Flexible engagement models built for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "IT Staff Augmentation", 
                desc: "Scale your existing team with experienced developers who integrate seamlessly into your workflows—without long-term hiring risks." 
              },
              { 
                title: "Dedicated Teams", 
                desc: "Build a fully dedicated offshore team aligned to your product, timelines, and budget—managed for performance and continuity." 
              },
              { 
                title: "RPO Services", 
                desc: "End-to-end hiring support including sourcing, screening, interviews, and onboarding—so you hire efficiently without recruitment overhead." 
              },
              { 
                title: "Managed Teams", 
                desc: "We manage HR, payroll, compliance, infrastructure, and retention while you maintain full control over delivery and execution." 
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent & Expertise */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">Talent & Expertise</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">Roles We Offer</h3>
              <ul className="space-y-3">
                {[
                  "Frontend Developers",
                  "Backend Developers", 
                  "Full-Stack Engineers",
                  "Mobile Application Developers",
                  "QA & Automation Engineers",
                  "DevOps & Cloud Engineers"
                ].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="font-medium">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">Technology Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Spring Boot", "Node.js", "React", "Angular", "Next.js", "React Native", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Share Your Requirements", desc: "Tell us your tech stack, experience level, and team size." },
              { num: "2", title: "Candidate Shortlisting", desc: "We screen and share the most suitable profiles." },
              { num: "3", title: "Interview & Selection", desc: "You interview and approve the candidates." },
              { num: "4", title: "Onboarding & Delivery", desc: "We onboard, manage, and support the team while you drive execution." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pre-vetted, production-ready engineers",
              "Flexible hiring and engagement models",
              "Full IP protection & NDAs",
              "Dedicated account management",
              "Time-zone aligned collaboration",
              "Long-term partnership approach"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4"
              >
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-lg text-foreground/70 mt-12 italic">
            We don't just provide talent—we build long-term partnerships.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "We scaled our engineering team quickly with highly skilled developers. Communication and quality exceeded expectations.", author: "Founder, US SaaS Company" },
              { quote: "A reliable outsourcing partner that understands both technology and business outcomes.", author: "CTO, European Startup" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-lg border border-border"
              >
                <div className="mb-4 text-primary">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-lg">★</span>)}
                </div>
                <p className="text-lg font-medium mb-4 text-foreground italic">{testimonial.quote}</p>
                <p className="text-sm text-foreground/60">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Scale Your Team?</h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and connect you with the right talent.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-10 h-12 cursor-pointer">
              Start Hiring Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
