import { iStadium } from "./iStadium";

export const estadioAzteca: iStadium = {
  stadiumName: "Estadio Azteca",
  city: "Mexico City",
  country: "Mexico",
  capacity: 87523,
  matches: [
    "Opening Match",
    "Group Stage",
    "Round of 32",
    "Round of 16"
  ],
  photo: "estadio_azteca.jpg",
  link: "https://en.wikipedia.org/wiki/Estadio_Azteca",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Benito Juárez International Airport (MEX)",
          link: "https://www.aicm.com.mx/",
          transferOptions: [
            "Taxi or ride-share (approx. 30–45 minutes)",
            "Metro Line 5 from Terminal Aérea to Pantitlán, transfer to Line 2 towards Tasqueña, then Tren Ligero to Estadio Azteca"
          ],
          travelTime: "30–60 minutes"
        }
      ],
      publicTransit: {
        description: "Metro Line 2 to Tasqueña, then Tren Ligero to Estadio Azteca station.",
        lines: ["Metro Line 2", "Tren Ligero"],
        passes: ["Tarjeta de Movilidad Integrada"]
      },
      regionalTravelTips: [
        "Avoid peak hours to reduce crowding.",
        "Purchase round-trip tickets in advance to avoid long lines after the match."
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
        name: "Hospital Ángeles Acoxpa",
        location: "Calz. Acoxpa 430, Ex-Hacienda Coapa, Tlalpan, 14300 Ciudad de México, CDMX"
      },
      {
        name: "Hospital General de Tlalpan",
        location: "Calz. de Tlalpan 4800, Toriello Guerra, Tlalpan, 14050 Ciudad de México, CDMX"
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
      fanZones: ["Zócalo Fan Fest", "Chapultepec Park Fan Zone"],
      teamMeetups: ["Local pubs and sports bars in Condesa and Roma neighborhoods"],
      supporterGroups: ["National team supporter clubs and local fan organizations"],
      eventsCalendar: ["Check FIFA+ app and local event listings for fan activities"],
      rideShareBoards: ["Community forums and social media groups for ride-sharing options"]
    },
    accommodation: {
      transitAreas: ["Condesa", "Roma", "Coyoacán"],
      budgetZones: ["Centro Histórico", "San Ángel"],
      familyAreas: ["Polanco", "Santa Fe"],
      stadiumAdjacent: ["Hotels within walking distance of Estadio Azteca"],
      alternativeOptions: ["Airbnb, hostels, and vacation rentals in Mexico City"],
      accessibleOptions: ["Hotels offering ADA-compliant rooms and facilities"]
    },
    culture: {
      customs: ["Tipping is customary; 10–15% in restaurants"],
      languageBasics: ["Spanish is the primary language; basic English is understood in tourist areas"],
      foodSpecialties: ["Tacos al pastor", "Chiles en nogada", "Tamales"],
      tipping: "10–15% in restaurants, $1–2 per drink at bars",
      taxInfo: "Value-added tax (IVA) is 16%; usually included in listed prices",
      currencyTips: "MXN is the local currency; credit cards widely accepted",
      timezone: "Central Standard Time (GMT-6)"
    },
    climate: {
      forecastLink: "https://www.weather.com/weather/today/l/MXDF0132:1:MX",
      stadiumClimate: "Open-air stadium; weather conditions apply",
      sunProtection: "High UV index; sunscreen and hats recommended",
      packingChecklist: ["Lightweight clothing", "Comfortable shoes", "Reusable water bottle"],
      clothingTips: "Casual attire suitable for warm weather; layers for evening events",
      rainPlan: "Stadium events proceed rain or shine; bring a light rain jacket if forecasted"
    }
  },
  experience: {
    attractions: [
      "Zócalo (Main Square)",
      "Palacio de Bellas Artes",
      "Chapultepec Castle",
      "Frida Kahlo Museum"
    ],
    footballHistory: [
      "Hosted FIFA World Cup finals in 1970 and 1986",
      "Home to Club América and Cruz Azul"
    ],
    dayTrips: [
      "Teotihuacan Pyramids",
      "Xochimilco Canals",
      "Puebla City"
    ],
    familyActivities: [
      "Chapultepec Zoo",
      "Papalote Children's Museum",
      "Six Flags México"
    ],
    festivals: [
      "Día de los Muertos (Day of the Dead)",
      "Festival Internacional Cervantino",
      "Corona Capital Music Festival"
    ]
  },
  foodGuide: {
    stadiumFood: ["Tacos", "Tortas", "Nachos", "Soft drinks"],
    budgetOptions: ["Street food vendors near the stadium", "Local taquerías and fondas"],
    localSpecialties: ["Tacos al pastor", "Elote (grilled corn)", "Churros"],
    supporterBars: ["Sports bars in Condesa and Roma neighborhoods"],
    dietaryInfo: ["Vegetarian and gluten-free options available at select vendors"],
    waterSafety: "Tap water is not recommended; bottled water available throughout the venue"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "CDMX Metro App",
      "Citymapper Mexico City",
      "Google Translate",
      "Uber / DiDi",
      "Eventbrite"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi available in stadium concourses and common areas"],
      simCards: ["Available at major retailers and mobile stores in Mexico City"],
      cafes: ["Coffee shops with free Wi-Fi in Mexico City and surrounding areas"],
      powerOutlets: "Type A/B plugs, 127V",
      chargingStations: "Located throughout the stadium and fan zones"
    }
  }
};
