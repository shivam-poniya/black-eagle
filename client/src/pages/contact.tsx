import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as fz from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = fz.object({
  fullName: fz.string().min(2, "Name is required"),
  companyName: fz.string().min(2, "Company name is required"),
  email: fz.string().email("Invalid email address"),
  requiredSkills: fz.string().min(2, "Please specify required skills"),
  budget: fz.string().optional(),
  message: fz.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<fz.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      requiredSkills: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: fz.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Sent",
      description: "Our elite sourcing team will reach out within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="py-24 md:py-40 relative">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 block">Engagement</span>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black font-heading mb-8 md:mb-10 tracking-tighter leading-[0.85]">
              Let's <br/><span className="text-primary italic">Connect</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground mb-12 md:mb-16 leading-relaxed font-light">
              Discuss your technical roadmap with our team-scaling experts. 
              We're ready to bridge the talent gap for your next big build.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight uppercase">Direct Inquiry</h3>
                  <a href="mailto:hello@blackeagle.com" className="text-2xl text-muted-foreground hover:text-primary transition-colors font-light">
                    hello@blackeagle.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight uppercase">Global Reach</h3>
                  <p className="text-2xl text-muted-foreground font-light">Serving US & European Markets</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-card/30 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-border/50 shadow-2xl shadow-primary/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-14 bg-background/50 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="h-14 bg-background/50 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Work Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="h-14 bg-background/50 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requiredSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Target Role / Stack</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Senior React Engineer" {...field} className="h-14 bg-background/50 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Estimated Monthly Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-14 bg-background/50 rounded-xl">
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<10k">Under $10k</SelectItem>
                          <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                          <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                          <SelectItem value="50k+">$50k+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Strategic Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your technical challenges..." 
                          className="min-h-[150px] bg-background/50 rounded-xl resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-20 text-xl rounded-full group">
                  Submit Inquiry
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
