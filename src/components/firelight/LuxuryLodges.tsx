"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const lodges = [
  {
    id: 1,
    name: "Sabi Sabi Earth Lodge",
    location: "Sabi Sands, South Africa",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop",
    rating: 4.9,
    price: 850,
    amenity: "Pool & Spa",
  },
  {
    id: 2,
    name: "Singita Boulders Lodge",
    location: "Kruger National Park",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
    rating: 5.0,
    price: 1200,
    amenity: "Luxury Suites",
  },
  {
    id: 3,
    name: "Thorntree River Lodge",
    location: "Victoria Falls, Zambia",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    rating: 4.8,
    price: 650,
    amenity: "River View",
  },
];

const amenities = ["Free WiFi", "Airport Transfer", "All Inclusive", "Fine Dining", "Spa Access"];

export function LuxuryLodges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="lodges" className="section-padding bg-background" ref={containerRef}>
      <div className="container-flat">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-burnt font-semibold text-sm uppercase tracking-wider">
              Where You&apos;ll Stay
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Luxury Safari Lodges
            </h2>
            <p className="text-muted-foreground mt-2 md:mt-3 max-w-lg text-sm sm:text-base">
              Hand-selected 5-star accommodations with world-class comfort.
            </p>
          </motion.div>

          {/* Amenities - Hidden on Mobile, Scrollable on Tablet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:flex flex-wrap gap-2 lg:gap-3"
          >
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="px-4 py-2 bg-cream rounded-full text-sm text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Lodges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {lodges.map((lodge, index) => (
            <motion.div
              key={lodge.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-card rounded-[40px] overflow-hidden border border-border hover:border-forest/30 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95">
                  <Star className="w-4 h-4 text-burnt" />
                  <span className="font-semibold text-foreground text-sm">{lodge.rating}</span>
                </div>
                
                {/* 5-Star Badge */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-forest text-white text-xs font-semibold">
                  5-Star
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1.5">
                  <MapPin className="w-4 h-4 text-forest" />
                  {lodge.location}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-forest transition-colors">
                  {lodge.name}
                </h3>

                {/* Amenity Tag */}
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-cream text-forest">
                    {lodge.amenity}
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-muted-foreground text-xs">From</span>
                    <div className="text-xl sm:text-2xl font-bold text-forest">
                      ${lodge.price}<span className="text-sm font-normal text-muted-foreground">/night</span>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-full hover:bg-forest hover:text-white hover:border-forest">
                    View Lodge
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
