import s from "./styles/digitalTools.module.scss";

interface Props {
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

function DigitalTools({ digitalTools }: Props) {
  const {
    apps,
    connectivity: { wifi, simCards, cafes, powerOutlets, chargingStations },
  } = digitalTools;

  return (
    <div className={s.digitalTools}>
      <h2>Digital Tools</h2>

      <section>
        <h3>Recommended Apps</h3>
        <ul>{apps.map((app, idx) => <li key={idx}>{app}</li>)}</ul>
      </section>

      <section>
        <h3>Connectivity</h3>
        <div>
          <strong>WiFi Hotspot Locations:</strong>
          <ul>{wifi.map((spot, idx) => <li key={idx}>{spot}</li>)}</ul>
        </div>
        <div>
          <strong>SIM Card Purchase Locations:</strong>
          <ul>{simCards.map((location, idx) => <li key={idx}>{location}</li>)}</ul>
        </div>
        <div>
          <strong>Internet Café Options:</strong>
          <ul>{cafes.map((cafe, idx) => <li key={idx}>{cafe}</li>)}</ul>
        </div>
        <div>
          <strong>Power Outlet Types:</strong>
          <p>{powerOutlets}</p>
        </div>
        <div>
          <strong>Phone Charging Stations at Venues:</strong>
          <p>{chargingStations}</p>
        </div>
      </section>
    </div>
  );
}

export default DigitalTools;
