import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Talent() {
  const roles = [
    "Frontend Developers", "Backend Developers", "Full-Stack Engineers", 
    "Mobile Developers", "QA Engineers", "DevOps Engineers"
  ];

  const techStack = [
    "React", "Node.js", "Java", "Spring Boot", "Next.js", 
    "React Native", "AWS", "Docker", "Kubernetes", "PostgreSQL"
  ];

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Talent</h1>
          <p className="text-xl text-foreground/60">
            Rigorously vetted engineers with proven expertise and strong communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading">Roles Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-foreground/5 border border-border font-medium">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2 rounded-lg bg-primary/10 text-primary border-0">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="p-6 rounded-lg border border-border space-y-4">
              <h3 className="font-bold text-lg">Experience Levels</h3>
              {[
                { level: "Mid-Level", years: "3–5 years" },
                { level: "Senior", years: "5–8 years" },
                { level: "Lead", years: "8+ years" }
              ].map((exp, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="font-medium">{exp.level}</span>
                  <span className="text-foreground/60">{exp.years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold font-heading mb-6">Industries We Serve</h2>
          <p className="text-foreground/60 text-lg">FinTech • Travel • E-commerce • Healthcare • SaaS • Media</p>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer">
              View Available Talent
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
