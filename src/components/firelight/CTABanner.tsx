"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&h=900&fit=crop"
          alt="Safari Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(31, 42, 30, 0.9)' }} />
      </div>

      {/* Content */}
      <div className="container-flat relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Ready for Your African Adventure?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-xl mx-auto"
          >
            Let us craft your perfect safari experience. Our expert team is ready to help you 
            plan an unforgettable journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto btn-flat btn-flat-accent rounded-full text-base sm:text-lg gap-2 group"
            >
              <Calendar className="w-5 h-5" />
              Start Planning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full text-base sm:text-lg gap-2 bg-white/10 border-white/30 text-white hover:bg-white hover:text-forest"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Button>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 text-xs sm:text-sm mt-6 sm:mt-8"
          >
            No commitment required • Free consultation • Best price guarantee
          </motion.p>
        </div>
      </div>
    </section>
  );
}
