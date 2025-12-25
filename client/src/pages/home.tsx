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
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8 text-black">
              Scale Your Engineering Team
            </h1>
            <p className="text-lg md:text-xl text-grey-600 mb-10 max-w-2xl mx-auto leading-relaxed text-slate-600">
              We help startups and enterprises hire pre-vetted remote developers and dedicated engineering teams—fast, flexible, and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-cta font-semibold rounded-none px-10 h-14 cursor-pointer text-lg">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/talent">
                <Button size="lg" variant="outline" className="rounded-none px-10 h-14 border-black text-black hover:bg-black hover:text-white transition-all cursor-pointer font-semibold text-lg">
                  View Available Talent
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Companies Trust Us */}
      <section className="py-24 bg-white border-t border-grey-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-black">Why Companies Trust Black Eagle</h2>
            <p className="text-lg text-slate-600">
              From talent sourcing and technical vetting to payroll, compliance, and ongoing management—we handle everything, so you can focus on building and scaling great products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                className="group"
              >
                <feature.icon className="w-10 h-10 text-black mb-6 group-hover:translate-y-[-4px] transition-transform duration-300" />
                <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">Our Services</h2>
            <p className="text-lg text-slate-600">Flexible engagement models built for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "IT Staff Augmentation", 
                desc: "Scale your existing team with experienced developers who integrate seamlessly into your workflows." 
              },
              { 
                title: "Dedicated Teams", 
                desc: "Build a fully dedicated offshore team aligned to your product, timelines, and budget." 
              },
              { 
                title: "RPO Services", 
                desc: "End-to-end hiring support including sourcing, screening, interviews, and onboarding." 
              },
              { 
                title: "Managed Teams", 
                desc: "We manage HR, payroll, compliance, and infrastructure while you maintain control over delivery." 
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white border border-slate-200 hover:border-black transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent & Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-black">Talent & Expertise</h2>
              <ul className="space-y-6">
                {[
                  "Frontend Developers",
                  "Backend Developers", 
                  "Full-Stack Engineers",
                  "Mobile Application Developers",
                  "QA & Automation Engineers",
                  "DevOps & Cloud Engineers"
                ].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg border-b border-slate-100 pb-4">
                    <span className="w-2 h-2 bg-black rounded-none" />
                    <span className="font-medium text-black">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-12">
              <h3 className="text-2xl font-bold font-heading mb-8 text-black">Technology Expertise</h3>
              <div className="flex flex-wrap gap-4">
                {["Java", "Spring Boot", "Node.js", "React", "Angular", "Next.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-white border border-slate-200 text-black font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-20 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Share Requirements", desc: "Tell us your tech stack, experience level, and team size." },
              { num: "02", title: "Shortlisting", desc: "We screen and share the most suitable profiles." },
              { num: "03", title: "Interview", desc: "You interview and approve the candidates." },
              { num: "04", title: "Onboarding", desc: "We manage and support the team while you drive execution." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/10 mb-6 absolute -top-8 -left-4 z-0">{item.num}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-black">Client Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { quote: "We scaled our engineering team quickly with highly skilled developers. Communication and quality exceeded expectations.", author: "Founder, US SaaS Company" },
              { quote: "A reliable outsourcing partner that understands both technology and business outcomes.", author: "CTO, European Startup" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="text-left p-12 bg-slate-50 border-l-4 border-black"
              >
                <p className="text-xl font-medium mb-8 text-black leading-relaxed italic">"{testimonial.quote}"</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-black">Ready to Scale Your Team?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your requirements and connect you with the right talent.
          </p>
          <Link href="/contact">
            <Button size="lg" className="btn-cta font-bold rounded-none px-12 h-16 cursor-pointer text-xl">
              Start Hiring Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
