import { iStadium } from "./iStadium";

export const hardRockStadium: iStadium = {
  stadiumName: "Hard Rock Stadium",
  city: "Miami Gardens",
  country: "USA",
  capacity: 65326,
  matches: [
    "Group Stage - June 16, 2026",
    "Group Stage - June 23, 2026",
    "Round of 16 - July 3, 2026"
  ],
  photo: "hard_rock_stadium.jpg",
  link: "https://hardrockstadium.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Miami International Airport (MIA)",
          link: "https://www.miami-airport.com/",
          transferOptions: [
            "Shuttle services to stadium (pre-book recommended)",
            "Taxi or rideshare (approx. 20-30 minutes)"
          ],
          travelTime: "20-30 minutes"
        },
        {
          name: "Fort Lauderdale-Hollywood International Airport (FLL)",
          link: "https://www.fll.net/",
          transferOptions: [
            "Taxi or rideshare (approx. 30-45 minutes)",
            "Rental cars available"
          ],
          travelTime: "30-45 minutes"
        }
      ],
      publicTransit: {
        description: "Miami-Dade Transit offers bus routes connecting to the stadium",
        lines: ["Bus Route 77 (Hard Rock Stadium Express)"],
        passes: ["Easy Card transit pass available"]
      },
      regionalTravelTips: [
        "Consider rideshare apps for flexibility",
        "Parking available but limited; plan ahead"
      ],
      rideShareInfo: "Designated pickup/drop-off zones outside stadium",
      accessibilityOptions: [
        "ADA-compliant seating and parking",
        "Assistance services on request",
        "Service animal accommodations"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags no larger than 12\" x 6\" x 12\"; small clutch bags allowed",
      prohibitedItems: [
        "Outside food or drink",
        "Weapons or fireworks",
        "Noisemakers and drones"
      ],
      entryProcedures: "Arrive early for security checks and ticket scanning",
      digitalTickets: "Mobile and print-at-home tickets accepted",
      facilitiesMap: "Available on stadium website and match day materials",
      exitStrategies: "Post-match traffic expected; use public transit or rideshares"
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "Stadium Guest Services",
      "First Aid stations throughout venue",
      "Multilingual support available"
    ],
    nearbyHospitals: [
      {
        name: "North Shore Medical Center",
        location: "1100 NW 95th St, Miami, FL 33150"
      },
      {
        name: "Baptist Hospital of Miami",
        location: "8900 N Kendall Dr, Miami, FL 33176"
      }
    ],
    medicalPhrases: [
      "I need a doctor.",
      "Where is the medical station?",
      "Help, please."
    ],
    passportHelp: "FIFA support booths and local consulates available",
    weatherEmergencies: "High heat and humidity expected; stay hydrated"
  },
  consular: {
    embassies: [
      {
        country: "Canada",
        contact: "https://www.canadainternational.gc.ca/united_states-etats_unis/miami/index.aspx?lang=eng"
      },
      {
        country: "Mexico",
        contact: "https://embamex.sre.gob.mx/miami/"
      }
    ],
    visaInfo: "Check U.S. government websites for visa requirements",
    legalSupport: "Available at FIFA fan support centers and consulates"
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Downtown Miami", "Wynwood Arts District"],
      teamMeetups: ["Local sports bars near stadium"],
      supporterGroups: ["Miami Soccer Fans", "South Florida Ultras"],
      eventsCalendar: ["Miami tourism website", "FIFA Fan App"],
      rideShareBoards: ["Local Facebook groups and Reddit"]
    },
    accommodation: {
      transitAreas: ["Miami Beach", "Downtown Miami"],
      budgetZones: ["North Miami", "Hialeah"],
      familyAreas: ["Coral Gables", "Coconut Grove"],
      stadiumAdjacent: ["Miami Gardens", "North Miami"],
      alternativeOptions: ["Airbnb and hostels in Miami Beach"],
      accessibleOptions: ["Loews Miami Beach Hotel", "Kimpton EPIC Hotel"]
    },
    culture: {
      customs: ["Friendly and diverse; tipping 15-20% customary"],
      languageBasics: ["‘Hola’ (Hello), ‘Gracias’ (Thank you), ‘Por favor’ (Please)"],
      foodSpecialties: ["Cuban sandwiches", "Key lime pie", "Seafood"],
      tipping: "15-20% in restaurants and taxis",
      taxInfo: "Sales tax approx. 7%",
      currencyTips: "US Dollar (USD); cards and cash widely accepted",
      timezone: "Eastern Daylight Time (UTC−4)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Miami+FL",
      stadiumClimate: "Open-air stadium with shade structures",
      sunProtection: "High sun exposure; sunscreen and hats recommended",
      packingChecklist: ["Light clothing", "Sunscreen", "Hat", "Water bottle"],
      clothingTips: "Breathable fabrics for heat and humidity",
      rainPlan: "Rain showers possible; bring ponchos"
    }
  },
  experience: {
    attractions: [
      "Miami Beach",
      "Vizcaya Museum and Gardens",
      "Wynwood Walls",
      "Little Havana"
    ],
    footballHistory: [
      "Home to Miami Dolphins (NFL)",
      "Host of Super Bowl and other major events"
    ],
    dayTrips: [
      "Everglades National Park",
      "Key Largo",
      "Fort Lauderdale beaches"
    ],
    familyActivities: [
      "Miami Seaquarium",
      "Zoo Miami",
      "Phillip and Patricia Frost Museum of Science"
    ],
    festivals: [
      "Miami Art Basel",
      "Calle Ocho Festival",
      "South Beach Wine & Food Festival"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "Cuban cuisine options",
      "Barbecue",
      "Fresh seafood"
    ],
    budgetOptions: [
      "Food trucks around stadium",
      "Local Cuban cafes",
      "Casual diners"
    ],
    localSpecialties: [
      "Cuban sandwich",
      "Plantains",
      "Key lime pie"
    ],
    supporterBars: [
      "Gramps",
      "The Clevelander",
      "El Palacio de los Jugos"
    ],
    dietaryInfo: [
      "Vegetarian and gluten-free options available",
      "Allergen information posted"
    ],
    waterSafety: "Tap water is safe to drink; hydration stations available"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "Miami-Dade Transit",
      "Uber, Lyft",
      "Google Maps",
      "Yelp"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi at stadium and nearby fan zones"],
      simCards: ["Available at airport and retail stores"],
      cafes: ["Panther Coffee, All Day"],
      powerOutlets: "Type A/B plugs",
      chargingStations: "Located in main concourse and fan zones"
    }
  }
};
