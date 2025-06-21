import { useEffect, useState } from 'react';
import { iStadium } from '../../services/stadiums/iStadium';
import { stadiums } from '../../services/stadiums';
import StadiumDetails from './StadiumDetails';

import s from './wc2026.module.scss';
import StadiumsHeader from './StadiumsHeader';

interface Props {
  changeTheme: () => void;
}

function WC2026({ changeTheme }: Props): JSX.Element {
  const [selectedStadiums, setSelectedStadiums] = useState<iStadium[]>();
  const [selectedStadium, setSelectedStadium] = useState<iStadium>();
  const [filterCountry, setFilterCountry] = useState<string>('');
  const [filterCity, setFilterCity] = useState<string>('');
  const [isStadiumListVisible, setIsStadiumListVisible] = useState<boolean>(true);
  const [isStadiumDetailsVisible, setIsStadiumDetailsVisible] = useState<boolean>(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth < 1100) {
      setIsStadiumDetailsVisible(false);
      setIsStadiumListVisible(true);
    } else {
      setIsStadiumListVisible(true);
      setIsStadiumDetailsVisible(true);
    }
  }, [innerWidth]);

  useEffect(() => {
    // Convert the stadiums object to an array
    let result = Object.values(stadiums);

    // Apply filters
    if (filterCountry.trim()) {
      result = result.filter((stadium) =>
        stadium.country.toLowerCase().includes(filterCountry.toLowerCase())
      );
    }

    if (filterCity.trim()) {
      result = result.filter((stadium) =>
        stadium.city.toLowerCase().includes(filterCity.toLowerCase())
      );
    }

    // Sort alphabetically by stadium name
    result.sort((a, b) => a.stadiumName.localeCompare(b.stadiumName));

    // Update selected stadiums
    setSelectedStadiums(result);
    console.log(`Filtered stadiums: ${result.length}`, result[0]);
    

    if (isStadiumDetailsVisible && (!selectedStadium || result.some((s) => s.stadiumName === selectedStadium.stadiumName))) {
      setSelectedStadium(result[0]); // optionally auto-select the first one
    }
  }, [filterCountry, filterCity, stadiums]);


  function onStadiumClickHandler(stadium: iStadium) {
    console.log(`Stadium clicked: ${stadium.stadiumName}`);
    
    if (selectedStadium === stadium) {
      return;
    }
    setSelectedStadium(stadium);
    if (innerWidth < 1100) {
      setIsStadiumDetailsVisible(true);
      setIsStadiumListVisible(false);
    }
  }

  function backToListBtnClickHandler() {
    setIsStadiumDetailsVisible(false);
    setIsStadiumListVisible(true);
  }

  return (
    <div className={s.mainWrapper}>
      <StadiumsHeader
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
        filterCity={filterCity}
        setFilterCity={setFilterCity}
        changeTheme={changeTheme}
      />


      <div className={s.mainContainer}>
        {isStadiumListVisible && (
          <div className={s.stadiumListWrapper}>
            {selectedStadiums && selectedStadiums.map((stadium) => (
              <div
                key={stadium.stadiumName}
                className={[s.stadiumRow, selectedStadium === stadium ? s.active : null].join(' ')}
                onClick={() => onStadiumClickHandler(stadium)}
              >
                <div>{stadium.stadiumName}</div>
                <div>{stadium.city}, {stadium.country}</div>
              </div>
            ))}
          </div>
        )}

        <div id={s.stadiumDetailsWrapper}>
          {isStadiumDetailsVisible && selectedStadium ? (
            <>
            {!isStadiumListVisible && (
              <div className={s.navBtn} onClick={backToListBtnClickHandler}>
                Back to list
              </div>
            )}
              <StadiumDetails stadium={selectedStadium} />
            </>
          )
            : <div>Selected Stadium</div>
          }
        </div>
      </div>
    </div>
  );
}

export default WC2026;
