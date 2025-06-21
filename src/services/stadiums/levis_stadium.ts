import { iStadium } from "./iStadium";

export const levisStadium: iStadium = {
  stadiumName: "Levi's Stadium",
  city: "Santa Clara",
  country: "USA",
  capacity: 68500,
  matches: [
    "Group Stage - June 15, 2026",
    "Group Stage - June 23, 2026"
  ],
  photo: "levis_stadium.jpg",
  link: "https://www.levisstadium.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "San Jose Mineta International Airport (SJC)",
          link: "https://www.flysanjose.com/",
          transferOptions: [
            "VTA Light Rail to Great America Station",
            "Taxi or rideshare (approx. 10–15 minutes)"
          ],
          travelTime: "10–15 minutes"
        },
        {
          name: "San Francisco International Airport (SFO)",
          link: "https://www.flysfo.com/",
          transferOptions: [
            "Caltrain to Mountain View, then VTA Light Rail to Great America",
            "Taxi or rideshare (approx. 40–60 minutes)"
          ],
          travelTime: "40–60 minutes"
        }
      ],
      publicTransit: {
        description: "VTA Light Rail and ACE/Capitol Corridor trains serve Great America Station near stadium.",
        lines: ["VTA Orange Line", "ACE Train", "Capitol Corridor Amtrak"],
        passes: ["Clipper card", "Single-ride tickets"]
      },
      regionalTravelTips: [
        "Clipper card works across BART, VTA, Caltrain, and ferries.",
        "Event-day transit often includes direct shuttles and extended service."
      ],
      rideShareInfo: "Dedicated pickup/drop-off zones available along Tasman Drive.",
      accessibilityOptions: [
        "ADA-compliant entrances and elevators",
        "Wheelchair-accessible seating",
        "Assistance from Mobility Services team"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags only (12\" x 6\" x 12\" max); small clutch bags allowed.",
      prohibitedItems: [
        "Outside food/drink (except 1 sealed water bottle)",
        "Selfie sticks",
        "Air horns or noisemakers",
        "Laser pointers"
      ],
      entryProcedures: "Metal detectors and bag screening; mobile ticket scan required.",
      digitalTickets: "Use FIFA+ app or Apple/Google Wallet; screenshots may not be accepted.",
      facilitiesMap: "Downloadable via Levi's Stadium app or posted on digital kiosks.",
      exitStrategies: "Walk to Light Rail or rideshare points; plan for post-game congestion."
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "First aid stations near Sections 105, 129, 301",
      "Multilingual FIFA staff",
      "Santa Clara Police & security teams onsite"
    ],
    nearbyHospitals: [
      {
        name: "Kaiser Permanente Santa Clara",
        location: "700 Lawrence Expy, Santa Clara, CA 95051"
      },
      {
        name: "Santa Clara Valley Medical Center",
        location: "751 S Bascom Ave, San Jose, CA 95128"
      }
    ],
    medicalPhrases: [
      "I need medical help.",
      "Call an ambulance.",
      "Where is the nearest hospital?"
    ],
    passportHelp: "Lost passport support via consulates or FIFA Fan Help Desk at the venue.",
    weatherEmergencies: "Heat alert shelters inside concourses; event-wide push notifications via app."
  },
  consular: {
    embassies: [
      {
        country: "Mexico",
        contact: "https://consulmex.sre.gob.mx/sanjose/"
      },
      {
        country: "United Kingdom",
        contact: "https://www.gov.uk/world/organisations/british-consulate-general-san-francisco"
      },
      {
        country: "Canada",
        contact: "https://www.international.gc.ca/"
      }
    ],
    visaInfo: "Electronic ESTA required for many international travelers; check visa status in advance.",
    legalSupport: "FIFA legal info point at stadium; consulates may provide emergency assistance."
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Santa Clara University fan village", "San Pedro Square Market in San Jose"],
      teamMeetups: ["Local pubs in Sunnyvale and San Jose", "San Jose’s Japantown"],
      supporterGroups: ["Quakes supporter clubs (Ultras, Seismic Union)", "National fan groups"],
      eventsCalendar: ["Check Visit Santa Clara and FIFA fan portal"],
      rideShareBoards: ["Telegram, Reddit, and WhatsApp matchday groups"]
    },
    accommodation: {
      transitAreas: ["Downtown San Jose", "Sunnyvale", "Santa Clara"],
      budgetZones: ["Milpitas", "Mountain View"],
      familyAreas: ["Campbell", "Cupertino"],
      stadiumAdjacent: ["Hotels along Great America Pkwy"],
      alternativeOptions: ["Airbnb, extended-stay suites, Silicon Valley motels"],
      accessibleOptions: ["Hotels with ADA listings and transit access"]
    },
    culture: {
      customs: ["Friendly and casual culture; tipping 15–20% expected"],
      languageBasics: ["English; Spanish widely spoken"],
      foodSpecialties: ["California burritos", "Korean BBQ", "Pho and banh mi"],
      tipping: "15–20% for services including rideshares and food",
      taxInfo: "Sales tax 8.875% in Santa Clara County",
      currencyTips: "USD; credit cards widely accepted",
      timezone: "Pacific Daylight Time (UTC−7)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Santa+Clara+CA",
      stadiumClimate: "Open-air stadium with minimal shade; summer sun exposure",
      sunProtection: "Sunscreen, hat, sunglasses highly recommended",
      packingChecklist: ["Light layers", "Refillable water bottle", "Sunscreen"],
      clothingTips: "Cool and dry; bring layers for evening matches",
      rainPlan: "Low rain probability in summer; stadium uncovered"
    }
  },
  experience: {
    attractions: [
      "California's Great America theme park",
      "Winchester Mystery House",
      "Computer History Museum",
      "Downtown San Jose tech hubs"
    ],
    footballHistory: [
      "Home to San Francisco 49ers (NFL)",
      "Occasional U.S. national team and international friendlies"
    ],
    dayTrips: [
      "Santa Cruz Beach",
      "San Francisco (1 hour)",
      "Napa Valley (2 hours)"
    ],
    familyActivities: [
      "Children’s Discovery Museum",
      "Tech Interactive",
      "Happy Hollow Park & Zoo"
    ],
    festivals: [
      "Silicon Valley BBQ Championships",
      "San Jose Jazz Festival",
      "Obon Festival (Japantown)"
    ]
  },
  foodGuide: {
    stadiumFood: ["Garlic fries", "BBQ brisket", "Vegan wraps", "Craft beers"],
    budgetOptions: ["El Camino Real taco trucks", "In-N-Out Burger", "Korean rice bowls"],
    localSpecialties: ["Fusion burritos", "Sushi burritos", "California rolls"],
    supporterBars: ["Rookies Sports Lodge", "Britannia Arms", "The Farmers Union"],
    dietaryInfo: ["Vegan, halal, and gluten-free labeled stands available"],
    waterSafety: "Tap water safe to drink; bottle refill stations inside stadium"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "VTA Light Rail app",
      "Google Translate",
      "Yelp for restaurants",
      "Uber/Lyft"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi throughout Levi's Stadium"],
      simCards: ["Available at SJC Airport, Target, and Best Buy"],
      cafes: ["Starbucks and Philz Coffee nearby with public Wi-Fi"],
      powerOutlets: "Type A/B outlets (110V)",
      chargingStations: "Located in club areas and along main concourses"
    }
  }
};
