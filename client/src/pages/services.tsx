import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-foreground/60">
            We provide flexible global IT solutions designed to help businesses scale efficiently while reducing hiring and operational overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { 
              title: "IT Staff Augmentation", 
              desc: "Add skilled developers quickly without long hiring cycles or permanent commitments.",
              details: ["Seamless integration", "Flexible contracts", "Quick onboarding"]
            },
            { 
              title: "Dedicated Development Teams", 
              desc: "Fully dedicated teams working exclusively on your product with long-term continuity.",
              details: ["Full team management", "Aligned with your goals", "Dedicated support"]
            },
            { 
              title: "Offshore Development Center (ODC)", 
              desc: "Set up a complete offshore team with infrastructure, HR, payroll, and compliance managed by us.",
              details: ["Full infrastructure", "HR & Compliance", "Scalable setup"]
            },
            { 
              title: "RPO Services", 
              desc: "End-to-end hiring solutions for startups and enterprises.",
              details: ["Sourcing to onboarding", "Quality guarantee", "Reduced overhead"]
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.desc}</p>
              <ul className="space-y-3">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss a tailored engagement model that fits your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
