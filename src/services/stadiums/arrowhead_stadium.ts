import { iStadium } from "./iStadium";

export const arrowheadStadium: iStadium = {
  stadiumName: "Arrowhead Stadium",
  city: "Kansas City",
  country: "USA",
  capacity: 76016,
  matches: [
    "Group Stage - June 15, 2026",
    "Group Stage - June 21, 2026",
    "Round of 16 - July 1, 2026"
  ],
  photo: "arrowhead_stadium.jpg",
  link: "https://www.arrowheadpride.com/",
  essentials: {
    transportation: {
      airports: [
        {
          name: "Kansas City International Airport (MCI)",
          link: "https://www.flykci.com/",
          transferOptions: [
            "Taxi or rideshare (about 25 minutes)",
            "Bus route 229 to downtown plus taxi/rideshare to stadium"
          ],
          travelTime: "30–40 minutes"
        }
      ],
      publicTransit: {
        description: "Kansas City Area Transportation Authority (KCATA) bus lines serve the stadium area",
        lines: ["Bus Route 47", "Bus Route 105"],
        passes: ["KC Metro bus passes", "Mobile ticketing via KCATA app"]
      },
      regionalTravelTips: [
        "Downtown Kansas City offers best accommodation with easy stadium access",
        "Use rideshare apps for flexible transport during match days"
      ],
      rideShareInfo: "Dedicated pickup/drop-off zones near the stadium on NW Chouteau Trafficway",
      accessibilityOptions: [
        "Accessible seating available throughout stadium",
        "Accessible parking and drop-off areas",
        "Assistive listening devices available on request"
      ]
    },
    matchDay: {
      bagPolicy: "Clear bags no larger than 12\" x 6\" x 12\"; small clutch bags allowed",
      prohibitedItems: [
        "Outside food or drink",
        "Weapons or fireworks",
        "Noisemakers and drones"
      ],
      entryProcedures: "Arrive early; security screenings and ticket scanning required",
      digitalTickets: "Accepted via mobile devices or print-at-home options",
      facilitiesMap: "Available on stadium website and match day programs",
      exitStrategies: "Post-match shuttle buses and rideshare zones can get busy; plan accordingly"
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
      "First Aid stations throughout the venue",
      "Multilingual support available"
    ],
    nearbyHospitals: [
      {
        name: "University of Kansas Health System",
        location: "3901 Rainbow Blvd, Kansas City, KS 66160"
      },
      {
        name: "Saint Luke's Hospital of Kansas City",
        location: "4401 Wornall Rd, Kansas City, MO 64111"
      }
    ],
    medicalPhrases: [
      "I need a doctor.",
      "Where is the medical station?",
      "Help, please."
    ],
    passportHelp: "Contact FIFA support booths or nearest consulate",
    weatherEmergencies: "Summer heat expected; stay hydrated and use sun protection"
  },
  consular: {
    embassies: [
      {
        country: "Mexico",
        contact: "https://consulmex.sre.gob.mx/kansascity/index.php/en/"
      },
      {
        country: "Canada",
        contact: "https://www.international.gc.ca/country-pays/united_states-etats_unis/kansas_city.aspx"
      }
    ],
    visaInfo: "Check visa requirements via official government websites; ESTA valid for eligible travelers",
    legalSupport: "Assistance available at FIFA support points and consular offices"
  },
  localTips: {
    supporterCommunity: {
      fanZones: ["Power & Light District", "Union Station Plaza"],
      teamMeetups: ["Local bars near downtown", "Kansas City Soccer Supporters Club"],
      supporterGroups: ["The Cauldron KC", "Emerald City Supporters"],
      eventsCalendar: ["VisitKC.com", "FIFA Fan App"],
      rideShareBoards: ["Local Facebook groups and Reddit threads"]
    },
    accommodation: {
      transitAreas: ["Downtown", "Crossroads Arts District"],
      budgetZones: ["Westport", "Midtown"],
      familyAreas: ["Brookside", "Walnut Grove"],
      stadiumAdjacent: ["Crown Center", "Liberty Memorial area"],
      alternativeOptions: ["Airbnb in downtown and nearby neighborhoods"],
      accessibleOptions: ["21c Museum Hotel, Kansas City Marriott Downtown"]
    },
    culture: {
      customs: ["Friendly Midwestern hospitality; tipping 15-20% standard"],
      languageBasics: ["‘Hello’, ‘Thank you’, ‘Where is…?’"],
      foodSpecialties: ["Kansas City BBQ", "Burnt ends", "Craft beer"],
      tipping: "15-20% at restaurants, bars, and taxis",
      taxInfo: "Sales tax approx. 9.1%",
      currencyTips: "Cash and cards widely accepted; contactless payments preferred",
      timezone: "Central Daylight Time (UTC−5)"
    },
    climate: {
      forecastLink: "https://weather.com/weather/tenday/l/Kansas+City+MO",
      stadiumClimate: "Open-air stadium with summer heat and occasional storms",
      sunProtection: "Sunscreen and hats recommended",
      packingChecklist: ["Light clothing", "Water bottle", "Hat", "Stadium-approved bag"],
      clothingTips: "Wear breathable fabrics and stay hydrated",
      rainPlan: "Ponchos allowed; umbrellas prohibited inside"
    }
  },
  experience: {
    attractions: [
      "National WWI Museum and Memorial",
      "Nelson-Atkins Museum of Art",
      "Kauffman Center for the Performing Arts",
      "Country Club Plaza shopping district"
    ],
    footballHistory: [
      "Home stadium of the NFL’s Kansas City Chiefs",
      "Known for passionate fans and loud atmosphere"
    ],
    dayTrips: [
      "Lake of the Ozarks",
      "Hermann, Missouri wine country",
      "Kansas Speedway tours"
    ],
    familyActivities: [
      "Science City at Union Station",
      "Kansas City Zoo",
      "LEGOLAND Discovery Center"
    ],
    festivals: [
      "Boulevardia Music Festival",
      "Kansas City Irish Fest",
      "American Royal BBQ Festival"
    ]
  },
  foodGuide: {
    stadiumFood: [
      "BBQ ribs and burnt ends",
      "Local craft beers",
      "Classic stadium snacks"
    ],
    budgetOptions: [
      "Food trucks in downtown KC",
      "Local diners and cafes",
      "Chain restaurants near stadium"
    ],
    localSpecialties: [
      "Kansas City-style BBQ",
      "Fried chicken",
      "Cheeseburgers"
    ],
    supporterBars: [
      "Johnny’s Tavern",
      "The Ship",
      "KC Bier Co."
    ],
    dietaryInfo: [
      "Vegetarian and gluten-free options available",
      "Allergen information posted at food stalls"
    ],
    waterSafety: "Tap water is safe to drink; refill stations available"
  },
  digitalTools: {
    apps: [
      "FIFA+",
      "KCATA Transit App",
      "Uber, Lyft",
      "Google Maps",
      "Yelp"
    ],
    connectivity: {
      wifi: ["Free Wi-Fi at stadium and nearby areas"],
      simCards: ["Available at local convenience stores and airport"],
      cafes: ["The Roasterie Coffee, Messenger Coffee"],
      powerOutlets: "Type A/B plugs",
      chargingStations: "Located near main concourses and team stores"
    }
  }
};
