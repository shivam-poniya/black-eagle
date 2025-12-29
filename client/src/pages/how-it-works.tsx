import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Globe, Layers, Users, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Requirement Analysis",
      desc: "We dive deep into your tech stack, culture, and scaling goals to map out the perfect resource profile.",
      icon: Layers
    },
    {
      num: "02",
      title: "Strategic Selection",
      desc: "Our vetting engine identifies the top 1% of talent, focusing on both technical mastery and soft skills.",
      icon: Users
    },
    {
      num: "03",
      title: "Elite Matching",
      desc: "You interview candidates who have already passed our rigorous multi-stage screening process.",
      icon: Zap
    },
    {
      num: "04",
      title: "Seamless Onboarding",
      desc: "We manage the administrative heavy lifting while you focus on driving high-velocity engineering.",
      icon: Globe
    }
  ];

  return (
    <div className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 block">Methodology</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-heading mb-6 md:mb-8 tracking-tighter leading-[0.85]">
            Precision <br/><span className="text-primary italic">Process</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            A high-velocity engagement model designed for startups 
            and enterprises that don't compromise on quality.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-40">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center mb-32 last:mb-0`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-muted/20 rounded-[4rem] border border-border/50 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <step.icon className="w-32 h-32 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-12 left-12 text-8xl font-black font-heading opacity-5">{step.num}</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <span className="text-5xl font-black font-heading text-primary/10">{step.num}</span>
                <h3 className="text-3xl md:text-4xl font-black font-heading tracking-tighter leading-none">{step.title}</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                <div className="w-12 h-1 bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {[
            "Zero upfront costs", 
            "Interview-first commitment", 
            "Success guarantee", 
            "Total transparency"
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-card/30 backdrop-blur-xl rounded-[2.5rem] border border-border/50 text-center"
            >
              <h4 className="text-lg font-black tracking-tight">{benefit}</h4>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" className="h-16 px-12 text-lg rounded-full shadow-2xl">Start Your Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
