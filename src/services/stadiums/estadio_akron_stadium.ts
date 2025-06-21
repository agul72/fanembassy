import { iStadium } from "./iStadium";

export const estadioAkron: iStadium = {
  stadiumName: "Estadio Akron",
  city: "Zapopan",
  country: "Mexico",
  capacity: 49850,
  matches: [
    "Group Stage - June 11, 2026",
    "Group Stage - June 18, 2026 (Mexico's second game)",
    "Group Stage - June 23, 2026",
    "Group Stage - June 26, 2026"
  ],
  photo: "estadio_akron.jpg",
  link: "https://en.wikipedia.org/wiki/Estadio_Akron",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Miguel Hidalgo y Costilla International Airport (GDL)",
          link: "https://www.aeropuertosgap.com.mx/en/guadalajara.html",
          transferOptions: [
            "Taxi or ride-share (approx. 30–45 minutes)",
            "Bus via Mi Transporte Eléctrico from Juan Palomar y Arias to Calzada de las Palmas (approx. 26 minutes)"
          ],
          travelTime: "30–45 minutes"
        }
      ],
      publicTransit: {
        description: "Mi Transporte Eléctrico buses from various city points to Calzada de las Palmas; nearest stop is Estadio Akron, a 7-minute walk away.",
        lines: ["A12", "T02"],
        passes: ["Tarjeta Mi Movilidad"]
      },
      regionalTravelTips: [
        "Avoid peak hours to reduce crowding.",
        "Plan ahead for bus schedules on match days."
      ],
      rideShareInfo: "Designated pick-up and drop-off zones are available near the stadium entrances.",
      accessibilityOptions: [
        "ADA-compliant entrances and seating",
        "Accessible parking spaces",
        "Wheelchair assistance available upon request"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags only, maximum size 12\" x 6\" x 12\".",
      prohibitedItems: [
        "Weapons",
        "Outside food and beverages",
        "Large umbrellas",
        "Professional cameras with detachable lenses"
      ],
      entryProcedures: "Security screening required; arrive at least 90 minutes before kickoff.",
      digitalTickets: "Mobile tickets via FIFA+ app; screenshots not accepted.",
      facilitiesMap: "Available through the official stadium app and QR codes on-site.",
      exitStrategies: "Expect delays; utilize public transit or ride-share zones for efficient departure."
    }
  },
  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911"
    },
    helpServices: [
      "On-site first aid stations",
      "FIFA multilingual help desks",
      "Event volunteers throughout the venue"
    ],
    nearbyHospitals: [
      {
        name: "Hospital Real San José Valle Real",
        location: "Av. Santa Margarita 3600, Valle Real, 45019 Zapopan, Jalisco"
      },
      {
        name: "Hospital Puerta de Hierro",
        location: "Blvd. Puerta de Hierro 5150, Zapopan, Jalisco"
      }
    ],
    medicalPhrases: [
      "Necesito asistencia médica.",
      "¿Dónde está el hospital más cercano?",
      "Tengo una emergencia médica."
    ],
    passportHelp: "Contact your country's consulate or use FIFA's on-site assistance for lost ID procedures.",
    weatherEmergencies: "In case of severe weather, follow stadium announcements and proceed to designated shelter areas."
  },
  consular: {
    embassies: [
      {
        country: "United States",
        contact: "https://mx.usembassy.gov/"
      },
      {
        country: "Canada",
        contact: "https://www.international.gc.ca/country-pays/mexico-mexique/mexico-city.aspx?lang=eng"
      },
      {
        country: "United Kingdom",
        contact: "https://www.gov.uk/world/organisations/british-embassy-mexico-city"
      }
    ],
    visaInfo: "Most visitors require a tourist visa; verify requirements based on your nationality.",
    legalSupport: "Legal assistance available through consulates or local legal aid organizations."
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Plaza de la Liberación Fan Fest", "Parque Metropolitano Fan Zone"],
      teamMeetups: ["Local pubs and sports bars in Guadalajara and Zapopan"],
      supporterGroups: ["National team supporter clubs and local fan organizations"],
      eventsCalendar: ["Check FIFA+ app and local event listings for fan activities"],
      rideShareBoards: ["Community forums and social media groups for ride-sharing options"]
    },
    accommodation: {
      transitAreas: ["Guadalajara city center", "Zapopan"],
      budgetZones: ["Tlaquepaque", "Tonala"],
      familyAreas: ["Chapalita", "Providencia"],
      stadiumAdjacent: ["Hotels within walking distance of Estadio Akron"],
      alternativeOptions: ["Airbnb, hostels, and vacation rentals in the Guadalajara area"],
      accessibleOptions: ["Hotels offering ADA-compliant rooms and facilities"]
    },
    culture: {
      customs: ["Tipping is customary; 10–15% in restaurants"],
      languageBasics: ["Spanish is the primary language; basic English is understood in tourist areas"],
      foodSpecialties: ["Birria", "Torta Ahogada", "Tequila"],
      tipping: "10–15% in restaurants, $1–2 per drink at bars",
      taxInfo: "Value-added tax (IVA) is 16%; usually included in listed prices",
      currencyTips: "MXN is the local currency; credit cards widely accepted",
      timezone: "Central Standard Time (GMT-6)"
    },
    climate: {
      forecastLink: "https://www.weather.com/weather/today/l/MXJA0004:1:MX",
      stadiumClimate: "Open-air stadium; weather conditions apply",
      sunProtection: "High UV index; sunscreen and hats recommended",
      packingChecklist: ["Lightweight clothing", "Comfortable shoes", "Reusable water bottle"],
      clothingTips: "Casual attire suitable for warm weather; layers for evening events",
      rainPlan: "Stadium events proceed rain or shine; bring a light rain jacket if forecasted"
    }
  },
  experience: {
    attractions: [
      "Teatro Degollado",
      "Hospicio Cabañas",
      "Guadalajara Cathedral",
      "Tlaquepaque Arts and Crafts"
    ],
    footballHistory: [
      "Home to C.D. Guadalajara (Chivas)",
      "Hosted 2011 Pan American Games opening and closing ceremonies"
    ],
    dayTrips: [
      "Tequila, Jalisco",
      "Lake Chapala",
      "Guachimontones Archaeological Site"
    ],
    familyActivities: [
      "Zoológico Guadalajara",
      "Selva Mágica Amusement Park",
      "Acuario Michin Guadalajara"
    ],
    festivals: [
      "Guadalajara International Film Festival",
      "Mariachi and Charrería International Festival",
      "Guadalajara International Book Fair"
    ]
  },
  foodGuide: {
    stadiumFood: ["Tacos", "Tortas Ahogadas", "Nachos", "Soft drinks"],
    budgetOptions: ["Street food vendors near the stadium", "Local taquerías and fondas"],
    localSpecialties: ["Birria", "Torta Ahogada", "Tequila"],
    supporterBars: ["Sports bars in Guadalajara and Zapopan"],
    dietaryInfo: ["Vegetarian and gluten-free options available at select vendors"],
    waterSafety: "Tap water is not recommended; bottled water available throughout the venue"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "Mi Movilidad App",
      "Citymapper Guadalajara",
      "Google Translate",
      "Uber / DiDi",
      "Eventbrite"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi available in stadium concourses and common areas"],
      simCards: ["Available at major retailers and mobile stores in Guadalajara"],
      cafes: ["Coffee shops with free Wi-Fi in Guadalajara and surrounding areas"],
      powerOutlets: "Type A/B plugs, 127V",
      chargingStations: "Located throughout the stadium and fan zones"
    }
  }
};
