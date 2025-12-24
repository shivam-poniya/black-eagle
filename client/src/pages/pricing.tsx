import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Pricing</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Flexible models tailored to your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Monthly Resource",
              desc: "Dedicated developer billed monthly.",
              features: ["Full-time availability", "Direct management", "Flexible terms"],
              highlight: false
            },
            {
              title: "Dedicated Team",
              desc: "Complete managed team for your project.",
              features: ["Project Manager included", "End-to-end delivery", "Scalable infrastructure", "Volume discounts"],
              highlight: true
            },
            {
              title: "Hourly/Project",
              desc: "Pay as you go for specific tasks.",
              features: ["Flexible scope", "No long-term commitment", "Transparent billing"],
              highlight: false
            }
          ].map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-lg border transition-all ${
                plan.highlight 
                  ? 'border-primary bg-primary/5 shadow-lg relative' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold font-heading mb-2">{plan.title}</h3>
              <p className="text-foreground/60 mb-8 text-sm">{plan.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="block">
                <Button 
                  className={`w-full font-semibold cursor-pointer rounded-lg ${
                    plan.highlight 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'border-primary text-primary hover:bg-primary/5'
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Get Quote
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-lg bg-foreground/5 border border-border text-center">
          <h3 className="text-2xl font-bold mb-6">Pricing Factors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Skill Level", "Tech Stack", "Duration", "Team Size"].map((factor, idx) => (
              <div key={idx} className="p-4 bg-background rounded-lg border border-border text-sm font-medium">
                {factor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
