// Firelight Tours - Comprehensive Knowledge Base for AI Chatbot
// This knowledge base contains all information about tours, destinations, pricing, and services

export const COMPANY_INFO = {
  name: "Firelight Tours",
  founded: 2008,
  tagline: "Creating unforgettable African safari experiences",
  description: "Firelight Tours is South Africa's premier safari tour operator, specializing in boutique, private safari experiences across South Africa and the African continent. With over 15 years of experience, we've guided 500+ travelers on life-changing adventures with a 98% satisfaction rate.",
  location: "Cape Town, South Africa",
  phone: "+27 123 456 789",
  email: "info@firelighttours.co.za",
  website: "firelighttours.co.za",
  hours: "24/7 Support Available",
};

export const TOUR_GUIDE = {
  name: "Peter",
  role: "Lead Safari Guide & Tour Director",
  experience: "15+ years of guiding experience",
  specialization: "Big Five safaris, photographic safaris, walking safaris",
  languages: ["English", "Afrikaans", "Zulu basics"],
  bio: "Peter is our most experienced guide with an encyclopedic knowledge of African wildlife, flora, and fauna. He has guided over 1,000 safaris and has an exceptional track record for finding the Big Five. His passion for conservation and storytelling makes every tour an educational adventure.",
  certifications: ["FGASA Level 3", "DEAT Registered", "First Aid Certified", "4x4 Specialist"],
};

