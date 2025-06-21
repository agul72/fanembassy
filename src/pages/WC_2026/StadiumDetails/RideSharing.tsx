import s from "./styles/rideSharing.module.scss";

interface Props {
  rideShareInfo: string;
}

function RideSharing({ rideShareInfo }: Props): JSX.Element {
  return (
    <div className={s.wrapper}>
      <h3>Ride-Sharing & Taxi Info</h3>
      <p>{rideShareInfo}</p>
    </div>
  );
}

export default RideSharing;
