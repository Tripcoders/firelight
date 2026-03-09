"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Phone, Mail, Instagram, Facebook, Youtube, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { locations } from "@/lib/locations";

// Currency data with flag images
const currencies = [
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "https://flagcdn.com/w40/za.png" },
  { code: "USD", name: "US Dollar", symbol: "$", flag: "https://flagcdn.com/w40/us.png" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "https://flagcdn.com/w40/eu.png" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "https://flagcdn.com/w40/au.png" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "https://flagcdn.com/w40/in.png" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "https://flagcdn.com/w40/ae.png" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", flag: "https://flagcdn.com/w40/ch.png" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "https://flagcdn.com/w40/sg.png" },
];

const navLinks = [
  { label: "Home", href: "/", mega: false },
  { label: "About Us", href: "/about-us/", mega: false },
  { label: "SA Safaris", href: "/sa-safaris/", mega: false },
  { label: "Kruger Park", href: "/kruger-park/", mega: false },
  { label: "Day Tours", href: "/day-tours/", mega: false },
  { label: "Contact", href: "#contact", mega: false },
];

// Morphing Hamburger Menu Icon Component - 2 lines morphing to X
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-3 flex flex-col justify-between">
      {/* Top line - transforms to left diagonal of X */}
      <motion.span
        animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-0.5 bg-current block w-full origin-center"
      />
      {/* Bottom line - transforms to right diagonal of X */}
      <motion.span
        animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-0.5 bg-current block w-full origin-center"
      />
    </div>
  );
}

// Currency Selector Component
function CurrencySelector({ 
  scrolled, 
  isMobile = false 
}: { 
  scrolled: boolean; 
  isMobile?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(currencies[0]); // ZAR is default

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
          isMobile 
            ? scrolled
              ? "bg-white border border-forest/20 text-foreground hover:bg-cream"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
            : scrolled 
              ? "bg-cream hover:bg-cream/80 text-foreground" 
              : "bg-white/10 hover:bg-white/20 text-white"
        )}
      >
        <img 
          src={selected.flag} 
          alt={selected.code}
          className={cn(
            "w-5 h-5 rounded-full object-cover",
            isMobile && scrolled ? "border border-forest/10" : "border border-white/20"
          )}
        />
        <span className="text-sm font-medium">{selected.code}</span>
        <ChevronDown className={cn(
          "w-3.5 h-3.5 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown - Always white background */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 mt-2 w-48 rounded-[20px] overflow-hidden shadow-lg right-0 bg-white"
            >
              <div className="py-2 max-h-64 overflow-y-auto">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setSelected(currency);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                      selected.code === currency.code 
                        ? "bg-forest/10 text-forest font-medium" 
                        : "hover:bg-cream text-foreground"
                    )}
                  >
                    <img 
                      src={currency.flag} 
                      alt={currency.code}
                      className="w-6 h-6 rounded-full object-cover border border-border"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{currency.code}</div>
                      <div className="text-xs opacity-70">{currency.name}</div>
                    </div>
                    <span className="text-sm opacity-70">{currency.symbol}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Logo URLs
