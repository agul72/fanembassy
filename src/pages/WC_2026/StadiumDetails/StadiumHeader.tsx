import { iStadium } from "@/services/stadiums/iStadium";
import s from "./styles/stadiumHeader.module.scss";

interface Props {
  stadium: iStadium;
}

function StadiumHeader( {stadium} : Props): JSX.Element {
  return (
    <div className={s.wrapper}>
      <h3>{stadium.stadiumName}</h3>
    </div>
  );
}

export default StadiumHeader;