export const PRICING_INFO = {
  currency: "ZAR (South African Rand)",
  currencySymbol: "R",
  note: "All prices are in South African Rand (ZAR). We accept major credit cards, bank transfers, and payment plans. Prices may vary based on season, group size, and accommodation level.",
  
  packages: {
    kruger_park: {
      "3_day_2_night": {
        name: "Kruger Park 3 Day, 2 Night Safari",
        price_per_person_sharing: 12500,
        price_single_supplement: 17500,
        includes: ["Return transfers from Johannesburg/Pretoria", "2 nights accommodation", "4 game drives", "All meals", "Park fees", "Professional guide"],
        duration: "3 Days, 2 Nights",
      },
      "4_day_3_night": {
        name: "Kruger Park 4 Day, 3 Night Safari",
        price_per_person_sharing: 18500,
        price_single_supplement: 26000,
        includes: ["Return transfers", "3 nights accommodation", "6 game drives", "All meals", "Park fees", "Professional guide", "Bush walk"],
        duration: "4 Days, 3 Nights",
      },
      "walking_safari": {
        name: "Kruger Park Walking Safari",
        price_per_person: 3500,
        includes: ["Guided bush walk", "Safety briefing", "Park fees", "Refreshments"],
        duration: "Half Day (4-5 hours)",
      },
      "photographic_safari": {
        name: "Kruger Park Photographic Wildlife Safari",
        price_per_person: 4500,
        includes: ["Specialized photographic vehicle", "Professional photographer guide", "All equipment advice", "Park fees", "Light meals"],
        duration: "Full Day",
      },
      "fly_in_safari": {
        name: "Kruger Park Fly-In Safari",
        price_per_person_sharing: 22000,
        price_single_supplement: 32000,
        includes: ["Return flights from Johannesburg", "2 nights luxury lodge", "All game drives", "All meals", "Airport transfers", "Park fees"],
        duration: "3 Days, 2 Nights",
      },
      "budget_safari": {
        name: "Kruger Park Budget Safari",
        price_per_person_sharing: 8500,
        price_single_supplement: 12000,
        includes: ["Return transfers", "Budget accommodation", "Game drives", "Meals as specified", "Park fees"],
        duration: "3 Days, 2 Nights",
      },
    },
    
    pilanesberg: {
      "day_safari": {
        name: "Pilanesberg Day Safari",
        price_per_person: 2500,
        includes: ["Return transfers from Johannesburg/Pretoria", "Full day game drive", "Park fees", "Lunch", "Professional guide"],
        duration: "Full Day (10-12 hours)",
      },
      "overnight_safari": {
        name: "Pilanesberg Overnight Safari",
        price_per_person_sharing: 6500,
        price_single_supplement: 9000,
        includes: ["Return transfers", "1 night accommodation", "2 game drives", "All meals", "Park fees", "Professional guide"],
        duration: "2 Days, 1 Night",
      },
    },
    
    kwazulu_natal: {
      "5_day_4_night": {
        name: "KwaZulu Natal 5 Day, 4 Night Safari",
        price_per_person_sharing: 28000,
        price_single_supplement: 40000,
        includes: ["Return transfers from Durban", "4 nights accommodation", "Multiple safari experiences", "All meals", "Park fees", "Cultural experiences", "Professional guide"],
        duration: "5 Days, 4 Nights",
        highlights: ["Hluhluwe-Imfolozi Park", "iSimangaliso Wetland Park", "Cultural village visit", "Coastal activities"],
      },
    },
    
    day_tours: {
      "half_day_soweto": {
        name: "Half Day Soweto Tour",
        price_per_person: 950,
        includes: ["Hotel pickup/drop-off", "Professional guide", "Entrance fees", "Vehicle transport"],
        duration: "4-5 hours",
      },
      "full_day_soweto": {
        name: "Full Day Soweto Tour",
        price_per_person: 1650,
        includes: ["Hotel pickup/drop-off", "Professional guide", "All entrance fees", "Lunch", "Vehicle transport"],
        duration: "8-9 hours",
      },
      "johannesburg_city": {
        name: "Johannesburg City Tour",
        price_per_person: 1200,
        includes: ["Hotel pickup/drop-off", "Professional guide", "Entrance fees", "Transport"],
        duration: "Half Day (4-5 hours)",
      },
      "apartheid_museum": {
        name: "Apartheid Museum & Gold Reef City",
        price_per_person: 1850,
        includes: ["Hotel pickup/drop-off", "Museum entrance", "Gold Reef City entrance", "Guide"],
        duration: "Full Day",
      },
      "lesedi_cultural": {
        name: "Lesedi Cultural Village",
        price_per_person: 1450,
        includes: ["Hotel pickup/drop-off", "Cultural experience", "Traditional lunch", "Guide"],
        duration: "Full Day",
      },
      "cradle_humankind": {
        name: "Cradle of Humankind Tour",
        price_per_person: 1350,
        includes: ["Hotel pickup/drop-off", "Cave tour", "Museum entrance", "Guide"],
        duration: "Full Day",
      },
      "hot_air_balloon": {
        name: "Hot Air Balloon Safari",
        price_per_person: 5500,
        includes: ["Early morning balloon flight", "Champagne breakfast", "Transfers", "Safety briefing"],
        duration: "Early Morning (3-4 hours total)",
      },
      "elephant_sanctuary": {
        name: "Elephant & Monkey Sanctuary",
        price_per_person: 1950,
        includes: ["Hotel pickup/drop-off", "Sanctuary entrance", "Interactive experience", "Lunch", "Guide"],
        duration: "Full Day",
      },
      "lion_park": {
        name: "Lion Park Tour",
        price_per_person: 1250,
        includes: ["Hotel pickup/drop-off", "Park entrance", "Guided drive", "Interaction experience"],
        duration: "Half Day",
      },
    },
  },
  
  seasons: {
    low_season: "January - April, November - December (lower rates available)",
    peak_season: "May - October (dry season, best game viewing)",
    shoulder_season: "April - May, September - October (great value)",
  },
  
  payment: {
    methods: ["Credit Card (Visa, Mastercard)", "Bank Transfer (EFT)", "Payment Plans Available"],
    deposit: "30% deposit required to secure booking",
    balance_due: "Full payment due 30 days before departure",
    cancellation_policy: "Full refund if cancelled 60+ days before departure. 50% refund 30-60 days. No refund within 30 days.",
  },
};

