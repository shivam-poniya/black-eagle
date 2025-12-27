import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Layers, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 block">Investment Models</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-heading mb-6 md:mb-8 tracking-tighter leading-[0.85]">
            Flexible <br/><span className="text-primary italic">Pricing</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
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

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-3xl rounded-[4rem] p-16 md:p-24 border border-border/50 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-center">Pricing <span className="text-primary italic">Architecture</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { factor: "Skill Level & Role", desc: "From specialized independent contributors to strategic engineering leads.", icon: Users },
              { factor: "Tech Stack Complexity", desc: "Standard web technologies to niche distributed systems and AI mastery.", icon: Cpu },
              { factor: "Engagement Duration", desc: "Short-term tactical bursts to multi-year strategic partnerships.", icon: Layers },
              { factor: "Team Composition", desc: "Single engineer augmentation to full-scale managed delivery pods.", icon: Zap }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-background/40 border border-border/40 group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2 tracking-tight group-hover:text-white transition-colors">{item.factor}</h4>
                  <p className="text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
