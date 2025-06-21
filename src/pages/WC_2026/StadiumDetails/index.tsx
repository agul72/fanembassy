import { iStadium } from "@/services/stadiums/iStadium";

import StadiumHeader from "./StadiumHeader";
import Airports from "./Airports";
import PublicTransit from "./PublicTransit";
import RideSharing from "./RideSharing";
import MatchDay from "./MatchDay";
import Emergency from "./Emergency";
import Consular from "./Consular";
import Community from "./Community";
import Accommodation from "./Accommodation";
import Culture from "./Culture";
import Climate from "./Climate";
import Experience from "./Experience";
import FoodGuide from "./FoodGuide";
import Digital from "./DigitalTools";

import s from "./styles/stadium.module.scss";
import { useState } from "react";
import MainInfo from "./MainInfo";

interface Props {
  stadium: iStadium;
}

const sections = [
  { label: "Main Info", key: "main" },
  { label: "Match Day", key: "matchDay" },
  { label: "Safety & Support", key: "safety" },
  { label: "Consular Info", key: "consular" },
  { label: "Accommodation", key: "accommodation" },
  { label: "Culture", key: "culture" },
  { label: "Climate", key: "climate" },
  { label: "Experience", key: "experience" },
  { label: "Food & Drink", key: "food" },
];


function StadiumDetails({ stadium }: Props): JSX.Element {

  const [activeTab, setActiveTab] = useState("matchDay");


  if (!stadium) {
    return (
      <div className={s.container}>
        <h2>No stadium selected</h2>
      </div>
    );
  }

  return (
    <div className={s.container}>

      <StadiumHeader stadium={stadium} />

      <div className={s.tabs}>
        {sections.map((tab) => (
          <button
            key={tab.key}
            className={`${s.tabButton} ${activeTab === tab.key ? s.active : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "main" && (
        <section className={s.section}>
          <h2>Main Info</h2>
          <MainInfo stadium={stadium} />
        </section>
      )}

      {activeTab === "matchDay" && (
        <section className={s.section}>
          <h2>Match Day</h2>
          <MatchDay matchDay={stadium.essentials.matchDay} />
        </section>
      )}

      {activeTab === "safety" && (
        <section className={s.section}>
          <h2>Safety & Support</h2>
          <Emergency emergency={stadium.safety} />
        </section>
      )}

      {activeTab === "consular" && (
        <section className={s.section}>
          <h2>Consular Information</h2>
          <Consular consular={stadium.consular} />
        </section>
      )}

      {activeTab === "accommodation" && (
        <section className={s.section}>
          <h2>Accommodation</h2>
          <Accommodation accommodation={stadium.localTips.accommodation} />
        </section>
      )}

      {activeTab === "culture" && (
        <section className={s.section}>
          <h2>Cultural Navigator</h2>
          <Culture culture={stadium.localTips.culture} />
        </section>
      )}

      {activeTab === "climate" && (
        <section className={s.section}>
          <h2>Climate & Planning</h2>
          <Climate climate={stadium.localTips.climate} />
        </section>
      )}

      {activeTab === "experience" && (
        <section className={s.section}>
          <h2>Local Experience</h2>
          <Experience experience={stadium.experience} />
        </section>
      )}

      {activeTab === "food" && (
        <section className={s.section}>
          <h2>Food & Drink</h2>
          <FoodGuide foodGuide={stadium.foodGuide} />
        </section>
      )}



      {/* Essentials */}
      {/* <section className={s.section}>
        <h2>Transportation</h2>
        <Airports airports={stadium.essentials.transportation.airports} />
        <PublicTransit transit={stadium.essentials.transportation.publicTransit} />
        <RideSharing
          tips={stadium.essentials.transportation.regionalTravelTips}
          info={stadium.essentials.transportation.rideShareInfo}
          accessibility={stadium.essentials.transportation.accessibilityOptions}
        />
      </section> */}
      {/* Local Tips */}
      {/* <section className={s.section}>
        <h2>Supporter Community</h2>
        <Community community={stadium.localTips.supporterCommunity} />
      </section> */}

      {/* Digital Tools */}
      {/* <section className={s.section}>
        <h2>Digital Tools</h2>
        <Digital tools={stadium.digitalTools} />
      </section> */}
    </div>
  );
}

export default StadiumDetails;
