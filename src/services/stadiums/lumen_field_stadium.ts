import { iStadium } from "./iStadium";

export const lumenField: iStadium = {
  stadiumName: "Lumen Field",
  city: "Seattle",
  country: "USA",
  capacity: 68000,
  matches: [
    "Group Stage - June 16, 2026",
    "Group Stage - June 22, 2026",
    "Round of 32 - July 2, 2026"
  ],
  photo: "lumen_field.jpg",
  link: "https://www.lumenfield.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Seattle-Tacoma International Airport (SEA)",
          link: "https://www.portseattle.org/sea-tac",
          transferOptions: [
            "Link light rail to International District/Chinatown Station",
            "Taxi, Uber, or Lyft (20–25 minutes)"
          ],
          travelTime: "30–40 minutes"
        }
      ],
      publicTransit: {
        description: "Sound Transit Link light rail offers direct access to downtown",
        lines: ["Link Light Rail", "King County Metro Buses"],
        passes: ["ORCA Card", "Mobile tickets via Transit GO app"]
      },
      regionalTravelTips: [
        "Stay in Downtown, Capitol Hill, or Pioneer Square for easy access",
        "Light rail is efficient and safe for matchday use"
      ],
      rideShareInfo: "Pickup/drop-off zone on Occidental Ave S",
      accessibilityOptions: [
        "Accessible seating throughout stadium",
        "Elevator access to all levels",
        "ADA drop-off/pick-up on Occidental Ave"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bag policy enforced (12\" x 6\" x 12\" max); small clutch allowed",
      prohibitedItems: [
        "Outside food and drink (except for medical needs)",
        "Umbrellas over 12 inches",
        "Noisemakers, selfie sticks, drones"
      ],
      entryProcedures: "Arrive 90–120 minutes before kickoff for security and scanning",
      digitalTickets: "Mobile-only; use FIFA+ or Lumen Field apps",
      facilitiesMap: "Available on stadium app and via Guest Services",
      exitStrategies: "Link light rail, walking to Pioneer Square, or designated rideshare zones"
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "Guest Services staff available at all main entry points",
      "Medical and EMTs stationed near each section",
      "Multilingual assistance available at Help Desks"
    ],
    nearbyHospitals: [
      {
        name: "Harborview Medical Center",
        location: "325 9th Ave, Seattle, WA 98104"
      },
      {
        name: "Swedish First Hill",
        location: "747 Broadway, Seattle, WA 98122"
      }
    ],
    medicalPhrases: [
      "I feel sick.",
      "I need help.",
      "Where is the medical station?"
    ],
    passportHelp: "Report to FIFA or stadium help desks — they’ll coordinate with consulates",
    weatherEmergencies: "Rain and chill possible — wear layers and waterproof gear"
  },
  consular: {
    embassies: [
      {
        country: "Canada",
        contact: "https://www.international.gc.ca/country-pays/united_states-etats_unis/seattle.aspx"
      },
      {
        country: "Japan",
        contact: "https://www.seattle.us.emb-japan.go.jp/itprtop_en/index.html"
      }
    ],
    visaInfo: "ESTA or visa required depending on origin. Details at travel.state.gov",
    legalSupport: "Call your embassy or visit consular booths at FIFA support points"
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Seattle Center", "Occidental Square", "Pike Place Plaza"],
      teamMeetups: ["Pioneer Square pubs", "Capitol Hill patios"],
      supporterGroups: ["Emerald City Supporters", "International fan groups via social media"],
      eventsCalendar: ["VisitSeattle.org", "FIFA Fan App"],
      rideShareBoards: ["Reddit (r/WorldCup), Discord groups, Telegram channels"]
    },
    accommodation: {
      transitAreas: ["Downtown", "Belltown", "South Lake Union"],
      budgetZones: ["University District", "Beacon Hill"],
      familyAreas: ["Queen Anne", "Ballard"],
      stadiumAdjacent: ["Pioneer Square, SoDo"],
      alternativeOptions: ["Airbnb near International District or Alki Beach"],
      accessibleOptions: ["Hotel Theodore, Hyatt Regency Seattle"]
    },
    culture: {
      customs: ["Seattle is casual and inclusive; tipping is standard practice"],
      languageBasics: ["‘Excuse me’, ‘How do I get to…?’, ‘Thank you’"],
      foodSpecialties: ["Fresh seafood", "Pho", "Coffee culture"],
      tipping: "15–20% at restaurants and bars",
      taxInfo: "10.1% local sales tax",
      currencyTips: "Cashless-friendly city; Apple Pay and credit cards widely accepted",
      timezone: "Pacific Daylight Time (UTC−7)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Seattle+WA",
      stadiumClimate: "Open-air stadium; wind and rain possible",
      sunProtection: "Occasional sun — bring hat and sunglasses just in case",
      packingChecklist: ["Rain jacket", "Stadium-compliant bag", "Comfortable shoes"],
      clothingTips: "Bring layers; cool mornings and evenings",
      rainPlan: "Ponchos preferred; umbrellas not allowed inside"
    }
  },
  experience: {
    attractions: [
      "Pike Place Market",
      "Seattle Aquarium",
      "Museum of Pop Culture (MoPOP)",
      "Space Needle"
    ],
    footballHistory: [
      "Home of Seattle Sounders FC (MLS) and OL Reign (NWSL)",
      "Known for passionate fan culture and tifo displays"
    ],
    dayTrips: [
      "Mount Rainier National Park",
      "Bainbridge Island (via ferry)",
      "Leavenworth alpine village"
    ],
    familyActivities: [
      "Seattle Children's Museum",
      "Pacific Science Center",
      "Seattle Great Wheel"
    ],
    festivals: [
      "Seattle International Film Festival",
      "Fremont Solstice Parade",
      "Seattle Pride"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "Ivar’s Fish & Chips",
      "Craft pizza",
      "Starbucks and local brews"
    ],
    budgetOptions: [
      "Taco trucks in SoDo",
      "Uwajimaya food court",
      "Dick’s Drive-In"
    ],
    localSpecialties: [
      "Salmon",
      "Pike Place chowder",
      "Teriyaki bowls"
    ],
    supporterBars: [
      "The Ninety",
      "Elysian Fields",
      "The Lodge Sports Grille"
    ],
    dietaryInfo: [
      "Vegetarian/vegan options marked at each vendor",
      "Allergen info posted clearly"
    ],
    waterSafety: "Seattle tap water is clean and safe; refill stations at concourses"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "Transit GO Ticket",
      "Uber, Lyft",
      "WSDOT Ferry App",
      "Google Maps"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi at Lumen Field"],
      simCards: ["Available at nearby Target, Walgreens, or Best Buy"],
      cafes: ["Elm Coffee Roasters, Zeitgeist Coffee near stadium"],
      powerOutlets: "Type A/B plugs",
      chargingStations: "Near Section 100 and 300 levels, team stores, club lounges"
    }
  }
};
