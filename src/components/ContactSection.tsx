
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we'll need to integrate with an email service
    // For now, we'll just show a success message
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-accent-soft text-accent rounded-full">
            <Mail className="w-4 h-4" /> Contact
          </h2>
          <h3 className="text-3xl font-bold">Get in Touch</h3>
          <p className="text-neutral max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              required
              className="bg-white/50 backdrop-blur-sm"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white/50 backdrop-blur-sm"
            />
            <Textarea
              placeholder="Your Message"
              required
              className="min-h-[150px] bg-white/50 backdrop-blur-sm"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
