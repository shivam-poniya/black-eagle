import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: "Tell us your tech stack, experience level, and team size."
    },
    {
      num: "02",
      title: "Candidate Shortlisting",
      desc: "We screen and share the best-fit profiles within days."
    },
    {
      num: "03",
      title: "Interview & Selection",
      desc: "You interview and approve the candidates."
    },
    {
      num: "04",
      title: "Onboarding & Delivery",
      desc: "We onboard, manage, and support the team while you drive execution."
    }
  ];

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Simple. Transparent. Efficient.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our hiring and engagement process is designed to be fast and risk-free.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-center mb-16 last:mb-0 relative"
            >
              <div className="w-24 h-24 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg z-10">
                {step.num}
              </div>
              <div className="flex-1 text-center md:text-left p-8 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.desc}</p>
              </div>
              {idx !== steps.length - 1 && (
                <div className="absolute left-[3rem] top-24 bottom-[-4rem] w-0.5 bg-primary/20 hidden md:block -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            "No upfront hiring cost", 
            "Interview before commitment", 
            "Replace resources if not satisfied", 
            "Full transparency in billing"
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-muted/30 rounded-lg text-center font-semibold"
            >
              {benefit}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="px-12 h-14 text-lg">Start Your Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
