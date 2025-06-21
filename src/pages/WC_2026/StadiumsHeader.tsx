import s from './wc2026.module.scss';

interface Props {
  filterCountry: string;
  setFilterCountry: (val: string) => void;
  filterCity: string;
  setFilterCity: (val: string) => void;
  changeTheme: () => void;
}

function StadiumsHeader({
  filterCountry,
  setFilterCountry,
  filterCity,
  setFilterCity,
  changeTheme,
}: Props): JSX.Element {
  return (

    <div className={s.header}>
      <div className={s.filters}>
        <div className={s.filter}>
          <label>Country</label>
          <input
            className={s.input}
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          />
        </div>
        <div className={s.filter}>
          <label>City</label>
          <input
            className={s.input}
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="theme-button" onClick={changeTheme}></button>
      </div>
    </div>
  );
}

export default StadiumsHeader;