const LIGHT_LOGO = "https://iili.io/qFA1Jaf.png"; // For dark background
const DARK_LOGO = "https://iili.io/qFA0lkl.png"; // For white background

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mobileOpen]); // Re-run when mobile menu opens/closes

  // Lock body scroll when mobile menu is open - with position fix for iOS
  useEffect(() => {
    if (mobileOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = 'unset';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Custom Cursor - Hidden on touch devices */}
      <motion.div
        className="hidden lg:block fixed pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: cursorPos.x - 12,
          y: cursorPos.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div 
          className={cn(
            "w-6 h-6 rounded-full border-2 transition-colors duration-150",
            isHovering ? "border-burnt bg-burnt/20" : "border-forest bg-forest/10"
          )}
        />
      </motion.div>

      {/* Desktop Navigation - Shows on lg (1024px+) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container-flat">
          <nav className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="group flex items-center flex-shrink-0">
              <img 
                src={scrolled ? DARK_LOGO : LIGHT_LOGO}
                alt="Firelight Tours"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links - Centered with nowrap */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-5 py-2.5 rounded-full font-medium transition-colors duration-200 whitespace-nowrap",
                    scrolled 
                      ? "text-foreground hover:bg-cream" 
                      : "text-white/90 hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section - Phone, CTA, Currency */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Button
                variant="ghost"
                className={cn(
                  "rounded-full transition-colors whitespace-nowrap",
                  scrolled ? "text-foreground hover:text-forest hover:bg-cream" : "text-white hover:bg-white/10"
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                +27 123 456 789
              </Button>
              <Button className="btn-flat btn-flat-accent rounded-full px-6 whitespace-nowrap">
                Book Now
              </Button>
              {/* Currency Selector - After Book Now */}
              <CurrencySelector scrolled={scrolled} />
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile & Tablet Navigation - Shows below lg */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white py-3" 
            : "bg-transparent py-4"
        )}
      >
        <div className="">
          <nav className="flex items-center justify-between w-full">
            {/* Logo - Pushed to far left edge */}
            <Link href="/" className="group pl-4">
              <img 
                src={scrolled ? DARK_LOGO : LIGHT_LOGO}
                alt="Firelight Tours"
                className="h-9 sm:h-11 w-auto"
              />
            </Link>

            {/* Center - Currency Selector - 16px margin-left on mobile ONLY (4px on tablet) */}
            <div className="absolute left-1/2 -translate-x-1/2 ml-4 sm:ml-1">
              <CurrencySelector scrolled={scrolled} isMobile />
            </div>

            {/* Mobile Menu Button - Menu text BEFORE hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-full transition-colors mr-4",
                scrolled ? "text-forest hover:bg-cream" : "text-white hover:bg-white/10"
              )}
            >
              <span className="text-sm font-medium">Menu</span>
              <HamburgerIcon isOpen={mobileOpen} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Full Screen on Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel - Full screen on mobile (<640px), slide panel on tablet */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-[400px] bg-white z-50 overflow-y-auto lg:hidden"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-border flex items-center justify-between z-10">
                <img 
                  src={DARK_LOGO}
                  alt="Firelight Tours"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-cream transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">Close</span>
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              {/* Navigation Links - Larger on full screen mobile */}
              <div className="p-6 sm:p-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 sm:py-3 text-xl sm:text-lg font-semibold text-foreground hover:text-forest transition-colors border-b border-border last:border-0"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Featured Tours with Images - Better layout on full screen */}
              <div className="px-6 pb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Popular Tours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                  {locations.filter(l => l.category === "Safaris").slice(0, 4).map((location) => (
                    <Link
                      key={location.id}
                      href={location.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex gap-4 p-3 sm:p-2 rounded-[20px] hover:bg-cream transition-colors"
                    >
                      <div className="w-20 h-14 sm:w-16 sm:h-12 rounded-[16px] sm:rounded-[12px] overflow-hidden flex-shrink-0">
                        <img 
                          src={location.image} 
                          alt={location.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="font-medium text-foreground text-base sm:text-sm truncate">{location.name}</div>
                        <div className="text-sm sm:text-xs text-muted-foreground">{location.duration || location.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* CTA Section - Full width on mobile */}
              <div className="p-6 sm:p-6 border-t border-border bg-cream mt-auto">
                <Button className="w-full btn-flat btn-flat-accent rounded-full py-5 sm:py-4 text-lg sm:text-base font-semibold">
                  Book Your Safari
                </Button>
                
                <div className="mt-8 sm:mt-6 space-y-4 sm:space-y-3">
                  <a 
                    href="tel:+27123456789" 
                    className="flex items-center gap-4 text-foreground hover:text-forest transition-colors"
                  >
                    <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
                      <Phone className="w-5 h-5 text-forest" />
                    </div>
                    <span className="text-base sm:text-sm">+27 123 456 789</span>
                  </a>
                  <a 
                    href="mailto:info@firelighttours.co.za" 
                    className="flex items-center gap-4 text-foreground hover:text-forest transition-colors"
                  >
                    <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
                      <Mail className="w-5 h-5 text-forest" />
                    </div>
                    <span className="text-base sm:text-sm">info@firelighttours.co.za</span>
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 sm:gap-3 mt-8 sm:mt-6 pt-6 border-t border-border">
                  <a href="#" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-forest hover:text-white transition-colors text-foreground">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-forest hover:text-white transition-colors text-foreground">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-forest hover:text-white transition-colors text-foreground">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
