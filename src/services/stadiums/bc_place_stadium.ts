import { iStadium } from "./iStadium";

export const bcPlace: iStadium = {
  stadiumName: "BC Place",
  city: "Vancouver",
  country: "Canada",
  capacity: 54000,
  matches: [
    "Group Stage - June 15, 2026",
    "Group Stage - June 22, 2026",
    "Round of 16 - July 2, 2026"
  ],
  photo: "bc_place.jpg",
  link: "https://bcplace.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Vancouver International Airport (YVR)",
          link: "https://www.yvr.ca/",
          transferOptions: [
            "Canada Line SkyTrain from airport to Stadium–Chinatown Station (approx. 25 minutes)",
            "Taxi or rideshare (approx. 30 minutes)"
          ],
          travelTime: "25–30 minutes"
        }
      ],
      publicTransit: {
        description: "TransLink SkyTrain and bus services connect BC Place with greater Vancouver",
        lines: ["Canada Line", "Expo Line", "Bus routes 19, 22, 240"],
        passes: ["Compass Card (reloadable transit card)", "Day passes available"]
      },
      regionalTravelTips: [
        "Stay in downtown Vancouver for easy access to stadium and attractions",
        "Consider transit passes for multiple-day use"
      ],
      rideShareInfo: "Designated rideshare pickup/drop-off zones near stadium’s main entrance",
      accessibilityOptions: [
        "Accessible seating and parking available",
        "Wheelchair assistance on request",
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
      entryProcedures: "Arrive early; security screening and ticket scanning required",
      digitalTickets: "Accepted via mobile or print-at-home",
      facilitiesMap: "Available on official BC Place website and match day programs",
      exitStrategies: "Expect some congestion post-match; use public transit or rideshares"
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "Stadium Guest Services at all main entrances",
      "First Aid stations located throughout venue",
      "Multilingual support available"
    ],
    nearbyHospitals: [
      {
        name: "Vancouver General Hospital",
        location: "899 W 12th Ave, Vancouver, BC V5Z 1M9"
      },
      {
        name: "St. Paul's Hospital",
        location: "1081 Burrard St, Vancouver, BC V6Z 1Y6"
      }
    ],
    medicalPhrases: [
      "I need a doctor.",
      "Where is the medical station?",
      "Help, please."
    ],
    passportHelp: "Contact FIFA support booths or nearest consulate",
    weatherEmergencies: "Rain is common; bring waterproof gear and umbrellas"
  },
  consular: {
    embassies: [
      {
        country: "USA",
        contact: "https://ca.usembassy.gov/embassy-consulates/vancouver/"
      },
      {
        country: "Mexico",
        contact: "https://consulmex.sre.gob.mx/vancouver/index.php/en/"
      }
    ],
    visaInfo: "Check official Canadian government websites for visa requirements",
    legalSupport: "Support available at FIFA booths and consulates"
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Granville Street", "Robson Square"],
      teamMeetups: ["Local bars near stadium and downtown"],
      supporterGroups: ["Vancouver Southsiders", "Curva Collective"],
      eventsCalendar: ["Visit Vancouver website", "FIFA Fan App"],
      rideShareBoards: ["Facebook groups and Reddit"]
    },
    accommodation: {
      transitAreas: ["Downtown Vancouver", "Yaletown"],
      budgetZones: ["Burnaby", "Richmond"],
      familyAreas: ["Kitsilano", "Mount Pleasant"],
      stadiumAdjacent: ["False Creek", "Gastown"],
      alternativeOptions: ["Airbnb and hostels in downtown"],
      accessibleOptions: ["Fairmont Pacific Rim Hotel, Pan Pacific Vancouver"]
    },
    culture: {
      customs: ["Polite and friendly; tipping 15-20% customary"],
      languageBasics: ["‘Hello’, ‘Thank you’, ‘Excuse me’"],
      foodSpecialties: ["Pacific Northwest seafood", "Asian fusion cuisine"],
      tipping: "15-20% in restaurants and taxis",
      taxInfo: "Sales tax approx. 12%",
      currencyTips: "Canadian Dollar (CAD); cards and cash widely accepted",
      timezone: "Pacific Daylight Time (UTC−7)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Vancouver+BC",
      stadiumClimate: "Domed stadium, climate controlled",
      sunProtection: "Minimal sun exposure; rain gear recommended",
      packingChecklist: ["Light jacket", "Umbrella", "Comfortable shoes"],
      clothingTips: "Layered clothing suggested for variable weather",
      rainPlan: "Rain ponchos allowed; umbrellas outside"
    }
  },
  experience: {
    attractions: [
      "Stanley Park",
      "Capilano Suspension Bridge",
      "Vancouver Aquarium",
      "Gastown historic district"
    ],
    footballHistory: [
      "Home to Vancouver Whitecaps FC of MLS",
      "Host for international sporting events and concerts"
    ],
    dayTrips: [
      "Whistler",
      "Victoria via ferry",
      "Sea-to-Sky Highway scenic drives"
    ],
    familyActivities: [
      "Science World",
      "Vancouver Zoo",
      "Playland amusement park"
    ],
    festivals: [
      "Vancouver International Film Festival",
      "Celebration of Light fireworks",
      "Pride Vancouver"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "Local seafood dishes",
      "Gourmet burgers",
      "Craft beers"
    ],
    budgetOptions: [
      "Food trucks downtown",
      "Casual cafes and pubs",
      "Ethnic food markets"
    ],
    localSpecialties: [
      "Pacific salmon",
      "Sushi",
      "Asian-fusion"
    ],
    supporterBars: [
      "The Cambie",
      "St. Augustine's",
      "Bimini Public House"
    ],
    dietaryInfo: [
      "Vegetarian and gluten-free options available",
      "Allergen information clearly posted"
    ],
    waterSafety: "Tap water is safe to drink; refill stations available"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "TransLink",
      "Uber, Lyft",
      "Google Maps",
      "Yelp"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi at stadium and nearby areas"],
      simCards: ["Available at airport and retail stores"],
      cafes: ["Blenz Coffee, JJ Bean"],
      powerOutlets: "Type A/B plugs",
      chargingStations: "Located in main concourse and fan zones"
    }
  }
};