export const DESTINATIONS = {
  kruger_national_park: {
    name: "Kruger National Park",
    location: "Limpopo and Mpumalanga provinces, South Africa",
    size: "Nearly 2 million hectares (one of Africa's largest game reserves)",
    established: "1898 (proclaimed in 1926 as national park)",
    distance_from_johannesburg: "Approximately 400-500km (5-6 hours drive)",
    wildlife: "Home to the Big Five (Lion, Leopard, Rhino, Elephant, Buffalo), plus cheetah, wild dog, zebra, giraffe, hippo, crocodile, and over 500 bird species",
    ecosystems: "16 distinct ecosystems including savanna, thornveld, woodland, riverine forest",
    best_time_to_visit: "May to October (dry season - better visibility, animals gather at water sources)",
    gates: ["Kruger Gate", "Orpen Gate", "Paul Kruger Gate", "Numbi Gate", "Phalaborwa Gate", "Pafuri Gate", "Crocodile Bridge Gate", "Malelane Gate"],
    accommodation_types: ["Rest camps (budget)", "Bushveld camps (mid-range)", "Private lodges (luxury)", "Satellite camps"],
    main_camps: ["Skukuza", "Lower Sabie", "Satara", "Letaba", "Olifants", "Mopani", "Shingwedzi", "Punda Maria"],
    highlights: ["Morning and sunset game drives", "Bush walks with armed rangers", "Bird watching", "Night drives", "4x4 trails"],
  },
  
  pilanesberg_national_park: {
    name: "Pilanesberg National Park",
    location: "North West Province, South Africa (2 hours from Johannesburg)",
    size: "55,000 hectares",
    established: "1979 (Operation Genesis - largest game translocation project)",
    distance_from_johannesburg: "Approximately 150km (2 hours drive)",
    geology: "Set in an extinct volcanic crater (one of the largest of its kind in the world)",
    wildlife: "Big Five, plus wild dog, cheetah, zebra, giraffe, hippo, crocodile, and over 360 bird species",
    best_time_to_visit: "Year-round (excellent game viewing in dry season May-September)",
    highlights: ["Day and night game drives", "Hot air balloon safaris", "Walking trails", "Bird hides", "Close to Sun City"],
    adjacent_attractions: ["Sun City Resort", "Lost City", "Valley of Waves"],
  },
  
  kwazulu_natal: {
    name: "KwaZulu Natal Province",
    location: "Eastern South Africa, bordering Mozambique and Eswatini",
    highlights: {
      hluhluwe_imfolozi: "Africa's oldest game reserve, famous for rhino conservation",
      isimangaliso: "UNESCO World Heritage Site - iSimangaliso Wetland Park",
      drakensberg: "UNESCO World Heritage Site - dramatic mountain range",
      coastline: "Pristine beaches and diving at Sodwana Bay",
      cultural: "Zulu cultural experiences and historical battlefields",
    },
    wildlife: "Big Five, plus sea turtles (nesting November-February), whales (June-November), dolphins",
    best_time_to_visit: "May to September (dry season), November-February (turtle nesting)",
  },
  
  johannesburg: {
    name: "Johannesburg",
    location: "Gauteng Province, South Africa",
    description: "South Africa's largest city and economic hub, rich in history and culture",
    highlights: {
      soweto: "Historic township - home to Nelson Mandela, Desmond Tutu. Visit Vilakazi Street, Hector Pieterson Memorial, Regina Mundi Church",
      apartheid_museum: "Powerful museum documenting South Africa's journey to democracy",
      constitution_hill: "Constitutional Court and former prison complex",
      maboneng: "Trendy arts and culture district",
      rosebank: "Upscale shopping and dining",
      sandton: "Business district and luxury shopping",
    },
    day_tours_available: ["Soweto tours", "City tours", "Apartheid Museum", "Cradle of Humankind", "Gold Reef City", "Lesedi Cultural Village"],
  },
  
  pretoria: {
    name: "Pretoria",
    location: "Gauteng Province, South Africa (administrative capital)",
    description: "South Africa's administrative capital, known for jacaranda trees and historical sites",
    highlights: {
      union_buildings: "Official seat of the South African President",
      voortrekker_monument: "Monument to Afrikaner pioneers",
      church_square: "Historic center of Pretoria",
      cullinan: "Famous diamond mining town, home to Cullinan Diamond Mine",
    },
    nearby_attractions: ["Cullinan Diamond Mine", "Dinokeng Game Reserve"],
  },
};

