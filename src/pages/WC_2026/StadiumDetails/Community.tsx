import s from "./styles/community.module.scss";

interface Props {
  supporterCommunity: {
    fanZones: string[];
    teamMeetups: string[];
    supporterGroups: string[];
    eventsCalendar: string[];
    rideShareBoards: string[];
  };
}

function Community({ supporterCommunity }: Props) {
  const {
    fanZones,
    teamMeetups,
    supporterGroups,
    eventsCalendar,
    rideShareBoards,
  } = supporterCommunity;

  return (
    <div className={s.community}>
      <h2>Supporter Community</h2>

      <section>
        <h3>Fan Zones</h3>
        <ul>{fanZones.map((zone, idx) => <li key={idx}>{zone}</li>)}</ul>
      </section>

      <section>
        <h3>Team Meetups</h3>
        <ul>{teamMeetups.map((meetup, idx) => <li key={idx}>{meetup}</li>)}</ul>
      </section>

      <section>
        <h3>Supporter Groups</h3>
        <ul>{supporterGroups.map((group, idx) => <li key={idx}>{group}</li>)}</ul>
      </section>

      <section>
        <h3>Events Calendar</h3>
        <ul>{eventsCalendar.map((event, idx) => <li key={idx}>{event}</li>)}</ul>
      </section>

      <section>
        <h3>Ride Share Boards</h3>
        <ul>{rideShareBoards.map((board, idx) => <li key={idx}>{board}</li>)}</ul>
      </section>
    </div>
  );
}

export default Community;
