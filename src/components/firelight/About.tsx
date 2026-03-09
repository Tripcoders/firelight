"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";

const stats = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Travelers" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const values = [
  "Private, boutique experiences",
  "Expert local guides",
  "Sustainable tourism",
  "Luxury accommodations",
  "Flexible itineraries",
  "Conservation-focused",
];

const features = [
  { title: "Safety First", desc: "Certified, experienced guides" },
  { title: "Award-Winning", desc: "Excellence in tourism" },
  { title: "Eco-Conscious", desc: "Supporting local communities" },
  { title: "Personalized Care", desc: "Tailored to your style" },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream overflow-hidden" ref={containerRef}>
      <div className="container-flat">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=1000&fit=crop"
                alt="Safari Experience"
                className="rounded-[40px] w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest/10 rounded-[32px] -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-burnt/10 rounded-[24px] -z-10" />
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-[32px] p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[16px] bg-forest flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-forest">500+</div>
                  <div className="text-muted-foreground text-sm">Happy Travelers</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-burnt font-semibold text-sm uppercase tracking-wider">
              About Firelight Tours
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Creating Unforgettable 
              <span className="text-forest"> African Adventures</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 2008, we&apos;ve been crafting bespoke safari experiences that go beyond 
              the ordinary. Our passion for Africa&apos;s wild beauty has made us a trusted 
              partner for discerning travelers worldwide.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0" />
                  <span className="text-foreground text-sm">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-forest">{stat.value}</div>
                  <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="text-burnt font-semibold text-sm uppercase tracking-wider">
              About Firelight Tours
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Creating Unforgettable African Adventures
            </h2>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
              alt="Safari Experience"
              className="rounded-[32px] w-full aspect-[4/3] object-cover"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-[24px] px-6 py-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-[12px] bg-forest flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-forest">500+</div>
                <div className="text-muted-foreground text-xs">Happy Travelers</div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center mb-6 mt-8"
          >
            Since 2008, we&apos;ve been crafting bespoke safari experiences that go beyond 
            the ordinary. Our passion for Africa&apos;s wild beauty has made us a trusted 
            partner for discerning travelers worldwide.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-4 gap-3 mb-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-white rounded-[20px]">
                <div className="text-xl font-bold text-forest">{stat.value}</div>
                <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-2"
          >
            {values.map((value) => (
              <div key={value} className="flex items-center gap-2 p-3 bg-white rounded-[16px]">
                <CheckCircle className="w-4 h-4 text-forest flex-shrink-0" />
                <span className="text-foreground text-xs">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid - All Sizes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-20"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-5 sm:p-6 bg-card rounded-[32px] border border-border hover:border-forest/30 transition-colors"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