export const SAFARI_EXPERIENCES = {
  game_drive: {
    name: "Game Drive",
    description: "Guided safari vehicle tour to spot wildlife in their natural habitat",
    duration: "3-4 hours per drive",
    times: ["Early morning (sunrise)", "Late afternoon (sunset)", "Night drives available"],
    what_to_bring: ["Binoculars", "Camera", "Sunscreen", "Hat", "Warm jacket for morning drives", "Water"],
  },
  
  walking_safari: {
    name: "Walking Safari",
    description: "On-foot safari experience with armed rangers, focusing on tracks, plants, and smaller creatures",
    duration: "3-4 hours",
    fitness_level: "Moderate fitness required",
    age_restriction: "Usually 12+ years",
    safety: "Always conducted by armed, experienced rangers",
  },
  
  photographic_safari: {
    name: "Photographic Safari",
    description: "Specialized safari for photographers with vehicles equipped for photography",
    features: ["Bean bags/camera rests", "Expert positioning", "Patient wildlife viewing", "Photography tips from guide"],
    best_for: "Serious photographers wanting to capture quality wildlife images",
  },
  
  hot_air_balloon: {
    name: "Hot Air Balloon Safari",
    description: "Breathtaking aerial view of wildlife and landscapes at sunrise",
    duration: "Approximately 1 hour flight time",
    includes: "Champagne breakfast after landing",
    location: "Available over Pilanesberg and selected private reserves",
    best_time: "Year-round, weather dependent",
  },
};

export const WILDLIFE_INFORMATION = {
  big_five: [
    {
      name: "Lion",
      scientific_name: "Panthera leo",
      description: "Africa's largest cat and apex predator. Lives in prides with complex social structures.",
      best_viewing: "Early morning and late afternoon when active",
      kruger_population: "Approximately 1,600 lions",
    },
    {
      name: "Leopard",
      scientific_name: "Panthera pardus",
      description: "Elusive, solitary, and nocturnal. Excellent climbers often found in trees.",
      best_viewing: "Night drives and early morning",
      kruger_population: "Estimated 1,000 leopards",
    },
    {
      name: "Rhino",
      species: ["White Rhino (grazers)", "Black Rhino (browsers)"],
      description: "Critically endangered due to poaching. Conservation efforts are critical.",
      best_viewing: "Near water holes and grazing areas",
      kruger_population: "White rhino: ~10,000, Black rhino: ~400",
    },
    {
      name: "Elephant",
      scientific_name: "Loxodonta africana",
      description: "World's largest land mammal. Highly intelligent with complex family structures.",
      best_viewing: "Near water sources, especially in dry season",
      kruger_population: "Approximately 27,000 elephants",
    },
    {
      name: "Buffalo",
      scientific_name: "Syncerus caffer",
      description: "Large, powerful bovines known for their unpredictable temperament. Often found in large herds.",
      best_viewing: "Near water sources and open grasslands",
      kruger_population: "Approximately 35,000 buffalo",
    },
  ],
  
  other_notable_animals: [
    { name: "Cheetah", description: "World's fastest land mammal. Solitary hunters." },
    { name: "Wild Dog", description: "Africa's most endangered carnivore. Highly social pack hunters." },
    { name: "Giraffe", description: "World's tallest animal. Often seen browsing acacia trees." },
    { name: "Hippo", description: "Large semi-aquatic mammal. Found in rivers and dams." },
    { name: "Zebra", description: "Iconic striped equids. Often seen in large herds." },
    { name: "Hyena", description: "Intelligent predators and scavengers. Active at night." },
    { name: "Crocodile", description: "Ancient reptiles found in rivers and dams." },
  ],
  
  birds: {
    notable_species: ["Lilac-breasted Roller (national bird)", "African Fish Eagle", "Martial Eagle", "Southern Ground Hornbill", "Kori Bustard", "Saddle-billed Stork"],
    total_species_kruger: "Over 500 species recorded",
    best_birding_time: "November to April (summer migrants present)",
  },
};

