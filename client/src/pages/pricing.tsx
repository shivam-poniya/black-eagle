import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Flexible Pricing Models</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every business is unique—our pricing adapts to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              title: "Monthly Resource",
              desc: "Dedicated developer billed monthly.",
              features: ["Full-time dedication", "Direct management", "Predictable flat rate", "Scalable"]
            },
            {
              title: "Dedicated Team",
              desc: "Complete managed team for performance.",
              features: ["Full continuity", "Managed delivery", "Volume discounts", "Aligned culture"],
              highlight: true
            },
            {
              title: "Direct Hire",
              desc: "One-time placement for your internal team.",
              features: ["Long-term placement", "Success guarantee", "Pre-vetted talent", "Hassle-free hiring"]
            }
          ].map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${plan.highlight ? 'border-primary bg-primary/5 shadow-lg relative overflow-hidden' : 'border-border bg-card shadow-sm'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold font-heading mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact">
                <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Pricing Factors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
            <div className="p-4 bg-background rounded-lg text-sm font-semibold">Skill Level & Role</div>
            <div className="p-4 bg-background rounded-lg text-sm font-semibold">Tech Stack</div>
            <div className="p-4 bg-background rounded-lg text-sm font-semibold">Duration</div>
            <div className="p-4 bg-background rounded-lg text-sm font-semibold">Team Size</div>
          </div>
        </div>
      </div>
    </div>
  );
}
