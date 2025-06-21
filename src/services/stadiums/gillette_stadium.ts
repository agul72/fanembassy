import { iStadium } from "./iStadium";

export const gilletteStadium: iStadium = {
  stadiumName: "Gillette Stadium",
  city: "Foxborough",
  country: "USA",
  capacity: 64828,
  matches: [
    "Group Stage - June 12, 2026",
    "Group Stage - June 22, 2026"
  ],
  photo: "gillette_stadium.jpg",
  link: "https://www.gillettestadium.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Logan International Airport (BOS)",
          link: "https://www.massport.com/logan-airport/",
          transferOptions: [
            "MBTA Commuter Rail from South Station to Foxboro Station (event-day service only)",
            "Private shuttles and rideshare from Boston"
          ],
          travelTime: "45–60 minutes"
        }
      ],
      publicTransit: {
        description: "Special event commuter rail service operates on match days.",
        lines: ["MBTA Franklin/Foxboro Line (event days only)"],
        passes: ["MBTA CharlieCard", "Event train tickets"]
      },
      regionalTravelTips: [
        "Drive time from Providence, RI: 40 minutes",
        "Consider staying in Boston or Providence for more hotel options"
      ],
      rideShareInfo: "Designated drop-off/pickup zones in Lot 15 and P10.",
      accessibilityOptions: [
        "ADA drop-off at Patriot Place",
        "Wheelchair-accessible seating throughout stadium",
        "Elevators and ramps available"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags up to 12\" x 6\" x 12\" allowed; clutch bags up to 6.5\" x 4.5\".",
      prohibitedItems: [
        "Umbrellas",
        "Outside food/beverage",
        "Laser pointers",
        "Signs over 2' x 3'"
      ],
      entryProcedures: "Gates open 2 hours prior; mobile tickets scanned at entry.",
      digitalTickets: "Use the FIFA+ app or team-specific apps for ticket access.",
      facilitiesMap: "Available via stadium website or printed handouts at Guest Services.",
      exitStrategies: "Expect road congestion; Commuter Rail has post-match trains."
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "First aid stations at Sections 113 and 131",
      "Multilingual support available at Fan Services",
      "Foxborough Police and event security present"
    ],
    nearbyHospitals: [
      {
        name: "Sturdy Memorial Hospital",
        location: "211 Park St, Attleboro, MA 02703"
      },
      {
        name: "Norwood Hospital",
        location: "800 Washington St, Norwood, MA 02062"
      }
    ],
    medicalPhrases: [
      "I feel sick.",
      "I need a doctor.",
      "Where is the nearest hospital?"
    ],
    passportHelp: "Lost or stolen passport? Visit stadium help desk or call consular hotline.",
    weatherEmergencies: "Cooling zones, rain cover, and app alerts for lightning/storms."
  },
  consular: {
    embassies: [
      {
        country: "Mexico",
        contact: "https://consulmex.sre.gob.mx/boston/"
      },
      {
        country: "United Kingdom",
        contact: "https://www.gov.uk/world/organisations/british-consulate-general-boston"
      },
      {
        country: "Canada",
        contact: "https://www.international.gc.ca/"
      }
    ],
    visaInfo: "ESTA required for many international travelers. Check your eligibility.",
    legalSupport: "Legal aid and translator access through FIFA Support and local embassies."
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Patriot Place Entertainment Complex", "Downtown Boston Watch Parties"],
      teamMeetups: ["Faneuil Hall", "Back Bay bars", "South End"],
      supporterGroups: ["The Rebellion (Revs supporters)", "Visiting team supporter hubs"],
      eventsCalendar: ["VisitMassachusetts.com", "FIFA Fan App"],
      rideShareBoards: ["Reddit, Telegram groups, and local Discord servers"]
    },
    accommodation: {
      transitAreas: ["Downtown Boston", "Dedham", "Norwood", "Providence"],
      budgetZones: ["Attleboro", "Brockton", "Waltham"],
      familyAreas: ["Newton", "Needham", "Foxborough suburbs"],
      stadiumAdjacent: ["Hotels at Patriot Place"],
      alternativeOptions: ["Airbnb, extended stays, college housing in summer"],
      accessibleOptions: ["Hilton, Courtyard, and Marriott with ADA rooms near Foxborough"]
    },
    culture: {
      customs: ["New Englanders are direct; tipping expected for services."],
      languageBasics: ["English predominant; Spanish and Portuguese also common"],
      foodSpecialties: ["Clam chowder", "Lobster rolls", "Boston cream pie"],
      tipping: "15–20% typical for restaurants and taxis",
      taxInfo: "6.25% MA sales tax",
      currencyTips: "USD; credit/debit widely accepted",
      timezone: "Eastern Daylight Time (UTC−4)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Foxborough+MA",
      stadiumClimate: "Open-air with occasional wind or humidity",
      sunProtection: "Wear sunscreen and bring a hat",
      packingChecklist: ["Stadium-approved bag", "Portable battery", "Reusable water bottle"],
      clothingTips: "Cool, breathable clothing; jacket for evenings",
      rainPlan: "Bring a poncho; umbrellas not allowed inside stadium"
    }
  },
  experience: {
    attractions: [
      "Boston Freedom Trail",
      "Fenway Park tours",
      "Newport Mansions (Rhode Island)",
      "Cape Cod beaches"
    ],
    footballHistory: [
      "Gillette Stadium hosts New England Revolution MLS matches",
      "Historic soccer interest from Portuguese and Cape Verdean communities"
    ],
    dayTrips: [
      "Boston (45 minutes)",
      "Providence, RI (40 minutes)",
      "Plymouth Rock (50 minutes)"
    ],
    familyActivities: [
      "New England Aquarium",
      "Boston Children's Museum",
      "Zoo New England"
    ],
    festivals: [
      "Boston Harborfest (July)",
      "Summer Arts Weekend",
      "Cambridge Carnival"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "Italian sausage subs",
      "Lobster mac & cheese",
      "New England clam chowder",
      "Samuel Adams beer stands"
    ],
    budgetOptions: [
      "Five Guys (Patriot Place)",
      "Subway and Dunkin'",
      "Local food trucks on match days"
    ],
    localSpecialties: [
      "Lobster rolls",
      "Steamers",
      "Fluffernutter sandwich"
    ],
    supporterBars: [
      "The Fours (Quincy Market)",
      "Banners Kitchen & Tap",
      "Cask’n Flagon"
    ],
    dietaryInfo: [
      "Vegetarian and gluten-free items marked",
      "Vegan vendors available near Sections 104 & 139"
    ],
    waterSafety: "Tap water is safe and refill stations are available in the stadium"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "MBTA Transit App",
      "Uber/Lyft",
      "OpenTable (dining)",
      "Google Translate"
    ],
    connectivity: {
      wifi: ["Free stadium Wi-Fi in most sections"],
      simCards: ["Available at Logan Airport and Walmart"],
      cafes: ["Starbucks, Dunkin’ with Wi-Fi near Patriot Place"],
      powerOutlets: "Standard U.S. A/B plugs (110V)",
      chargingStations: "In Club Level, lounges, and near Team Store"
    }
  }
};
