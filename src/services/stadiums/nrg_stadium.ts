import { iStadium } from "./iStadium";

export const nrgStadium: iStadium = {
  stadiumName: "NRG Stadium",
  city: "Houston",
  country: "USA",
  capacity: 72220,
  matches: [
    "Group Stage - June 14, 2026",
    "Group Stage - June 24, 2026",
    "Round of 16 - June 30, 2026"
  ],
  photo: "nrg_stadium.jpg",
  link: "https://www.nrgpark.com/nrg-stadium/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "George Bush Intercontinental Airport (IAH)",
          link: "https://www.fly2houston.com/iah",
          transferOptions: [
            "Uber or Lyft (45 minutes)",
            "Metro Bus 102 to Downtown + Red Line to Stadium Park/Astrodome"
          ],
          travelTime: "45–60 minutes"
        },
        {
          name: "William P. Hobby Airport (HOU)",
          link: "https://www.fly2houston.com/hou",
          transferOptions: [
            "Uber or Lyft (20 minutes)",
            "Bus 88 to Red Line light rail"
          ],
          travelTime: "25–35 minutes"
        }
      ],
      publicTransit: {
        description: "METRORail Red Line stops at Stadium Park/Astrodome Station",
        lines: ["Red Line"],
        passes: ["METRO Q Card", "Single Ride Ticket ($1.25)"]
      },
      regionalTravelTips: [
        "Light rail from Downtown Houston is fast and direct",
        "Stay near Museum District or Midtown for easy access"
      ],
      rideShareInfo: "Dedicated pickup/drop-off in Yellow Lot",
      accessibilityOptions: [
        "ADA parking in all lots",
        "Wheelchair-accessible entries and elevators",
        "Accessible seating throughout"
      ]
    },
    matchDay: {
      bagPolicy: "NFL clear bag policy — 12\" x 6\" x 12\" clear bags only",
      prohibitedItems: [
        "Large bags/backpacks",
        "Weapons",
        "Cameras with detachable lenses",
        "Noisemakers"
      ],
      entryProcedures: "Arrive 90 minutes early; mobile ticketing only",
      digitalTickets: "Available via FIFA+ and NRG Stadium apps",
      facilitiesMap: "QR codes posted at entry; maps available at Guest Services",
      exitStrategies: "Avoid surge via METRORail or walk to nearby ride share zones"
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "Medical staff and EMTs at all corners of the stadium",
      "Guest Services personnel assist in multiple languages",
      "Houston Police present throughout venue"
    ],
    nearbyHospitals: [
      {
        name: "Houston Methodist Hospital",
        location: "6565 Fannin St, Houston, TX 77030"
      },
      {
        name: "Memorial Hermann Hospital",
        location: "6411 Fannin St, Houston, TX 77030"
      }
    ],
    medicalPhrases: [
      "Help me, please.",
      "I need a doctor.",
      "I'm allergic to..."
    ],
    passportHelp: "FIFA help desks and local consulates available for lost/stolen IDs",
    weatherEmergencies: "High heat/humidity possible — drink water and follow heat alert guidance"
  },
  consular: {
    embassies: [
      {
        country: "Mexico",
        contact: "https://consulmex.sre.gob.mx/houston/"
      },
      {
        country: "France",
        contact: "https://houston.consulfrance.org/"
      },
      {
        country: "Japan",
        contact: "https://www.houston.us.emb-japan.go.jp/itprtop_en/index.html"
      }
    ],
    visaInfo: "ESTA or visitor visa required depending on nationality. Visit travel.state.gov",
    legalSupport: "Emergency legal support via FIFA help centers and embassy coordination"
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Discovery Green", "Eleanor Tinsley Park"],
      teamMeetups: ["EaDo bars", "Downtown Houston", "Midtown beer gardens"],
      supporterGroups: ["Texian Army", "El Batallón", "FIFA international team groups via social media"],
      eventsCalendar: ["VisitHouston.com", "FIFA Fan App"],
      rideShareBoards: ["Telegram, Reddit (r/worldcup), Discord FIFA groups"]
    },
    accommodation: {
      transitAreas: ["Downtown Houston", "Midtown", "Medical Center"],
      budgetZones: ["Galleria area", "Hobby Airport hotels"],
      familyAreas: ["Museum District", "West University"],
      stadiumAdjacent: ["NRG Park hotels and motels"],
      alternativeOptions: ["Airbnb and Vrbo in Midtown, Heights, Montrose"],
      accessibleOptions: ["Hilton Houston Plaza, Marriott Medical Center"]
    },
    culture: {
      customs: ["Houston is diverse and welcoming; English and Spanish widely spoken"],
      languageBasics: ["‘Hola’, ‘Gracias’, ‘Where is the metro?’"],
      foodSpecialties: ["Tex-Mex", "BBQ brisket", "Vietnamese pho"],
      tipping: "15–20% standard",
      taxInfo: "8.25% sales tax",
      currencyTips: "Cashless preferred; Apple Pay & credit cards accepted almost everywhere",
      timezone: "Central Daylight Time (UTC−5)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Houston+TX",
      stadiumClimate: "Climate-controlled retractable-roof stadium",
      sunProtection: "Hat, sunglasses, SPF 30+",
      packingChecklist: ["Refillable bottle", "Cooling towel", "Light clothing"],
      clothingTips: "Stay cool; match days may be humid",
      rainPlan: "Covered stadium — rain unlikely to impact match"
    }
  },
  experience: {
    attractions: [
      "Houston Museum of Natural Science",
      "NASA Space Center Houston",
      "Buffalo Bayou Park",
      "Houston Zoo"
    ],
    footballHistory: [
      "Home to Houston Texans (NFL) and occasional U.S. National Team matches",
      "Hosted Copa América Centenario games in 2016"
    ],
    dayTrips: [
      "Galveston Island beaches (1 hour)",
      "NASA Space Center (30–40 minutes)",
      "Kemah Boardwalk"
    ],
    familyActivities: [
      "Children’s Museum Houston",
      "Downtown Aquarium",
      "Discovery Green splash zones"
    ],
    festivals: [
      "Juneteenth Celebrations",
      "Houston Food Fest",
      "Freedom Over Texas (July 4th)"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "BBQ sandwiches",
      "Frito pie",
      "Tex-Mex nachos",
      "Craft beer options"
    ],
    budgetOptions: [
      "Whataburger",
      "Taco trucks around NRG",
      "Pho Saigon in Midtown"
    ],
    localSpecialties: [
      "Chopped brisket",
      "Chicken-fried steak",
      "Breakfast tacos"
    ],
    supporterBars: [
      "Pitch 25 Beer Park",
      "Little Woodrow's",
      "Neil’s Bahr (for younger crowds)"
    ],
    dietaryInfo: [
      "Gluten-free and vegetarian items available at Sections 135 and 312",
      "Allergy warnings posted at food vendors"
    ],
    waterSafety: "Tap water is safe to drink; free water refill stations around concourses"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "METRO Houston",
      "Uber/Lyft",
      "Visit Houston App",
      "Google Maps"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi inside NRG Stadium"],
      simCards: ["Available at Target, Walmart, Best Buy"],
      cafes: ["Common Bond, Starbucks near Stadium Blvd"],
      powerOutlets: "U.S. A/B plug type",
      chargingStations: "Found in lounges, club seats, and main concourses"
    }
  }
};
