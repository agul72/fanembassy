import s from "./styles/climate.module.scss";

interface Props {
  climate: {
    forecastLink: string;
    stadiumClimate: string;
    sunProtection: string;
    packingChecklist: string[];
    clothingTips: string;
    rainPlan: string;
  };
}

function Climate({ climate }: Props) {
  const {
    forecastLink,
    stadiumClimate,
    sunProtection,
    packingChecklist,
    clothingTips,
    rainPlan,
  } = climate;

  return (
    <div className={s.climate}>
      <h2>Climate & Planning</h2>

      <section>
        <h3>Weather Forecast</h3>
        <p>
          Check the latest weather forecast{" "}
          <a href={forecastLink} target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
      </section>

      <section>
        <h3>Stadium Climate Info</h3>
        <p>{stadiumClimate}</p>
      </section>

      <section>
        <h3>Sun Protection Recommendations</h3>
        <p>{sunProtection}</p>
      </section>

      <section>
        <h3>Packing Checklist</h3>
        <ul>{packingChecklist.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Clothing Recommendations</h3>
        <p>{clothingTips}</p>
      </section>

      <section>
        <h3>Rain Contingency Information</h3>
        <p>{rainPlan}</p>
      </section>
    </div>
  );
}

export default Climate;
