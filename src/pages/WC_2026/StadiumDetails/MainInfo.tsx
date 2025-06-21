import { iStadium } from "@/services/stadiums/iStadium";
import s from "./styles/mainInfo.module.scss";

interface Props {
  stadium: iStadium;
}

const MainInfo = ({ stadium }: Props): JSX.Element => {
  return (
    <div className={s.mainInfo}>
      <div className={s.details}>
        <div><strong>City:</strong> {stadium.city}</div>
        <div><strong>Country:</strong> {stadium.country}</div>
        <div><strong>Capacity:</strong> {stadium.capacity.toLocaleString()}</div>
        <div><strong>Matches:</strong>
          <ul className={s.matchesList}>
            {stadium.matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Link:</strong>{" "}
          <a href={stadium.link} target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </div>
      </div>

      <div className={s.imageWrapper}>
        <img src={stadium.photo} alt={`${stadium.stadiumName}`} className={s.photo} />
      </div>
    </div>
  );
};

export default MainInfo;
