import { motion } from "framer-motion";
import teamImg from "@assets/generated_images/diverse_team_of_developers_working_on_laptops_in_modern_office.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a technology-driven <span className="text-foreground font-bold">Global IT Solutions company</span> committed to helping businesses build high-performing engineering teams worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to bridge the global talent gap by connecting companies with reliable, skilled, and cost-effective IT professionals.
            </p>
            <Link href="/contact">
                <Button size="lg">Work With Us</Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 -z-10" />
            <img 
              src={teamImg} 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { title: "Transparency", desc: "Open communication and clear processes." },
            { title: "Quality", desc: "Strict vetting and high accountability." },
            { title: "Partnership", desc: "Focus on long-term growth and continuity." },
            { title: "Client Success", desc: "Driven by your business outcomes." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-card border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
