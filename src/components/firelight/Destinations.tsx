"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const destinations = [
  {
    id: 1,
    name: "Kruger National Park",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=800&fit=crop",
    tours: 24,
    description: "Home to the Big 5 and Africa's most diverse wildlife",
  },
  {
    id: 2,
    name: "Victoria Falls",
    country: "Zimbabwe/Zambia",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=800&fit=crop",
    tours: 12,
    description: "The world's largest waterfall - a natural wonder",
  },
  {
    id: 3,
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=800&fit=crop",
    tours: 18,
    description: "Where mountains meet the sea in spectacular fashion",
  },
  {
    id: 4,
    name: "Okavango Delta",
    country: "Botswana",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=800&fit=crop",
    tours: 8,
    description: "Untamed wilderness and pristine waterways",
  },
  {
    id: 5,
    name: "Serengeti",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=800&fit=crop",
    tours: 15,
    description: "Witness the great migration in all its glory",
  },
  {
    id: 6,
    name: "Garden Route",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
    tours: 10,
    description: "Scenic coastal drive with endless adventures",
  },
];

const tabs = ["All", "South Africa", "Botswana", "Tanzania", "Zimbabwe"];

export function Destinations() {
  const [activeTab, setActiveTab] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredDestinations = activeTab === "All" 
    ? destinations 
    : destinations.filter(d => d.country.includes(activeTab) || d.country.includes(activeTab.split(" ")[0]));

  return (
    <section id="destinations" className="section-padding bg-cream" ref={containerRef}>
      <div className="container-flat">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-burnt font-semibold text-sm uppercase tracking-wider"
          >
            Explore Africa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2"
          >
            Iconic Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-2 md:mt-3 max-w-2xl mx-auto text-sm sm:text-base"
          >
            From the vast plains of the Serengeti to the majestic Victoria Falls.
          </motion.p>
        </div>

        {/* Tabs - Scrollable on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex overflow-x-auto gap-2 mb-8 md:mb-10 hide-scrollbar pb-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap text-sm sm:text-base",
                activeTab === tab
                  ? "bg-forest text-white"
                  : "bg-white text-foreground hover:bg-forest/10 border border-border"
              )}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              layout
              className="group relative rounded-[40px] overflow-hidden aspect-[3/4] sm:aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay - Flat */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A1E]/90 via-[#1F2A1E]/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  {destination.country}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-burnt-light transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-white/70 text-xs sm:text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-xs sm:text-sm">
                    {destination.tours} Tours
                  </span>
                  <Button 
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm hover:bg-burnt text-white rounded-full text-xs sm:text-sm"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button size="lg" className="btn-flat btn-flat-primary rounded-full gap-2">
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
