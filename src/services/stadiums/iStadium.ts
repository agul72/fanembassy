export interface iStadium {
  stadiumName: string;
  city: string;
  country: "USA" | "Canada" | "Mexico";
  capacity: number;
  matches: string[]; // e.g. ["Group A Match 1", "Quarter-Final"]
  photo: string;
  link: string;

  essentials: {
    transportation: {
      airports: {
        name: string;
        link: string;
        transferOptions: string[];
        travelTime: string;
      }[];
      publicTransit: {
        description: string;
        lines: string[];
        passes: string[];
      };
      regionalTravelTips: string[];
      rideShareInfo: string;
      accessibilityOptions: string[];
    };

    matchDay: {
      bagPolicy: string;
      prohibitedItems: string[];
      entryProcedures: string;
      digitalTickets: string;
      facilitiesMap: string; // could be a URL to a visual or interactive map
      exitStrategies: string;
    };
  };

  safety: {
    emergencyNumbers: {
      police: string;
      ambulance: string;
      fire: string;
    };
    helpServices: string[];
    nearbyHospitals: { name: string; location: string }[];
    medicalPhrases: string[];
    passportHelp: string;
    weatherEmergencies: string;
  };

  consular: {
    embassies: {
      country: string;
      contact: string;
    }[];
    visaInfo: string;
    legalSupport: string;
  };

  localTips: {
    supporterCommunity: {
      fanZones: string[];
      teamMeetups: string[];
      supporterGroups: string[];
      eventsCalendar: string[];
      rideShareBoards: string[];
    };
    accommodation: {
      transitAreas: string[];
      budgetZones: string[];
      familyAreas: string[];
      stadiumAdjacent: string[];
      alternativeOptions: string[];
      accessibleOptions: string[];
    };
    culture: {
      customs: string[];
      languageBasics: string[];
      foodSpecialties: string[];
      tipping: string;
      taxInfo: string;
      currencyTips: string;
      timezone: string;
    };
    climate: {
      forecastLink: string;
      stadiumClimate: string;
      sunProtection: string;
      packingChecklist: string[];
      clothingTips: string;
      rainPlan: string;
    };
  };

  experience: {
    attractions: string[];
    footballHistory: string[];
    dayTrips: string[];
    familyActivities: string[];
    festivals: string[];
  };

  foodGuide: {
    stadiumFood: string[];
    budgetOptions: string[];
    localSpecialties: string[];
    supporterBars: string[];
    dietaryInfo: string[];
    waterSafety: string;
  };

  digitalTools: {
    apps: string[];
    connectivity: {
      wifi: string[];
      simCards: string[];
      cafes: string[];
      powerOutlets: string;
      chargingStations: string;
    };
  };
}
