import s from "./styles/foodGuide.module.scss";

interface Props {
  foodGuide: {
    stadiumFood: string[];
    budgetOptions: string[];
    localSpecialties: string[];
    supporterBars: string[];
    dietaryInfo: string[];
    waterSafety: string;
  };
}

function FoodGuide({ foodGuide }: Props) {
  const {
    stadiumFood,
    budgetOptions,
    localSpecialties,
    supporterBars,
    dietaryInfo,
    waterSafety,
  } = foodGuide;

  return (
    <div className={s.foodGuide}>
      <h2>Food & Drink Guide</h2>

      <section>
        <h3>Stadium Food Options and Prices</h3>
        <ul>{stadiumFood.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Budget-Friendly Eating Options</h3>
        <ul>{budgetOptions.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Local Specialties by Region</h3>
        <ul>{localSpecialties.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Supporter-Friendly Bars and Restaurants</h3>
        <ul>{supporterBars.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Food Allergies and Dietary Restrictions Guide</h3>
        <ul>{dietaryInfo.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>Water Safety Information</h3>
        <p>{waterSafety}</p>
      </section>
    </div>
  );
}

export default FoodGuide;
