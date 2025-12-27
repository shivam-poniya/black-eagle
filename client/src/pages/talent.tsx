import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Cpu, Database, Layout, Shield, Terminal, Zap } from "lucide-react";

export default function Talent() {
  const roles = [
    { name: "Frontend Developers", icon: Layout, skills: ["React", "Next.js", "Vue", "TypeScript"] },
    { name: "Backend Developers", icon: Database, skills: ["Node.js", "Python", "Go", "Java"] },
    { name: "Full-Stack Engineers", icon: Code2, skills: ["MERN", "T3", "Next.js", "PostgreSQL"] },
    { name: "Mobile App Developers", icon: Cpu, skills: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { name: "QA & Automation", icon: Shield, skills: ["Cypress", "Selenium", "Jest", "Playwright"] },
    { name: "DevOps & Cloud", icon: Zap, skills: ["AWS", "Kubernetes", "Docker", "Terraform"] }
  ];

  return (
    <div className="py-24 md:py-40 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 block">Elite Engineering</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-heading mb-6 md:mb-8 tracking-tighter leading-[0.85]">
            Global <br/><span className="text-primary italic">Talent</span> Pool
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Our engineers are rigorously screened for technical mastery, 
            architectural thinking, and high-velocity problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {roles.map((role, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card/30 backdrop-blur-xl border border-border/50 p-10 rounded-[3rem] hover:bg-primary transition-all duration-700 hover:-translate-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-all duration-500">
                <role.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter group-hover:text-white transition-colors leading-none">{role.name}</h3>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs font-bold tracking-widest uppercase py-2 px-4 bg-muted/50 rounded-full group-hover:bg-white/10 group-hover:text-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-16 md:p-24 rounded-[4rem] text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Terminal size={200} />
            </div>
            <h2 className="text-5xl font-black font-heading mb-10 tracking-tighter leading-none">Experience <br/>Standard</h2>
            <div className="space-y-8">
              {[
                { level: "Mid-Level", years: "3–5 years", desc: "Production-ready independent contributors." },
                { level: "Senior", years: "5–8 years", desc: "Architectural owners and technical mentors." },
                { level: "Lead / Architect", years: "8+ years", desc: "Strategic engineering leaders for complex systems." }
              ].map((lvl, idx) => (
                <div key={idx} className="border-b border-white/20 pb-8 last:border-0">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-2xl font-bold">{lvl.level}</h3>
                    <span className="font-black text-white/40 tracking-widest uppercase text-xs">{lvl.years}</span>
                  </div>
                  <p className="text-white/70">{lvl.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center bg-muted/20 p-16 md:p-24 rounded-[4rem] border border-border"
          >
            <h2 className="text-5xl font-black font-heading mb-10 tracking-tighter leading-none">Industry <br/><span className="text-primary italic">Verticals</span></h2>
            <div className="grid grid-cols-2 gap-6">
              {["FinTech", "AI & Machine Learning", "SaaS", "E-commerce", "AdTech", "Healthcare"].map((ind) => (
                <div key={ind} className="flex items-center gap-4 text-xl font-bold tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {ind}
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Link href="/contact">
                <Button size="lg" className="w-full h-20 text-xl rounded-full shadow-2xl shadow-primary/20">
                  Start Your Search
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
