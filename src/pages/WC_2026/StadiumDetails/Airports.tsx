import s from "./styles/airports.module.scss";

interface Airport {
  name: string;
  link: string;
  transferOptions: string[];
  travelTime: string;
}

interface Props {
  airports: Airport[];
}

function Airports({ airports }: Props): JSX.Element {
  return (
    <div className={s.wrapper}>
      <h3>Nearby Airports</h3>
      {airports.map((airport, index) => (
        <div className={s.airportCard} key={index}>
          <a href={airport.link} target="_blank" rel="noopener noreferrer" className={s.name}>
            {airport.name}
          </a>
          <div className={s.details}>
            <div>
              <strong>Travel Time:</strong> {airport.travelTime}
            </div>
            <div>
              <strong>Transfer Options:</strong>{" "}
              {airport.transferOptions.join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Airports;
