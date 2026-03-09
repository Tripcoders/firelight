"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight, MapPin, Clock, X, Calendar, Users, ThumbsUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { searchLocations, locations, type Location } from "@/lib/locations";

const valueProps = [
  { icon: Calendar, label: "15+", desc: "Years" },
  { icon: Users, label: "500+", desc: "Travelers" },
  { icon: ThumbsUp, label: "98%", desc: "Satisfaction" },
  { icon: Headphones, label: "24/7", desc: "Support" },
];

// Popular destinations for quick select
const popularDestinations = [
  "Kruger Park",
  "Pilanesberg",
  "Johannesburg",
  "Soweto",
  "KwaZulu Natal",
];

// Input height constant - same for all inputs and button
const INPUT_HEIGHT = "h-[52px]";

export function Hero() {
  const [destination, setDestination] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [guests, setGuests] = useState(2);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [suggestions, setSuggestions] = useState<Location[]>(() => locations.slice(0, 6));
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle search input
  const handleSearchChange = (value: string) => {
    setDestination(value);
    if (value.trim()) {
      const results = searchLocations(value);
      setSuggestions(results);
    } else {
      setSuggestions(locations.slice(0, 6));
    }
    setShowSuggestions(true);
  };

  // Handle location selection
  const handleSelectLocation = (location: Location) => {
    setSelectedLocation(location);
    setDestination(location.name);
    setShowSuggestions(false);
  };

  // Clear selection
  const handleClear = () => {
    setSelectedLocation(null);
    setDestination("");
    setSuggestions(locations.slice(0, 6));
    inputRef.current?.focus();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Flat Style */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Flat overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(31, 42, 30, 0.7)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-20 lg:py-0">
        {/* Desktop Layout - lg and above */}
        <div className="hidden lg:block container-flat">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8"
            >
              <span className="text-sm font-medium">South Africa&apos;s Premier Safari Experience</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
            >
              Discover Your
              <span className="block mt-2 text-burnt-light">
                African Adventure
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Experience the magic of Africa with private, boutique safaris. 
              Luxury lodges, expert guides, and unforgettable wildlife encounters.
            </motion.p>

            {/* Search Bar - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[40px] p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-12 gap-4 items-end">
                {/* Destination - Takes more space */}
                <div className="relative col-span-5" ref={dropdownRef}>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block text-left">
                    Where to?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={destination}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      placeholder="Search destinations..."
                      className={cn(
                        "w-full pl-12 pr-10 rounded-full bg-cream text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest text-sm",
                        INPUT_HEIGHT
                      )}
                    />
                    {destination && (
                      <button
                        onClick={handleClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-forest hover:text-white transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                    
                    {/* Dropdown Suggestions */}
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[24px] border border-border shadow-xl z-50 overflow-hidden max-h-[400px] overflow-y-auto"
                      >
                        {destination === "" && (
                          <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-cream">
                            Popular Destinations
                          </div>
                        )}
                        {suggestions.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => handleSelectLocation(location)}
                            className={cn(
                              "w-full px-4 py-3 text-left hover:bg-cream transition-colors flex items-center gap-3",
                              selectedLocation?.id === location.id && "bg-forest/5"
                            )}
                          >
                            <div className="w-12 h-10 rounded-[12px] overflow-hidden flex-shrink-0">
                              <img 
                                src={location.image} 
                                alt={location.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">{location.name}</div>
                              <div className="text-xs text-muted-foreground flex items-center gap-2">
                                <span>{location.category}</span>
                                {location.duration && (
                                  <>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {location.duration}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="col-span-3">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block text-left">
                    Check In
                  </label>
                  <input
                    type="date"
                    className={cn(
                      "w-full px-5 rounded-full bg-cream text-foreground focus:outline-none focus:ring-2 focus:ring-forest text-sm",
                      INPUT_HEIGHT
                    )}
                  />
                </div>

                {/* Guests */}
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block text-left">
                    Guests
                  </label>
                  <div className={cn("flex items-center justify-center gap-2 px-3 bg-cream rounded-full", INPUT_HEIGHT)}>
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-forest font-bold text-sm hover:bg-forest hover:text-white transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-medium text-sm">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(20, guests + 1))}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-forest font-bold text-sm hover:bg-forest hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Search Button - Same height as inputs */}
                <div className="col-span-2">
                  <Button className={cn(
                    "w-full bg-forest hover:bg-forest-dark text-white rounded-full font-semibold gap-2 text-sm",
                    INPUT_HEIGHT
                  )}>
                    <Search className="w-4 h-4" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">Popular:</span>
                {popularDestinations.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleSearchChange(link)}
                    className="px-4 py-1.5 rounded-full bg-cream text-forest hover:bg-forest hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Value Props - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto"
            >
              {valueProps.map((prop) => (
                <div
                  key={prop.label}
                  className="flex flex-col items-center text-center p-4 rounded-[24px] bg-white/10 border border-white/20"
                >
                  <prop.icon className="w-6 h-6 text-burnt-light mb-2" />
                  <span className="text-white font-bold text-xl">{prop.label}</span>
                  <span className="text-white/70 text-sm mt-0.5">{prop.desc}</span>
                </div>
              ))}
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-white/80"
            >
              <span className="text-sm">Luxury Safaris from </span>
              <span className="text-2xl font-bold text-white">$2,499</span>
              <span className="text-sm"> per person</span>
              <a href="#tours" className="ml-4 inline-flex items-center gap-1 text-burnt-light hover:text-white transition-colors">
                View Tours <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="lg:hidden px-4 sm:px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6"
          >
            <span className="text-xs sm:text-sm font-medium">South Africa&apos;s Premier Safari</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
          >
            Discover Your
            <span className="block mt-2 text-burnt-light">
              African Adventure
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white/80 mb-6 max-w-md"
          >
            Experience the magic of Africa with private, boutique safaris and unforgettable wildlife encounters.
          </motion.p>

          {/* Search Bar - Mobile/Tablet (Stacked) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 mx-2 sm:mx-4"
          >
            {/* Destination Input - Full Width */}
            <div className="relative mb-3" ref={dropdownRef}>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block text-left">
                Where to?
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest" />
                <input
                  ref={inputRef}
                  type="text"
                  value={destination}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search destinations..."
                  className={cn(
                    "w-full pl-12 pr-10 rounded-full bg-cream text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest text-sm",
                    INPUT_HEIGHT
                  )}
                />
                {destination && (
                  <button
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-forest hover:text-white transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                
                {/* Dropdown Suggestions - Mobile */}
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] border border-border shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto"
                  >
                    {suggestions.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => handleSelectLocation(location)}
                        className="w-full px-4 py-3 text-left hover:bg-cream transition-colors flex items-center gap-3"
                      >
                        <div className="w-12 h-10 rounded-[10px] overflow-hidden flex-shrink-0">
                          <img 
                            src={location.image} 
                            alt={location.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground text-sm truncate">{location.name}</div>
                          <div className="text-xs text-muted-foreground">{location.category}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Date and Guests - Side by Side */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block text-left">
                  Check In
                </label>
                <input
                  type="date"
                  className={cn(
                    "w-full px-4 rounded-full bg-cream text-foreground focus:outline-none focus:ring-2 focus:ring-forest text-sm",
                    INPUT_HEIGHT
                  )}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block text-left">
                  Guests
                </label>
                <div className={cn("flex items-center justify-center gap-2 px-3 bg-cream rounded-full", INPUT_HEIGHT)}>
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-forest font-bold text-sm hover:bg-forest hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-medium text-sm">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-forest font-bold text-sm hover:bg-forest hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Search Button - Full Width, Same Height */}
            <Button className={cn(
              "w-full bg-forest hover:bg-forest-dark text-white rounded-full font-semibold gap-2 text-base",
              INPUT_HEIGHT
            )}>
              <Search className="w-5 h-5" />
              Search Tours
            </Button>

            {/* Quick Links - Scrollable */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
              <span className="text-muted-foreground text-xs whitespace-nowrap">Popular:</span>
              {popularDestinations.map((link) => (
                <button
                  key={link}
                  onClick={() => handleSearchChange(link)}
                  className="px-3 py-1.5 rounded-full bg-cream text-forest text-xs whitespace-nowrap hover:bg-forest hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Pricing - Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center text-white/80"
          >
            <span className="text-sm">From </span>
            <span className="text-2xl font-bold text-white">$2,499</span>
            <span className="text-sm"> /person</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
