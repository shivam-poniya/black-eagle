import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Talent() {
  const roles = [
    "Frontend Developers", "Backend Developers", "Full-Stack Engineers", 
    "Mobile App Developers", "QA & Automation Engineers", "DevOps & Cloud Engineers"
  ];

  const techStack = [
    "Java", "Spring Boot", "Node.js", "React", "Angular", "Next.js", 
    "React Native", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"
  ];

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">World-Class Engineering Talent</h1>
          <p className="text-xl text-muted-foreground">
            Our engineers are rigorously screened for technical expertise, communication skills, and problem-solving ability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading">Roles We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border flex items-center">
                  <span className="font-semibold">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading">Technology Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-bold mb-4">Experience Levels</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Mid-Level</span>
                  <span className="font-mono text-muted-foreground">3–5 years</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Senior</span>
                  <span className="font-mono text-muted-foreground">5–8 years</span>
                </li>
                <li className="flex justify-between">
                  <span>Lead / Architect</span>
                  <span className="font-mono text-muted-foreground">8+ years</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center bg-muted/20 p-12 rounded-2xl">
          <h2 className="text-2xl font-bold font-heading mb-4">Industries Served</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-medium text-muted-foreground">
            <span>FinTech</span> • <span>Travel</span> • <span>E-commerce</span> • <span>Healthcare</span> • <span>SaaS</span> • <span>Media & AdTech</span>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Link href="/contact">
                <Button size="lg" className="px-10">Start Hiring Now</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
