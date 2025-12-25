import { motion } from "framer-motion";
import { Check, Terminal, Users, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      title: "IT Staff Augmentation",
      desc: "Quickly extend your existing team with skilled developers on a contract or full-time basis. Scale up or down without long-term commitments.",
      icon: Users,
      features: ["Immediate access to talent", "Seamless integration", "Flexible contracts"]
    },
    {
      title: "Dedicated Development Teams",
      desc: "Build a fully managed, dedicated offshore team tailored to your project needs, timelines, and budget.",
      icon: Terminal,
      features: ["Full team management", "Aligned with your culture", "Long-term partnership"]
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "We handle end-to-end hiring — sourcing, screening, interviews, and onboarding — so you get the best candidates without recruitment overhead.",
      icon: Briefcase,
      features: ["End-to-end hiring", "Reduced time-to-hire", "Quality guarantee"]
    },
    {
      title: "Managed Offshore Teams",
      desc: "We manage HR, payroll, compliance, infrastructure, and retention while you maintain full control over work and deliverables.",
      icon: Globe,
      features: ["HR & Compliance handled", "Infrastructure provided", "Retention focused"]
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
            We provide flexible IT outsourcing solutions designed to help businesses scale efficiently and reduce operational overhead.
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need a custom solution?</h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We understand every business is unique. Let's discuss a tailored engagement model that fits your goals.
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
