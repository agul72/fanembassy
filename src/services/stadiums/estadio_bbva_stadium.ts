import { iStadium } from "./iStadium";

export const estadioBbva: iStadium = {
  stadiumName: "Estadio BBVA",
  city: "Guadalupe",
  country: "Mexico",
  capacity: 53500,
  matches: [
    "Group Stage - June 14, 2026",
    "Group Stage - June 20, 2026",
    "Group Stage - June 24, 2026",
    "Round of 32 - June 29, 2026"
  ],
  photo: "estadio_bbva.jpg",
  link: "https://en.wikipedia.org/wiki/Estadio_BBVA",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Monterrey International Airport (MTY)",
          link: "https://aeropuertomonterrey.oma.aero/en",
          transferOptions: [
            "Taxi or ride-share (approx. 21–25 minutes, $140–$170 MXN)",
            "Bus via Noreste from Monterrey Bus Station to the airport (approx. 1h 25m, $50–$140 MXN)"
          ],
          travelTime: "Approximately 21–25 minutes by taxi"
        }
      ],
      publicTransit: {
        description: "Metrorrey Line 1 to Estación Lerdo de Tejada, then a 9-minute walk to the stadium.",
        lines: ["Metrorrey Line 1 (L01)"],
        passes: ["Tarjeta Feria"]
      },
      regionalTravelTips: [
        "Utilize Metrorrey services to avoid traffic congestion.",
        "Plan ahead for bus schedules on match days."
      ],
      rideShareInfo: "Designated ride-share zones available near the stadium's entrances.",
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
        name: "Hospital Universitario Dr. José Eleuterio González",
        location: "Av. Francisco I. Madero 3500, Mitras Centro, 64460 Monterrey, N.L."
      },
      {
        name: "Hospital San José Tec de Monterrey",
        location: "Av. Batallón de San Patricio 112, Real de San Agustín, 66278 San Pedro Garza García, N.L."
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
      fanZones: ["Macroplaza Fan Fest", "Parque Fundidora Fan Zone"],
      teamMeetups: ["Local pubs and sports bars in Monterrey and Guadalupe"],
      supporterGroups: ["National team supporter clubs and local fan organizations"],
      eventsCalendar: ["Check FIFA+ app and local event listings for fan activities"],
      rideShareBoards: ["Community forums and social media groups for ride-sharing options"]
    },
    accommodation: {
      transitAreas: ["Monterrey city center", "San Pedro Garza García"],
      budgetZones: ["Guadalupe", "Apodaca"],
      familyAreas: ["San Nicolás de los Garza", "Cumbres"],
      stadiumAdjacent: ["Hotels within walking distance of Estadio BBVA"],
      alternativeOptions: ["Airbnb, hostels, and vacation rentals in the Monterrey area"],
      accessibleOptions: ["Hotels offering ADA-compliant rooms and facilities"]
    },
    culture: {
      customs: ["Tipping is customary; 10–15% in restaurants"],
      languageBasics: ["Spanish is the primary language; basic English is understood in tourist areas"],
      foodSpecialties: ["Cabrito (roast goat)", "Machaca", "Carne asada"],
      tipping: "10–15% in restaurants, $1–2 per drink at bars",
      taxInfo: "Value-added tax (IVA) is 16%; usually included in listed prices",
      currencyTips: "MXN is the local currency; credit cards widely accepted",
      timezone: "Central Standard Time (GMT-6)"
    },
    climate: {
      forecastLink: "https://www.weather.com/weather/today/l/MXNL0023:1:MX",
      stadiumClimate: "Open-air stadium; weather conditions apply",
      sunProtection: "High UV index; sunscreen and hats recommended",
      packingChecklist: ["Lightweight clothing", "Comfortable shoes", "Reusable water bottle"],
      clothingTips: "Casual attire suitable for warm weather; layers for evening events",
      rainPlan: "Stadium events proceed rain or shine; bring a light rain jacket if forecasted"
    }
  },
  experience: {
    attractions: [
      "Macroplaza",
      "Parque Fundidora",
      "Museo de Arte Contemporáneo (MARCO)",
      "Cerro de la Silla"
    ],
    footballHistory: [
      "Home to CF Monterrey (Rayados)",
      "Hosted the 2022 CONCACAF W Championship Final"
    ],
    dayTrips: [
      "Grutas de García",
      "Santiago, Nuevo León",
      "Cola de Caballo Waterfall"
    ],
    familyActivities: [
      "Bioparque Estrella",
      "Planetario Alfa",
      "Parque La Pastora"
    ],
    festivals: [
      "Festival Internacional de Santa Lucía",
      "Machaca Fest",
      "Pa’l Norte Music Festival"
    ]
  },
  foodGuide: {
    stadiumFood: ["Tacos", "Tortas", "Nachos", "Soft drinks"],
    budgetOptions: ["Street food vendors near the stadium", "Local taquerías and fondas"],
    localSpecialties: ["Cabrito", "Machaca", "Carne asada"],
    supporterBars: ["Sports bars in Monterrey and Guadalupe"],
    dietaryInfo: ["Vegetarian and gluten-free options available at select vendors"],
    waterSafety: "Tap water is not recommended; bottled water available throughout the venue"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "Metrorrey App",
      "Citymapper Monterrey",
      "Google Translate",
      "Uber / DiDi",
      "Eventbrite"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi available in stadium concourses and common areas"],
      simCards: ["Available at major retailers and mobile stores in Monterrey"],
      cafes: ["Coffee shops with free Wi-Fi in Monterrey and surrounding areas"],
      powerOutlets: "Type A/B plugs, 127V",
      chargingStations: "Located throughout the stadium and fan zones"
    }
  }
};
