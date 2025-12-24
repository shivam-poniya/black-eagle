import { motion } from "framer-motion";
import teamImg from "@assets/generated_images/diverse_team_of_developers_working_on_laptops_in_modern_office.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-8">About Us</h1>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We are a technology-driven Global IT Solutions company committed to helping businesses build high-performing engineering teams worldwide.
            </p>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Our mission is to bridge the global talent gap by connecting companies with reliable, skilled, and cost-effective IT professionals.
            </p>
            <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer">
                  Get In Touch
                </Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={teamImg} 
              alt="Our Team" 
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", desc: "Open communication and honest partnerships." },
              { title: "Quality & Accountability", desc: "Delivering excellence and owning results." },
              { title: "Long-Term Partnerships", desc: "Building lasting relationships with clients." },
              { title: "Client Success", desc: "Your success is our success." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
