import s from "./styles/culture.module.scss"; // Assuming you'll create a CSS module for styling

interface CultureProps {
  culture: {
    customs: string[];
    languageBasics: string[];
    foodSpecialties: string[];
    tipping: string;
    taxInfo: string;
    currencyTips: string;
    timezone: string;
  };
}

function Culture({ culture }: CultureProps): JSX.Element {
  return (
    <div className={s.cultureContainer}>
      {culture.customs && culture.customs.length > 0 && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Local Customs & Etiquette</h3>
          <ul className={s.list}>
            {culture.customs.map((item, index) => (
              <li key={index} className={s.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {culture.languageBasics && culture.languageBasics.length > 0 && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Language Basics</h3>
          <ul className={s.list}>
            {culture.languageBasics.map((item, index) => (
              <li key={index} className={s.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {culture.foodSpecialties && culture.foodSpecialties.length > 0 && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Local Food Specialties</h3>
          <ul className={s.list}>
            {culture.foodSpecialties.map((item, index) => (
              <li key={index} className={s.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {culture.tipping && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Tipping Guidelines</h3>
          <p className={s.text}>{culture.tipping}</p>
        </div>
      )}

      {culture.taxInfo && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Tax Information</h3>
          <p className={s.text}>{culture.taxInfo}</p>
        </div>
      )}

      {culture.currencyTips && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Currency Tips</h3>
          <p className={s.text}>{culture.currencyTips}</p>
        </div>
      )}

      {culture.timezone && (
        <div className={s.sectionBlock}>
          <h3 className={s.sectionTitle}>Timezone</h3>
          <p className={s.text}>{culture.timezone}</p>
        </div>
      )}
    </div>
  );
};

export default Culture;