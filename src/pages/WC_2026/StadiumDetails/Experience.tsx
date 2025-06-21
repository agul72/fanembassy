import s from "./styles/experience.module.scss";

interface Props {
  experience: {
    attractions: string[];
    footballHistory: string[];
    dayTrips: string[];
    familyActivities: string[];
    festivals: string[];
  };
}

function Experience({ experience }: Props) {
  const {
    attractions,
    footballHistory,
    dayTrips,
    familyActivities,
    festivals,
  } = experience;

  return (
    <div className={s.experience}>
      <h2>Experience Enhancers</h2>

      <section>
        <h3>Cultural Attractions Near Stadium</h3>
        <ul>{attractions.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Local Football History</h3>
        <ul>{footballHistory.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Day Trip Recommendations</h3>
        <ul>{dayTrips.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Family-Friendly Activities</h3>
        <ul>{familyActivities.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Local Festivals During Tournament Dates</h3>
        <ul>{festivals.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>
    </div>
  );
}

export default Experience;