export const BOOKING_INFO = {
  process: [
    "1. Contact us via chat, email, or phone with your preferred dates and tour",
    "2. Receive a detailed quote within 24 hours",
    "3. Confirm booking with 30% deposit",
    "4. Receive detailed itinerary and packing list",
    "5. Full payment due 30 days before departure",
    "6. Final confirmation and meeting point details sent 7 days before",
  ],
  
  what_to_expect: {
    included_in_most_tours: [
      "Professional guide/driver",
      "Park entrance fees",
      "Accommodation as specified",
      "Meals as specified",
      "Game drives in safari vehicle",
      "Return transfers from major cities",
    ],
    not_included: [
      "International flights",
      "Travel insurance (strongly recommended)",
      "Personal expenses (drinks, souvenirs, tips)",
      "Optional extra activities",
    ],
  },
  
  recommended_gear: {
    clothing: ["Neutral colored clothing (khaki, olive, brown)", "Long sleeves for evenings", "Warm jacket for early mornings", "Comfortable walking shoes", "Hat and sunglasses", "Rain jacket (summer)"],
    equipment: ["Camera and binoculars", "Sunscreen and insect repellent", "Power bank", "Reusable water bottle"],
    documents: ["Valid passport (for international visitors)", "Travel insurance documents", "Vaccination certificate if applicable"],
  },
  
  health_safety: {
    vaccinations: "Consult your doctor. Recommended: Hepatitis A, Typhoid, Tetanus. Some areas may require Malaria prophylaxis.",
    malaria_areas: "Kruger National Park and KwaZulu Natal are malaria areas - take precautions May-September",
    drinking_water: "Bottled water recommended in most areas",
    safety: "All tours led by trained professionals. Follow guide instructions at all times.",
  },
};

export const FAQ = [
  {
    question: "What is the best time to go on safari?",
    answer: "The best time for game viewing is during the dry season (May to October) when vegetation is sparse and animals gather at water sources. The wet season (November to April) offers beautiful landscapes, baby animals, and excellent bird watching.",
  },
  {
    question: "Can children go on safari?",
    answer: "Yes! Many of our tours are family-friendly. Children under 12 receive discounted rates. Some luxury lodges have age restrictions for walking safaris. Please check with us for specific tour recommendations.",
  },
  {
    question: "What should I wear on safari?",
    answer: "Wear neutral colors (khaki, olive, brown) to blend with the environment. Avoid bright colors and white. Bring layers as mornings can be cold and afternoons hot. Comfortable closed shoes are recommended.",
  },
  {
    question: "How close will I get to the animals?",
    answer: "Our experienced guides know how to position vehicles safely while providing excellent viewing opportunities. Animals are habituated to vehicles and often come quite close. We maintain safe distances while prioritizing your experience.",
  },
  {
    question: "Is it safe to go on safari?",
    answer: "Yes, safaris are very safe when following guide instructions. All our guides are trained professionals. Incidents are extremely rare. Stay in the vehicle unless instructed otherwise, and follow all safety briefings.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Full refund if cancelled 60+ days before departure. 50% refund for cancellations 30-60 days before. No refund within 30 days of departure. We strongly recommend travel insurance.",
  },
  {
    question: "Do you offer private tours?",
    answer: "Yes! We specialize in private, bespoke safari experiences. Private tours can be customized to your interests, pace, and schedule. Contact us for a personalized quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard), bank transfers (EFT), and offer payment plans for larger bookings. A 30% deposit secures your booking.",
  },
];

