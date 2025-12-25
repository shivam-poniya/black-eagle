import { motion } from "framer-motion";
import { Check, Terminal, Users, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "IT Staff Augmentation",
      desc: "Add skilled developers quickly without long hiring cycles or permanent commitments. Integrate talent seamlessly into your existing workflows.",
      icon: Users,
      features: ["Quick integration", "Flexible scaling", "No long-term risk"]
    },
    {
      title: "Dedicated Development Teams",
      desc: "Fully dedicated teams working exclusively on your product with long-term continuity. Managed for high performance and cultural alignment.",
      icon: Terminal,
      features: ["Exclusively focused", "Full performance management", "Long-term continuity"]
    },
    {
      title: "Offshore Development Center (ODC)",
      desc: "Set up a complete offshore team with infrastructure, HR, payroll, and compliance managed by us while you retain technical control.",
      icon: Globe,
      features: ["Full infrastructure", "Compliance handled", "Reduced overhead"]
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "End-to-end hiring solutions for startups and enterprises. We handle sourcing, screening, and onboarding for efficient growth.",
      icon: Briefcase,
      features: ["End-to-end support", "Optimized hiring", "Scalable solutions"]
    }
  ];

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            We provide flexible global IT solutions designed to help businesses scale efficiently while reducing hiring and operational overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss a tailored engagement model that fits your unique business goals and scaling requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold px-8 h-12">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
