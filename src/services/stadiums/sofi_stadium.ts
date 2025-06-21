import { iStadium } from "./iStadium";

export const sofiStadium: iStadium = {
  stadiumName: "SoFi Stadium",
  city: "Inglewood",
  country: "USA",
  capacity: 70240,
  matches: [
    "Group Stage",
    "Round of 32",
    "Quarterfinal",
    "U.S. Men's National Team Opening Match"
  ],
  photo: "sofi_stadium.jpg",
  link: "https://en.wikipedia.org/wiki/SoFi_Stadium",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Los Angeles International Airport (LAX)",
          link: "https://www.flylax.com/",
          transferOptions: [
            "Ride-share services (approx. $20–$35 USD, 15–25 min)",
            "Metro Bus Line 117 to Downtown Inglewood Station, then SoFi Stadium Shuttle"
          ],
          travelTime: "15–25 minutes"
        }
      ],
      publicTransit: {
        description: "Metro K Line to Downtown Inglewood Station, followed by SoFi Stadium Shuttle on event days.",
        lines: ["Metro K Line"],
        passes: ["TAP Card"]
      },
      regionalTravelTips: [
        "Utilize Metro services to avoid traffic congestion.",
        "Plan ahead for shuttle schedules on match days."
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
      exitStrategies: "Expect delays; utilize Metro services or ride-share zones for efficient departure."
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
        name: "Centinela Hospital Medical Center",
        location: "555 E Hardy St, Inglewood, CA"
      },
      {
        name: "Ronald Reagan UCLA Medical Center",
        location: "757 Westwood Plaza, Los Angeles, CA"
      }
    ],
    medicalPhrases: [
      "I need medical assistance.",
      "Where is the nearest hospital?",
      "I have a medical emergency."
    ],
    passportHelp: "Contact your country's consulate or use FIFA's on-site assistance for lost ID procedures.",
    weatherEmergencies: "In case of severe weather, follow stadium announcements and proceed to designated shelter areas."
  },
  consular: {
    embassies: [
      {
        country: "United Kingdom",
        contact: "https://www.gov.uk/world/organisations/british-consulate-general-los-angeles"
      },
      {
        country: "Germany",
        contact: "https://www.germany.info/us-en/embassy-consulates/los-angeles"
      },
      {
        country: "Brazil",
        contact: "https://www.gov.br/mre/pt-br/consulado-los-angeles"
      }
    ],
    visaInfo: "Most visitors require an ESTA or tourist visa; verify requirements based on your nationality.",
    legalSupport: "Legal assistance available through consulates or local legal aid organizations."
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Downtown Los Angeles Fan Fest", "Santa Monica Pier Fan Zone"],
      teamMeetups: ["Local pubs and sports bars in Inglewood and Los Angeles"],
      supporterGroups: ["National team supporter clubs and local fan organizations"],
      eventsCalendar: ["Check FIFA+ app and local event listings for fan activities"],
      rideShareBoards: ["Community forums and social media groups for ride-sharing options"]
    },
    accommodation: {
      transitAreas: ["Downtown Los Angeles", "Santa Monica", "Culver City"],
      budgetZones: ["Inglewood", "El Segundo", "Hawthorne"],
      familyAreas: ["Westwood", "Pasadena"],
      stadiumAdjacent: ["Hotels within walking distance of SoFi Stadium"],
      alternativeOptions: ["Airbnb, hostels, and vacation rentals in the Los Angeles area"],
      accessibleOptions: ["Hotels offering ADA-compliant rooms and facilities"]
    },
    culture: {
      customs: ["Tipping is customary; 15–20% in restaurants"],
      languageBasics: ["English is the primary language; Spanish is also widely spoken"],
      foodSpecialties: ["In-N-Out Burger", "Mexican street tacos", "Korean BBQ"],
      tipping: "15–20% in restaurants, $1–2 per drink at bars",
      taxInfo: "Sales tax in California is 7.25%; not included in listed prices",
      currencyTips: "USD is the local currency; credit cards widely accepted",
      timezone: "Pacific Daylight Time (GMT-7)"
    },
    climate: {
      forecastLink: "https://www.weather.com/weather/today/l/USCA0638:1:US",
      stadiumClimate: "Open-air stadium with a canopy roof; weather conditions apply",
      sunProtection: "High UV index in summer; sunscreen and hats recommended",
      packingChecklist: ["Lightweight clothing", "Comfortable shoes", "Reusable water bottle"],
      clothingTips: "Casual attire suitable for warm weather; layers for evening events",
      rainPlan: "Stadium events proceed rain or shine; bring a light rain jacket if forecasted"
    }
  },
  experience: {
    attractions: [
      "Hollywood Walk of Fame",
      "Santa Monica Pier",
      "Griffith Observatory",
      "The Getty Center"
    ],
    footballHistory: [
      "Home to the Los Angeles Rams and Los Angeles Chargers (NFL)",
      "Hosted Super Bowl LVI in 2022"
    ],
    dayTrips: [
      "Disneyland Resort",
      "Universal Studios Hollywood",
      "Malibu beaches"
    ],
    familyActivities: [
      "Los Angeles Zoo",
      "California Science Center",
      "Natural History Museum of Los Angeles County"
    ],
    festivals: [
      "LA Film Festival",
      "CicLAvia",
      "Los Angeles Food & Wine Festival"
    ]
  },
  foodGuide: {
    stadiumFood: ["Gourmet burgers", "Vegan options", "Craft beers", "Artisan pizzas"],
    budgetOptions: ["Food trucks near the stadium", "Local diners and fast-food chains"],
    localSpecialties: ["Street tacos", "Korean BBQ", "Sushi rolls"],
    supporterBars: ["Sports bars in Inglewood", "Pubs in Downtown Los Angeles"],
    dietaryInfo: ["Vegetarian, vegan, and gluten-free options available at select vendors"],
    waterSafety: "Tap water is safe to drink; bottled water available throughout the venue"
  },
  digitalTools: {
    apps: [
      "FIFA+ App",
      "LA Metro Transit App",
      "Citymapper Los Angeles",
      "Google Translate",
      "Uber / Lyft",
      "Eventbrite"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi available in stadium concourses and common areas"],
      simCards: ["Available at major retailers and mobile stores in the Los Angeles area"],
      cafes: ["Coffee shops with free Wi-Fi in Inglewood and surrounding cities"],
      powerOutlets: "U.S. Type A/B plugs, 110V",
      chargingStations: "Located throughout the stadium and fan zones"
    }
  }
};
