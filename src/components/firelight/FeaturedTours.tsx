"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Star, Clock, Users, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tours = [
  {
    id: 1,
    title: "Kruger Safari Explorer",
    location: "Kruger National Park",
    duration: "5 Days",
    guests: "2-8",
    rating: 4.9,
    reviews: 127,
    price: 2499,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop",
    badge: "Best Seller",
    highlights: ["Big 5 Safari", "Luxury Lodge"],
  },
  {
    id: 2,
    title: "Victoria Falls Adventure",
    location: "Zimbabwe/Zambia",
    duration: "4 Days",
    guests: "2-6",
    rating: 4.8,
    reviews: 89,
    price: 1899,
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=400&fit=crop",
    badge: "Popular",
    highlights: ["Natural Wonder", "River Cruise"],
  },
  {
    id: 3,
    title: "Cape Peninsula Tour",
    location: "Cape Town",
    duration: "3 Days",
    guests: "2-10",
    rating: 4.9,
    reviews: 156,
    price: 1299,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop",
    badge: "Scenic",
    highlights: ["Cape Point", "Penguin Colony"],
  },
  {
    id: 4,
    title: "Okavango Delta Safari",
    location: "Botswana",
    duration: "6 Days",
    guests: "2-4",
    rating: 5.0,
    reviews: 42,
    price: 3999,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    badge: "Luxury",
    highlights: ["Mokoro Safari", "Private Camp"],
  },
  {
    id: 5,
    title: "Serengeti Migration",
    location: "Tanzania",
    duration: "7 Days",
    guests: "2-6",
    rating: 4.9,
    reviews: 78,
    price: 4499,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
    badge: "Epic",
    highlights: ["Great Migration", "Balloon Safari"],
  },
];

export function FeaturedTours() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="tours" className="section-padding bg-background" ref={containerRef}>
      <div className="container-flat">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-burnt font-semibold text-sm uppercase tracking-wider">
              Curated Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Featured Tours
            </h2>
            <p className="text-muted-foreground mt-2 md:mt-3 max-w-lg text-sm sm:text-base">
              Handpicked safari adventures designed to create lasting memories.
            </p>
          </motion.div>
          
          {/* Desktop Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center gap-3 mt-6 lg:mt-0"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-border hover:bg-forest hover:text-white hover:border-forest"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-border hover:bg-forest hover:text-white hover:border-forest"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Tours Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] snap-start"
            >
              <div className="group bg-card rounded-[40px] overflow-hidden border border-border hover:border-forest/30 transition-colors duration-300">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-burnt text-white text-xs font-semibold">
                    {tour.badge}
                  </span>

                  {/* Favorite */}
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-cream transition-colors">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm">
                      <span className="text-xs text-muted-foreground">From</span>
                      <span className="text-lg font-bold text-foreground ml-1">${tour.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/95">
                      <Star className="w-4 h-4 text-burnt" />
                      <span className="font-semibold text-foreground">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1.5">
                    <MapPin className="w-4 h-4 text-forest" />
                    {tour.location}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-forest transition-colors">
                    {tour.title}
                  </h3>

                  {/* Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.guests}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-cream text-forest"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full rounded-full bg-forest hover:bg-forest-dark text-white font-semibold">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex lg:hidden items-center justify-center gap-3 mt-6"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full border-border hover:bg-forest hover:text-white hover:border-forest"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full border-border hover:bg-forest hover:text-white hover:border-forest"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link
            href="#all-tours"
            className="inline-flex items-center gap-2 text-forest font-semibold hover:text-burnt transition-colors group"
          >
            View All Tours
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
