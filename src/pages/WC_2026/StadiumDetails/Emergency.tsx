import s from "./styles/emergency.module.scss";

interface Props {
  emergency: {
    emergencyNumbers: {
      police: string;
      ambulance: string;
      fire: string;
    };
    helpServices: string[];
    nearbyHospitals: { name: string; location: string }[];
    medicalPhrases: string[];
    passportHelp: string;
    weatherEmergencies: string;
  };
}

function Emergency({ emergency }: Props) {
  const {
    emergencyNumbers,
    helpServices,
    nearbyHospitals,
    medicalPhrases,
    passportHelp,
    weatherEmergencies,
  } = emergency;

  return (
    <div className={s.emergency}>
      <h2>Emergency Information</h2>

      <section>
        <h3>Emergency Numbers</h3>
        <ul>
          <li>Police: {emergencyNumbers.police}</li>
          <li>Ambulance: {emergencyNumbers.ambulance}</li>
          <li>Fire: {emergencyNumbers.fire}</li>
        </ul>
      </section>

      <section>
        <h3>24/7 Help Services</h3>
        <ul>
          {helpServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Nearby Hospitals</h3>
        <ul>
          {nearbyHospitals.map((hospital, idx) => (
            <li key={idx}>
              {hospital.name} - {hospital.location}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Useful Medical Phrases</h3>
        <ul>
          {medicalPhrases.map((phrase, idx) => (
            <li key={idx}>{phrase}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Lost Passport / ID</h3>
        <p>{passportHelp}</p>
      </section>

      <section>
        <h3>Weather Emergencies</h3>
        <p>{weatherEmergencies}</p>
      </section>
    </div>
  );
}

export default Emergency;
