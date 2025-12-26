import { motion } from "framer-motion";
import teamImg from "@assets/generated_images/diverse_team_of_developers_working_on_laptops_in_modern_office.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black tracking-[0.5em] uppercase text-xs mb-6 block">Our DNA</span>
            <h1 className="text-6xl md:text-9xl font-black font-heading mb-12 tracking-tighter leading-[0.85]">
              Built for <br/><span className="text-primary italic">Velocity</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed mb-12">
              We are a technology-driven Global IT Solutions firm committed 
              to helping businesses build high-performing engineering teams worldwide.
            </p>
            <Link href="/contact">
                <Button size="lg" className="h-20 px-12 text-xl rounded-full">Work With Us</Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[4rem] transform rotate-6 -z-10 blur-2xl" />
            <img 
              src={teamImg} 
              alt="Elite Team" 
              className="rounded-[4rem] shadow-2xl w-full h-auto object-cover border border-border/50"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
          {[
            { title: "Transparency", desc: "Open communication and clear, audited processes." },
            { title: "Mastery", desc: "Strict vetting and high technical accountability." },
            { title: "Continuity", desc: "Focus on long-term growth and engineering culture." },
            { title: "Outcomes", desc: "Driven by your technical and business success." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 bg-card/30 backdrop-blur-xl border border-border/50 rounded-[3rem] hover:bg-primary hover:text-primary-foreground transition-all duration-700 group"
            >
              <h3 className="text-3xl font-black font-heading mb-6 tracking-tighter">{value.title}</h3>
              <p className="text-lg text-muted-foreground group-hover:text-white/80 transition-colors">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
