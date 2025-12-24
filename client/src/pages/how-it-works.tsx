import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  const steps = [
    { num: "1", title: "Share Your Requirements", desc: "Tell us your tech stack, experience level, and team size." },
    { num: "2", title: "Candidate Shortlisting", desc: "We screen and share the most suitable profiles." },
    { num: "3", title: "Interview & Selection", desc: "You interview and approve the candidates." },
    { num: "4", title: "Onboarding & Delivery", desc: "We onboard, manage, and support the team while you drive execution." }
  ];

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">How It Works</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Simple. Transparent. Efficient.
          </p>
          <p className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            Our engagement process is designed to be flexible and risk-free.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-md">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {[
            "No upfront hiring costs",
            "Interview before commitment",
            "Replacement guarantee",
            "Complete billing transparency"
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
