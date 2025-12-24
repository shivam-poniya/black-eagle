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
              Scale Your Tech Team
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
              Hire pre-vetted remote developers and dedicated teams. Faster, smarter, cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-8 h-12 cursor-pointer">
                  Get Started
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-foreground/20 cursor-pointer font-semibold">
                  View Talent
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Talent", desc: "Top engineers worldwide" },
              { icon: Zap, title: "Fast Hiring", desc: "7-14 days to hire" },
              { icon: ShieldCheck, title: "Secure", desc: "IP protection & compliance" },
              { icon: Users, title: "Transparent", desc: "No hidden fees" },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Staff Augmentation", desc: "Extend your team with contract or full-time developers." },
              { title: "Dedicated Teams", desc: "Full offshore team managed by us, controlled by you." },
              { title: "Managed Teams", desc: "Complete HR, payroll, and infrastructure support." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-bold font-heading mb-12">Technology Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Node.js", "Java", "Spring Boot", "Next.js", "AWS", "Docker", "PostgreSQL", "Kubernetes", "MongoDB"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Share Your Needs", desc: "Tell us your tech stack and requirements." },
              { num: "2", title: "We Screen Talent", desc: "Pre-vetted candidates within days." },
              { num: "3", title: "You Interview", desc: "Meet and approve your team." },
              { num: "4", title: "We Manage", desc: "Onboarding, support, and growth." },
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">Why Teams Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Scaled our team in 2 weeks. Exceptional quality and communication.", author: "US SaaS Founder" },
              { quote: "A partner that understands technology and business equally well.", author: "CTO, European Startup" }
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
                <p className="text-lg font-medium mb-4 text-foreground">{testimonial.quote}</p>
                <p className="text-sm text-foreground/60">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Hire?</h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Get your perfect team in 7-14 days.
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
