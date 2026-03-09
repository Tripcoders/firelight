"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    title: "A Dream Come True",
    content: "Our safari with Firelight Tours exceeded every expectation. The guides were incredibly knowledgeable, and seeing the Big 5 up close was a life-changing experience.",
    tour: "Kruger Safari Explorer",
    date: "October 2024",
  },
  {
    id: 2,
    name: "James Anderson",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    title: "Professional & Unforgettable",
    content: "I've been on many safaris, but Firelight Tours stands out for their attention to detail. The luxury lodge was exceptional, and the sunrise game drive was magical.",
    tour: "Okavango Delta Safari",
    date: "September 2024",
  },
  {
    id: 3,
    name: "The Martinez Family",
    location: "Miami, USA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    title: "Perfect Family Adventure",
    content: "Traveling with kids can be challenging, but Firelight Tours made it seamless. The family-friendly activities created memories our children will treasure forever.",
    tour: "Cape Peninsula Tour",
    date: "August 2024",
  },
  {
    id: 4,
    name: "Emma & David Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    title: "Luxury Meets Adventure",
    content: "The perfect blend of adventure and luxury. Victoria Falls was breathtaking. Firelight's team went above and beyond to make our honeymoon special.",
    tour: "Victoria Falls Adventure",
    date: "July 2024",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "4.9", label: "Average Rating" },
  { value: "50+", label: "Unique Tours" },
  { value: "15+", label: "Years Experience" },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-background" ref={containerRef}>
      <div className="container-flat">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-burnt font-semibold text-sm uppercase tracking-wider"
          >
            Guest Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 md:mb-16 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] text-white"
          style={{ backgroundColor: '#1F2A1E' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-card rounded-[32px] sm:rounded-[40px] p-5 sm:p-6 md:p-8 border border-border"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-forest/20 hidden sm:block" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-burnt" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {testimonial.title}
              </h3>

              {/* Content */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border text-xs sm:text-sm">
                <span className="text-forest font-medium">
                  {testimonial.tour}
                </span>
                <span className="text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 md:mt-16 pt-8 md:pt-12 border-t border-border"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-foreground">TripAdvisor</div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Certificate of Excellence</p>
          </div>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-foreground">Verified</div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Licensed Tour Operator</p>
          </div>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-forest">SATSA</div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Accredited Member</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
