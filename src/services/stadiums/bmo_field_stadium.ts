import { iStadium } from "./iStadium";

export const bmoField: iStadium = {
  stadiumName: "BMO Field",
  city: "Toronto",
  country: "Canada",
  capacity: 30000,
  matches: [
    "Group Stage - June 12, 2026",
    "Group Stage - June 17, 2026",
    "Group Stage - June 22, 2026"
  ],
  photo: "bmo_field.jpg",
  link: "https://en.wikipedia.org/wiki/BMO_Field",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Toronto Pearson International Airport (YYZ)",
          link: "https://www.torontopearson.com/",
          transferOptions: [
            "Union Pearson Express to downtown Union Station, then streetcar to Exhibition Place",
            "Taxi or ride-share (approx. 30–45 minutes)"
          ],
          travelTime: "30–45 minutes"
        },
        {
          name: "Billy Bishop Toronto City Airport (YTZ)",
          link: "https://www.portstoronto.com/",
          transferOptions: [
            "Short walk and ferry/shuttle to downtown, then TTC streetcar",
            "Taxi or ride-share (approx. 15–20 minutes)"
          ],
          travelTime: "15–20 minutes"
        }
      ],
      publicTransit: {
        description: "TTC 509/511 streetcars stop directly at Exhibition Loop near the stadium.",
        lines: ["TTC 509 Harbourfront", "TTC 511 Bathurst"],
        passes: ["PRESTO card", "Day pass"]
      },
      regionalTravelTips: [
        "PRESTO card usable on TTC, GO Transit, and UP Express.",
        "Trains and streetcars run frequently on match days."
      ],
      rideShareInfo: "Drop-off/pick-up areas available near Princes' Blvd entrance.",
      accessibilityOptions: [
        "Elevator access and ramps at main gates",
        "Accessible seating available throughout",
        "Assistance services via Guest Experience team"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags no larger than 12\" x 6\" x 12\"; small clutches allowed.",
      prohibitedItems: [
        "Outside food or beverages",
        "Umbrellas",
        "Laser pointers",
        "Noisemakers"
      ],
      entryProcedures: "Security and ticket scan; arrive at least 60 minutes early.",
      digitalTickets: "FIFA+ app or authorized mobile ticketing; screenshots not valid.",
      facilitiesMap: "Available via venue app and stadium kiosks.",
      exitStrategies: "Follow signage to TTC/GO Transit; avoid post-match congestion by waiting 15–20 minutes if possible."
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "First aid stations inside gates 1 and 5",
      "FIFA multilingual staff",
      "Toronto Police event support on site"
    ],
    nearbyHospitals: [
      {
        name: "Toronto General Hospital",
        location: "200 Elizabeth St, Toronto, ON M5G 2C4"
      },
      {
        name: "St. Joseph's Health Centre",
        location: "30 The Queensway, Toronto, ON M6R 1B5"
      }
    ],
    medicalPhrases: [
      "I need help.",
      "Where is the hospital?",
      "It's an emergency."
    ],
    passportHelp: "Contact your country's consulate or FIFA's support center at the venue.",
    weatherEmergencies: "Seek shelter in designated indoor concourses; alerts provided via app and PA system."
  },
  consular: {
    embassies: [
      {
        country: "United States",
        contact: "https://ca.usembassy.gov/"
      },
      {
        country: "Mexico",
        contact: "https://embamex.sre.gob.mx/canada/"
      },
      {
        country: "United Kingdom",
        contact: "https://www.gov.uk/world/organisations/british-consulate-general-toronto"
      }
    ],
    visaInfo: "Check eTA requirements or visa eligibility based on nationality.",
    legalSupport: "Emergency legal aid available via consulates and the Legal Aid Ontario hotline."
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Toronto Fan Festival at Exhibition Place", "Nathan Phillips Square public viewing area"],
      teamMeetups: ["Liberty Village pubs", "King Street West bars"],
      supporterGroups: ["Voyageurs (Canada)", "Local MLS and national team groups"],
      eventsCalendar: ["Check City of Toronto event pages and FIFA fan schedule"],
      rideShareBoards: ["Reddit, WhatsApp groups, and local Discord channels"]
    },
    accommodation: {
      transitAreas: ["Downtown Toronto", "Liberty Village", "Parkdale"],
      budgetZones: ["Scarborough", "Etobicoke"],
      familyAreas: ["The Annex", "Harbourfront"],
      stadiumAdjacent: ["Exhibition Place hotels", "Fort York area"],
      alternativeOptions: ["Airbnb, VRBO, hostels"],
      accessibleOptions: ["Hotels with AODA compliance and accessibility ratings"]
    },
    culture: {
      customs: ["Respect multicultural diversity; tipping is standard (15–20%)"],
      languageBasics: ["English is widely spoken; some services available in French"],
      foodSpecialties: ["Poutine", "Peameal bacon sandwich", "Butter tarts"],
      tipping: "15–20% in restaurants and taxis",
      taxInfo: "13% HST applied to most goods/services",
      currencyTips: "Canadian Dollar (CAD); tap-to-pay widely accepted",
      timezone: "Eastern Daylight Time (UTC−4)"
    },
    climate: {
      forecastLink: "https://weather.gc.ca/city/pages/on-143_metric_e.html",
      stadiumClimate: "Open-air stadium by the waterfront",
      sunProtection: "Bring sunglasses, sunscreen, and a hat",
      packingChecklist: ["Light jacket", "Sunblock", "Rain poncho"],
      clothingTips: "Comfortable casual wear; check forecast for wind near lake",
      rainPlan: "Ponchos advised; umbrella use limited due to crowd density"
    }
  },
  experience: {
    attractions: [
      "CN Tower",
      "Royal Ontario Museum",
      "Toronto Islands",
      "Distillery Historic District"
    ],
    footballHistory: [
      "Home to Toronto FC (MLS)",
      "Host venue for Canada national team matches"
    ],
    dayTrips: [
      "Niagara Falls",
      "Stratford Festival",
      "Blue Mountain village"
    ],
    familyActivities: [
      "Ripley's Aquarium of Canada",
      "Toronto Zoo",
      "Ontario Science Centre"
    ],
    festivals: [
      "Toronto Jazz Festival",
      "Pride Toronto",
      "Harbourfront Centre Summer Events"
    ]
  },
  foodGuide: {
    stadiumFood: ["Hot dogs", "Poutine", "Burgers", "Beer and soda"],
    budgetOptions: ["Nearby food trucks", "Local bakeries and fast food on King St W"],
    localSpecialties: ["Peameal bacon sandwich", "Jamaican patties", "Dim sum in Chinatown"],
    supporterBars: ["The Football Factory", "BMO Field pubs", "Brazen Head Irish Pub"],
    dietaryInfo: ["Vegan, halal, and gluten-free options marked at stadium vendors"],
    waterSafety: "Tap water is safe to drink; refill stations available"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "Transit App (Toronto)",
      "Google Maps",
      "Uber",
      "City of Toronto Events App"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi in BMO Field and Exhibition Place grounds"],
      simCards: ["Available at Pearson Airport, convenience stores, and mobile shops"],
      cafes: ["Tim Hortons and Starbucks with free Wi-Fi nearby"],
      powerOutlets: "Type A/B (North American standard); 120V",
      chargingStations: "Located in concourses and media areas"
    }
  }
};
