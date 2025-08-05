"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Youtube,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast("Your message has been sent successfully.", {
      icon: <CheckCircle className="text-green-500" />,
    });
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Example@gmail.com",
      href: "mailto:Example@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 912 345 6789",
      href: "tel:+63 912 345 6789",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Manila, Philippines",
      href: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com",
      label: "Facebook",
    },
  ];

  const projectTypes = [
    "Social Media Ad (Facebook/Instagram)",
    "YouTube Ad or Video",
    "TikTok or Reels Editing",
    "Brand Story Video",
    "Product Promo Video",
    "Motion Graphics Animation",
    "Urgent Campaign Edit",
    "Other",
  ];

  const budgetRanges = [
    "Under $300",
    "$300 - $750",
    "$750 - $1,500",
    "$1,500 - $3,000",
    "$3,000+",
    "Let's discuss",
  ];

  return (
    <section id="contact" className="py-20 px-3">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-1 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6  font-playwrite">
            Let&apos;s Create Something{" "}
            <span className="text-primary">Impactful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your brand with powerful digital marketing content?
            Let&apos;s connect and build scroll-stopping ads, branded videos,
            and social-first campaigns tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 fade-up mt-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glassmorphic p-8 rounded-lg fade-up relative visible">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="projectType"
                      className="text-sm font-medium mb-2 block"
                    >
                      Project Type *
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary focus:outline-none text-sm"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label
                      htmlFor="budget"
                      className="text-sm font-medium mb-2 block"
                    >
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary focus:outline-none text-sm"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <Label
                    htmlFor="timeline"
                    className="text-sm font-medium mb-2 block"
                  >
                    Project Timeline
                  </Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., 2 weeks, ASAP, flexible"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    Project Description *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:shadow-primary transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className=" p-6 glassmorphic  fade-up relative visible rounded-lg">
              <h3 className="text-xl font-semibold mb-6 ">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.title}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className=" p-6 glassmorphic  fade-up relative visible rounded-lg">
              <h3 className="text-xl font-semibold mb-6">
                Social Media Account
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-white/20 transition-all duration-300 group rounded-lg"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className=" p-6 glassmorphic  fade-up relative visible rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I respond to all inquiries within 24 hours. For urgent
                    projects, feel free to call directly for immediate
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
