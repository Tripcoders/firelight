"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Send, 
  Facebook, Instagram, Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Logo URL for footer (dark background)
const FOOTER_LOGO = "https://iili.io/qFA1Jaf.png";

const footerLinks = {
  tours: [
    { label: "Safari Adventures", href: "/sa-safaris/" },
    { label: "Luxury Lodges", href: "#" },
    { label: "Day Trips", href: "/day-tours/" },
    { label: "Private Tours", href: "#" },
  ],
  destinations: [
    { label: "Kruger National Park", href: "/kruger-park/" },
    { label: "Pilanesberg", href: "/pilanesberg-tours/" },
    { label: "Cape Town", href: "#" },
    { label: "KwaZulu Natal", href: "/kwazulu-natal/" },
  ],
  company: [
    { label: "About Us", href: "/about-us/" },
    { label: "Our Team", href: "#" },
    { label: "Conservation", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Travel Insurance", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#1F2A1E' }} ref={containerRef}>
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-flat py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Get Exclusive Safari Offers
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-6">
              Subscribe to our newsletter for special deals and travel tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 focus:ring-burnt"
              />
              <Button className="btn-flat btn-flat-accent rounded-full whitespace-nowrap gap-2">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-flat py-12 md:py-16">
        {/* Desktop Footer */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <img 
                src={FOOTER_LOGO}
                alt="Firelight Tours"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Creating unforgettable African safari experiences since 2008.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+27123456789" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-burnt" />
                +27 123 456 789
              </a>
              <a href="mailto:info@firelighttours.co.za" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-burnt" />
                info@firelighttours.co.za
              </a>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 text-burnt" />
                Cape Town, South Africa
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {[
            { title: "Tours", links: footerLinks.tours },
            { title: "Destinations", links: footerLinks.destinations },
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Footer - Left Aligned */}
        <div className="lg:hidden">
          {/* Brand - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/" className="inline-block mb-4">
              <img 
                src={FOOTER_LOGO}
                alt="Firelight Tours"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm text-left">
              Creating unforgettable African safari experiences since 2008.
            </p>
          </motion.div>

          {/* Links - Left Aligned Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { title: "Tours", links: footerLinks.tours },
              { title: "Destinations", links: footerLinks.destinations },
              { title: "Company", links: footerLinks.company },
              { title: "Support", links: footerLinks.support },
            ].map((section) => (
              <div key={section.title} className="text-left">
                <h4 className="font-semibold mb-3 text-sm text-left">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label} className="text-left">
                      <a href={link.href} className="text-white/70 hover:text-white transition-colors text-xs text-left block">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact - Left Aligned */}
          <div className="space-y-3 mb-6 text-left">
            <a href="tel:+27123456789" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm justify-start">
              <Phone className="w-4 h-4 text-burnt flex-shrink-0" />
              <span>+27 123 456 789</span>
            </a>
            <a href="mailto:info@firelighttours.co.za" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm justify-start">
              <Mail className="w-4 h-4 text-burnt flex-shrink-0" />
              <span>info@firelighttours.co.za</span>
            </a>
            <div className="flex items-center gap-2 text-white/80 text-sm justify-start">
              <MapPin className="w-4 h-4 text-burnt flex-shrink-0" />
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-flat py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Firelight Tours. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-burnt transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