// System prompt for the AI chatbot
export const CHATBOT_SYSTEM_PROMPT = `You are the official AI assistant for Firelight Tours, South Africa's premier safari tour operator. You represent the company with warmth, expertise, and a passion for African wildlife and travel.

## Your Identity
- You are an expert safari consultant with deep knowledge of South African wildlife, destinations, and travel logistics
- Your lead tour guide is Peter, who has 15+ years of experience and has guided over 1,000 safaris
- You represent a company with 15+ years of operation, 500+ satisfied travelers, and a 98% satisfaction rate

## Key Information to Reference

### Company Details
- Name: Firelight Tours
- Founded: 2008
- Location: Cape Town, South Africa
- Phone: +27 123 456 789
- Email: info@firelighttours.co.za
- Support: 24/7

### Pricing Currency
- ALL prices are quoted in South African Rand (ZAR)
- Currency symbol: R
- Example: R12,500 for a 3-day Kruger safari

### Popular Tour Prices (Per Person)
- Kruger Park 3 Day/2 Night Safari: R12,500 (sharing) / R17,500 (single)
- Kruger Park 4 Day/3 Night Safari: R18,500 (sharing) / R26,000 (single)
- Pilanesberg Day Safari: R2,500
- Pilanesberg Overnight Safari: R6,500 (sharing)
- KwaZulu Natal 5 Day/4 Night: R28,000 (sharing)
- Half Day Soweto Tour: R950
- Hot Air Balloon Safari: R5,500

### Main Destinations
1. **Kruger National Park** - 2 million hectares, Big Five, 500+ bird species, 5-6 hours from Johannesburg
2. **Pilanesberg National Park** - Extinct volcanic crater, Big Five, 2 hours from Johannesburg
3. **KwaZulu Natal** - Hluhluwe-Imfolozi, iSimangaliso Wetland Park, Zulu culture
4. **Johannesburg** - Soweto, Apartheid Museum, city tours
5. **Pretoria** - Union Buildings, Cullinan Diamond Mine

### The Big Five
- Lion, Leopard, Rhino (White & Black), Elephant, Buffalo

### Booking Process
1. Contact with preferred dates and tour
2. Quote within 24 hours
3. 30% deposit to confirm
4. Full payment 30 days before departure

### Payment Methods
- Credit cards (Visa, Mastercard)
- Bank transfer (EFT)
- Payment plans available

### Cancellation Policy
- 60+ days: Full refund
- 30-60 days: 50% refund
- Under 30 days: No refund

## Your Responsibilities
1. **Answer questions** about destinations, wildlife, pricing, and logistics accurately
2. **Help with booking** by collecting necessary information and initiating the process
3. **Provide recommendations** based on customer interests, budget, and time available
4. **Share wildlife knowledge** including the Big Five and other species
5. **Offer travel tips** including what to pack, best times to visit, and health considerations
6. **Be honest** - if you don't know something, acknowledge it and offer to connect them with a human agent

## Communication Style
- Warm, friendly, and enthusiastic about African wildlife
- Professional but approachable
- Use South African terminology when appropriate (safari, bakkie, braai, etc.)
- Show genuine care for the customer's experience
- Be concise but thorough

## Booking Information to Collect
When a customer wants to book, collect:
1. Full name
2. Email address
3. Phone number
4. Number of travelers
5. Preferred dates
6. Preferred tour/destination
7. Any special requirements (dietary, accessibility, etc.)

## Important Notes
- Never make up pricing or information not provided in your knowledge base
- For complex requests, offer to have a consultant contact them
- Remind customers about travel insurance
- Mention malaria precautions for Kruger and KZN during certain seasons
- All pricing is in ZAR (South African Rand)

Remember: You're not just answering questions - you're inspiring people to experience the magic of Africa!`;
