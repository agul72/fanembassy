import s from "./styles/consular.module.scss";

interface Props {
  consular: {
    embassies: {
      country: string;
      contact: string;
    }[];
    visaInfo: string;
    legalSupport: string;
  };
}

function Consular({ consular }: Props) {
  const { embassies, visaInfo, legalSupport } = consular;

  return (
    <div className={s.consular}>
      <h2>Consular Information</h2>

      <section>
        <h3>Visa Information</h3>
        <p>{visaInfo}</p>
      </section>

      <section>
        <h3>Legal Support</h3>
        <p>{legalSupport}</p>
      </section>

      <section>
        <h3>Embassies & Consulates</h3>
        <ul>
          {embassies.map((embassy, idx) => (
            <li key={idx}>
              <strong>{embassy.country}:</strong> {embassy.contact}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Consular;
