// Firelight Tours - All Locations Data
export interface Location {
  id: string;
  name: string;
  slug: string;
  path: string;
  category: string;
  parentCategory?: string;
  description: string;
  duration?: string;
  image: string;
}

export const locations: Location[] = [
  // Main Navigation
  {
    id: "home",
    name: "Home",
    slug: "home",
    path: "/",
    category: "Main",
    description: "Welcome to Firelight Tours",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop"
  },
  {
    id: "about-us",
    name: "About Us",
    slug: "about-us",
    path: "/about-us/",
    category: "Main",
    description: "Learn about Firelight Tours",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  
  // SA Safaris
  {
    id: "sa-safaris",
    name: "SA Safaris",
    slug: "sa-safaris",
    path: "/sa-safaris/",
    category: "Safaris",
    description: "South African Safari Experiences",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  
  // Pilanesberg Tours
  {
    id: "pilanesberg-tours",
    name: "Pilanesberg Tours",
    slug: "pilanesberg-tours",
    path: "/pilanesberg-tours/",
    category: "Safaris",
    parentCategory: "Pilanesberg",
    description: "Explore Pilanesberg National Park",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  {
    id: "pilanesberg-day-safari",
    name: "Pilanesberg Day Safari",
    slug: "pilanesberg-day-safari",
    path: "/pilanesberg-day-safari-2/",
    category: "Safaris",
    parentCategory: "Pilanesberg",
    description: "Full day safari in Pilanesberg",
    duration: "1 Day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  {
    id: "pilanesberg-overnight-safari",
    name: "Pilanesberg Overnight Safari",
    slug: "pilanesberg-overnight-safari",
    path: "/pilanesberg-overnight-safari/",
    category: "Safaris",
    parentCategory: "Pilanesberg",
    description: "Overnight safari experience",
    duration: "2 Days",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  
  // Kruger Park
  {
    id: "kruger-park",
    name: "Kruger Park",
    slug: "kruger-park",
    path: "/kruger-park/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "World-famous Kruger National Park",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "walking-safari",
    name: "Kruger Park Walking Safari",
    slug: "walking-safari",
    path: "/walking-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Experience the bush on foot",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "self-drive-safari",
    name: "Kruger Park Self-Drive Safari",
    slug: "self-drive-safari",
    path: "/self-drive-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Drive yourself through Kruger",
    duration: "Flexible",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop"
  },
  {
    id: "photographic-wildlife-safari",
    name: "Kruger Park Photographic Wildlife Safari",
    slug: "photographic-wildlife-safari",
    path: "/photographic-wildlife-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Perfect for wildlife photographers",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "moni-house-skukuza",
    name: "Moni House in Skukuza",
    slug: "moni-house-in-skukuza",
    path: "/moni-house-in-skukuza/",
    category: "Accommodation",
    parentCategory: "Kruger Park",
    description: "Luxury accommodation in Skukuza",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=300&h=200&fit=crop"
  },
  {
    id: "birding-tour",
    name: "Kruger Park Birding Tour",
    slug: "birding-tour",
    path: "/birding-tour/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Discover Kruger's bird species",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop"
  },
  {
    id: "kruger-4-day-3-night",
    name: "Kruger Park 4 Day, 3 Night Safari",
    slug: "kruger-park-4-day-3-night-safari",
    path: "/kruger-park-4-day-3-night-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Extended Kruger experience",
    duration: "4 Days, 3 Nights",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "kruger-3-day-2-night",
    name: "Kruger Park 3 Day, 2 Night Safari",
    slug: "kruger-park-3-day-2-night-safari",
    path: "/kruger-park-3-day-2-night-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Perfect weekend safari",
    duration: "3 Days, 2 Nights",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "kruger-3-day-2-night-alt",
    name: "3 Day, 2 Night Kruger Park Safari",
    slug: "3-day-2-night-kruger-park-safari",
    path: "/3-day-2-night-kruger-park-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Weekend Kruger adventure",
    duration: "3 Days, 2 Nights",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "fly-in-safari",
    name: "Kruger Park Fly-In Safari",
    slug: "fly-in-safari",
    path: "/fly-in-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Fly directly to Kruger",
    duration: "Various",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop"
  },
  {
    id: "budget-safari",
    name: "Kruger Park Budget Safari",
    slug: "budget-safari",
    path: "/budget-safari/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Affordable Kruger experience",
    duration: "Various",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop"
  },
  {
    id: "budget-tour",
    name: "Kruger Park Budget Tour",
    slug: "budget-tour",
    path: "/budget-tour/",
    category: "Safaris",
    parentCategory: "Kruger Park",
    description: "Budget-friendly Kruger tour",
    duration: "Various",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop"
  },
  
  // KwaZulu Natal
  {
    id: "kwazulu-natal",
    name: "KwaZulu Natal",
    slug: "kwazulu-natal",
    path: "/kwazulu-natal/",
    category: "Safaris",
    parentCategory: "KwaZulu Natal",
    description: "Explore KwaZulu Natal",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
  },
  {
    id: "kwazulu-natal-5-day",
    name: "Kwazulu Natal 5 Day, 4 Nights",
    slug: "kwazulu-natal-5-day-4-nights",
    path: "/kwazulu-natal-5-day-4-nights/",
    category: "Safaris",
    parentCategory: "KwaZulu Natal",
    description: "Extended KZN adventure",
    duration: "5 Days, 4 Nights",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
  },
  
  // Day Tours
  {
    id: "day-tours",
    name: "Day Tours",
    slug: "day-tours",
    path: "/day-tours/",
    category: "Day Tours",
    description: "Single day experiences",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  
  // Johannesburg Day Tours
  {
    id: "johannesburg-day-tours",
    name: "Johannesburg Day Tours",
    slug: "johannesburg-day-tours",
    path: "/johannesburg-day-tours/",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Explore Johannesburg",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "half-day-downtown-jhb",
    name: "Half Day Down-Town Johannesburg Tour",
    slug: "half-day-downtown-johannesburg",
    path: "/johannesburg-day-tours/#downtown",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Explore downtown Johannesburg",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "half-day-jhb-sandton-soweto",
    name: "Half Day Jhb/Sandton/Soweto Tour",
    slug: "half-day-jhb-sandton-soweto",
    path: "/johannesburg-day-tours/#sandton-soweto",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "City highlights tour",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "half-day-soweto",
    name: "Half Day Soweto Tour",
    slug: "half-day-soweto",
    path: "/johannesburg-day-tours/#soweto",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Explore historic Soweto",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "full-day-jhb-sandton-soweto",
    name: "Full Day Jhb/Sandton/Soweto Tour",
    slug: "full-day-jhb-sandton-soweto",
    path: "/johannesburg-day-tours/#full-sandton-soweto",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Complete city experience",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "full-day-soweto",
    name: "Full Day Soweto Tour",
    slug: "full-day-soweto",
    path: "/johannesburg-day-tours/#full-soweto",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "In-depth Soweto experience",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "apartheid-museum-gold-reef",
    name: "Apartheid Museum and Gold Reef City Day Tour",
    slug: "apartheid-museum-gold-reef-city",
    path: "/johannesburg-day-tours/#apartheid-gold-reef",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "History and entertainment",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "hot-air-balloon",
    name: "Hot Air Ballooning Safari",
    slug: "hot-air-ballooning",
    path: "/johannesburg-day-tours/#balloon",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Safari from the sky",
    duration: "Early Morning",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop"
  },
  {
    id: "lesedi-cultural-village",
    name: "Lesedi Cultural Village Day Tour",
    slug: "lesedi-cultural-village",
    path: "/lesedi-cultural-village/",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Experience African cultures",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=300&h=200&fit=crop"
  },
  {
    id: "cradle-humankind",
    name: "The Cradle of Humankind Tour",
    slug: "the-cradle-of-humankind",
    path: "/the-cradle-of-humankind/",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "UNESCO World Heritage Site",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=300&h=200&fit=crop"
  },
  {
    id: "walter-sisulu-gardens",
    name: "Walter Sisulu Botanical Gardens",
    slug: "walter-sisulu-botanical-gardens",
    path: "/walter-sisulu-botanical-gardens/",
    category: "Day Tours",
    parentCategory: "Johannesburg",
    description: "Beautiful botanical gardens",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=200&fit=crop"
  },
  
  // Pretoria Day Tours
  {
    id: "pretoria-day-tours",
    name: "Pretoria Day Tours",
    slug: "pretoria-day-tours",
    path: "/pretoria-day-tours/",
    category: "Day Tours",
    parentCategory: "Pretoria",
    description: "Explore South Africa's capital",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop"
  },
  {
    id: "pretoria-cullinan",
    name: "Pretoria & Cullinan Diamond Mine Tour",
    slug: "pretoria-cullinan-diamond-mine",
    path: "/pretoria-cullinan-diamond-mine/",
    category: "Day Tours",
    parentCategory: "Pretoria",
    description: "Diamond mine adventure",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=300&h=200&fit=crop"
  },
  
  // Wildlife Day Tours
  {
    id: "wildlife-day-tours",
    name: "Wildlife Day Tours",
    slug: "wildlife-day-tours",
    path: "/wildlife-day-tours/",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Wildlife experiences",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop"
  },
  {
    id: "de-wildt-cheetah",
    name: "De Wildt Wild Cheetah Project Day Tour",
    slug: "de-wildt-cheetah",
    path: "/wildlife-day-tours/#de-wildt",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Cheetah conservation",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  {
    id: "elephant-monkey-sanctuary",
    name: "Elephant & Monkey Sanctuary, Hartbeespoort Dam",
    slug: "elephant-monkey-sanctuary-hartbeespoort-dam",
    path: "/elephant-monkey-sanctuary-hartbeespoort-dam/",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Animal sanctuary experience",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300&h=200&fit=crop"
  },
  {
    id: "rhino-lion-park",
    name: "Rhino and Lion Park",
    slug: "rhino-lion-park-tour",
    path: "/rhino-lion-park-tour/",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Big cats and rhinos",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  {
    id: "ukutula-lion-park",
    name: "Ukutula Lion Park",
    slug: "ukuthulu-lion-park",
    path: "/ukuthulu-lion-park/",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Lion interaction experience",
    duration: "Full Day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
  {
    id: "lion-park",
    name: "Lion Park",
    slug: "lion-park",
    path: "/lion-park/",
    category: "Day Tours",
    parentCategory: "Wildlife",
    description: "Close encounter with lions",
    duration: "Half Day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop"
  },
];

// Helper function to search locations
export function searchLocations(query: string): Location[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return locations.slice(0, 6);
  
  return locations.filter(location => {
    const nameMatch = location.name.toLowerCase().includes(searchTerm);
    const categoryMatch = location.category.toLowerCase().includes(searchTerm);
    const parentMatch = location.parentCategory?.toLowerCase().includes(searchTerm);
    const descMatch = location.description.toLowerCase().includes(searchTerm);
    
    return nameMatch || categoryMatch || parentMatch || descMatch;
  }).slice(0, 10);
}

// Get categories for filtering
export function getCategories(): string[] {
  return [...new Set(locations.map(l => l.category))];
}

// Get locations by category
export function getLocationsByCategory(category: string): Location[] {
  return locations.filter(l => l.category === category);
}

// Get parent categories
export function getParentCategories(): string[] {
  return [...new Set(locations.filter(l => l.parentCategory).map(l => l.parentCategory as string))];
}
