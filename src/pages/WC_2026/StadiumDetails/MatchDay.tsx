import s from "./styles/matchDay.module.scss";

interface Props {
  matchDay: {
    bagPolicy: string;
    prohibitedItems: string[];
    entryProcedures: string;
    digitalTickets: string;
    facilitiesMap: string;
    exitStrategies: string;
  };
}

function MatchDay({ matchDay }: Props): JSX.Element {
  return (
    <div className={s.wrapper}>
      <h3>Match Day Essentials</h3>

      <div className={s.section}>
        <h4>Bag Policy</h4>
        <p>{matchDay.bagPolicy}</p>
      </div>

      <div className={s.section}>
        <h4>Prohibited Items</h4>
        <ul>
          {matchDay.prohibitedItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={s.section}>
        <h4>Entry Procedures</h4>
        <p>{matchDay.entryProcedures}</p>
      </div>

      <div className={s.section}>
        <h4>Digital Tickets</h4>
        <p>{matchDay.digitalTickets}</p>
      </div>

      <div className={s.section}>
        <h4>Stadium Facilities Map</h4>
        <a href={matchDay.facilitiesMap} target="_blank" rel="noreferrer">
          View Facilities Map
        </a>
      </div>

      <div className={s.section}>
        <h4>Exit Strategies</h4>
        <p>{matchDay.exitStrategies}</p>
      </div>
    </div>
  );
}

export default MatchDay;
