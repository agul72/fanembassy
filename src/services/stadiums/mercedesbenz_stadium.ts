import { iStadium } from "./iStadium";

export const mercedesbenzStadium: iStadium = {
  stadiumName: "Mercedes-Benz Stadium",
  city: "Atlanta",
  country: "USA",
  capacity: 71000,
  matches: ["Group Stage - Match 3", "Round of 16"],
  photo: "atlanta_wc_stadium.jpg",
  link: "https://mercedesbenzstadium.com/",

  essentials: {
    transportation: {
      airports: [
        {
          name: "Hartsfield-Jackson Atlanta International Airport",
          link: "https://www.atl.com/",
          transferOptions: [
            "MARTA Gold Line to Garnett Station",
            "Taxi or Uber (approx. $30)",
          ],
          travelTime: "20 minutes by train",
        },
      ],
      publicTransit: {
        description: "Reliable MARTA system",
        lines: ["Gold Line", "Blue Line"],
        passes: ["Breeze Card", "Day Pass"],
      },
      regionalTravelTips: [
        "Amtrak connections to nearby cities",
        "Greyhound for regional bus travel",
      ],
      rideShareInfo: "Uber/Lyft pickup zones at Gate 2",
      accessibilityOptions: ["Wheelchair-accessible MARTA stations", "Stadium shuttle assistance"],
    },

    matchDay: {
      bagPolicy: "Clear bags only, 12” x 6” x 12” max",
      prohibitedItems: ["Umbrellas", "Outside food", "Drones"],
      entryProcedures: "Arrive 90 minutes before kickoff",
      digitalTickets: "Use FIFA Ticketing App with QR backup",
      facilitiesMap: "/maps/atlanta-stadium-map.png",
      exitStrategies: "Exit via Gates 3/4 for shortest MARTA access",
    },
  },

  safety: {
    emergencyNumbers: {
      police: "911",
      ambulance: "911",
      fire: "911",
    },
    helpServices: ["FIFA Multilingual Hotline: +1 800 123 4567"],
    nearbyHospitals: [
      { name: "Grady Memorial Hospital", location: "80 Jesse Hill Jr Dr SE" },
    ],
    medicalPhrases: ["I need help", "Where is the hospital?", "I lost my passport"],
    passportHelp: "Visit your nearest consulate or use FIFA Help Center",
    weatherEmergencies: "Seek shelter in concourse areas during alerts",
  },

  consular: {
    embassies: [
      { country: "UK", contact: "+1 404-555-1111" },
      { country: "Brazil", contact: "+1 404-555-2222" },
    ],
    visaInfo: "ESTA required for most visitors to USA",
    legalSupport: "ACLU guide for international visitors available online",
  },

  localTips: {
    supporterCommunity: {
      fanZones: ["Centennial Olympic Park", "Downtown Plaza"],
      teamMeetups: ["Meehan’s Public House", "Hudson Grille"],
      supporterGroups: ["American Outlaws", "La Barra Brava ATL"],
      eventsCalendar: ["/events/atlanta.json"],
      rideShareBoards: ["Use FIFA Fans app or Reddit /r/WorldCupTravel"],
    },
    accommodation: {
      transitAreas: ["Downtown", "Midtown"],
      budgetZones: ["College Park", "Decatur"],
      familyAreas: ["Virginia Highlands"],
      stadiumAdjacent: ["Castleberry Hill"],
      alternativeOptions: ["Airbnb", "HostelWorld"],
      accessibleOptions: ["Search ‘ADA’ filter in booking platforms"],
    },
    culture: {
      customs: ["Tipping expected (~15-20%)", "No smoking indoors"],
      languageBasics: ["Hello", "Where is...", "Thank you"],
      foodSpecialties: ["Fried chicken", "Peach cobbler", "BBQ"],
      tipping: "15–20% for service staff",
      taxInfo: "7.75% added at checkout",
      currencyTips: "USD only, card widely accepted",
      timezone: "Eastern Daylight Time (GMT-4)",
    },
    climate: {
      forecastLink: "https://weather.com/atlanta",
      stadiumClimate: "Air-conditioned",
      sunProtection: "Hat and SPF 30+ recommended",
      packingChecklist: ["Poncho", "Reusable water bottle", "Sunscreen"],
      clothingTips: "Breathable, light colors",
      rainPlan: "Covered concourse access if rain delays match",
    },
  },

  experience: {
    attractions: ["Georgia Aquarium", "CNN Center", "World of Coca-Cola"],
    footballHistory: ["Atlanta Silverbacks legacy", "MLS growth in the South"],
    dayTrips: ["Stone Mountain", "Athens, GA"],
    familyActivities: ["Zoo Atlanta", "Children’s Museum"],
    festivals: ["Peachtree Road Race", "Atlanta Jazz Fest"],
  },

  foodGuide: {
    stadiumFood: ["Chick-fil-A", "ATL BBQ", "Nachos"],
    budgetOptions: ["The Varsity", "Grindhouse Burgers"],
    localSpecialties: ["Sweet tea", "Grits", "Wings"],
    supporterBars: ["Hudson Grille", "Taco Mac"],
    dietaryInfo: ["Gluten-free, vegetarian options available"],
    waterSafety: "Tap water safe to drink",
  },

  digitalTools: {
    apps: [
      "FIFA World Cup 2026 App",
      "MARTA On the Go",
      "Google Translate",
      "Uber",
      "Eventbrite",
    ],
    connectivity: {
      wifi: ["Stadium-wide WiFi", "Downtown free hotspots"],
      simCards: ["AT&T, T-Mobile kiosks at airport"],
      cafes: ["Starbucks, Panera, local cafés"],
      powerOutlets: "Type A/B (USA standard)",
      chargingStations: "Every major concourse section",
    },
  },
};
