import { motion } from "framer-motion";
import { Check, Terminal, Users, Globe, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Staff Augmentation",
      desc: "Elite engineers integrated into your sprint cycle in record time. We provide pre-vetted specialists who blend seamlessly with your internal team.",
      icon: Users,
      features: ["Immediate access to talent", "Seamless integration", "Flexible contracts"]
    },
    {
      title: "Dedicated Teams",
      desc: "Self-managing pods of excellence aligned with your core mission. Fully managed, dedicated offshore teams tailored to your project needs.",
      icon: Terminal,
      features: ["Full team management", "Aligned with your culture", "Long-term partnership"]
    },
    {
      title: "Strategic RPO",
      desc: "Revolutionizing your internal hiring via our proprietary global network. End-to-end support from sourcing to onboarding.",
      icon: Briefcase,
      features: ["End-to-end hiring", "Reduced time-to-hire", "Quality guarantee"]
    },
    {
      title: "Managed ODC",
      desc: "Fully operational offshore centers with enterprise-grade governance. We manage HR, payroll, and compliance while you drive execution.",
      icon: Globe,
      features: ["HR & Compliance handled", "Infrastructure provided", "Retention focused"]
    }
  ];

  return (
    <div className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 block">Our Solutions</span>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black font-heading mb-8 md:mb-10 tracking-tighter leading-[0.85]">
            Enterprise <br/><span className="text-primary italic">Grade</span> Services
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
            Flexible global solutions designed to scale your engineering 
            capacity without the operational overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-card/30 backdrop-blur-2xl border border-border/50 p-12 md:p-16 rounded-[4rem] hover:bg-primary transition-all duration-700 hover:-translate-y-4 shadow-2xl shadow-transparent hover:shadow-primary/20"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-white" />
                </div>
                <span className="text-6xl font-black opacity-10 group-hover:opacity-20 font-heading">0{idx + 1}</span>
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tighter group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-xl text-muted-foreground group-hover:text-white/80 mb-12 leading-relaxed transition-colors">
                {service.desc}
              </p>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-lg group-hover:text-white transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full h-16 rounded-full border-border group-hover:border-white group-hover:bg-white group-hover:text-primary transition-all text-lg font-bold">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary p-16 md:p-32 rounded-[5rem] text-primary-foreground text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          <h2 className="text-5xl md:text-7xl font-black font-heading mb-10 tracking-tighter relative z-10">Architecting Your <br/>Success</h2>
          <p className="text-2xl text-primary-foreground/80 mb-16 max-w-3xl mx-auto relative z-10">
            Let's discuss a tailored engagement model that fits your unique 
            technical roadmap and business objectives.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-24 px-16 text-2xl rounded-full shadow-2xl relative z-10 hover:scale-105 transition-transform">
              Connect With Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
