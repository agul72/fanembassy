import s from "./styles/accommodation.module.scss";

interface Props {
  accommodation: {
    transitAreas: string[];
    budgetZones: string[];
    familyAreas: string[];
    stadiumAdjacent: string[];
    alternativeOptions: string[];
    accessibleOptions: string[];
  };
}

function Accommodation({ accommodation }: Props) {
  const {
    transitAreas,
    budgetZones,
    familyAreas,
    stadiumAdjacent,
    alternativeOptions,
    accessibleOptions
  } = accommodation;

  return (
    <div className={s.accommodation}>
      <h2>Accommodation Guidance</h2>

      <section>
        <h3>Transit-Friendly Areas</h3>
        <ul>{transitAreas.map((area, idx) => <li key={idx}>{area}</li>)}</ul>
      </section>

      <section>
        <h3>Budget Zones</h3>
        <ul>{budgetZones.map((zone, idx) => <li key={idx}>{zone}</li>)}</ul>
      </section>

      <section>
        <h3>Family-Friendly Areas</h3>
        <ul>{familyAreas.map((area, idx) => <li key={idx}>{area}</li>)}</ul>
      </section>

      <section>
        <h3>Near the Stadium</h3>
        <ul>{stadiumAdjacent.map((place, idx) => <li key={idx}>{place}</li>)}</ul>
      </section>

      <section>
        <h3>Alternative Options</h3>
        <ul>{alternativeOptions.map((option, idx) => <li key={idx}>{option}</li>)}</ul>
      </section>

      <section>
        <h3>Accessibility-Focused</h3>
        <ul>{accessibleOptions.map((option, idx) => <li key={idx}>{option}</li>)}</ul>
      </section>
    </div>
  );
}

export default Accommodation;
