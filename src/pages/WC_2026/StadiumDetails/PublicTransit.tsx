import s from "./styles/publicTransit.module.scss";

interface PublicTransitData {
  description: string;
  lines: string[];
  passes: string[];
}

interface Props {
  publicTransit: PublicTransitData;
}

function PublicTransit({ publicTransit }: Props): JSX.Element {
  const { description, lines, passes } = publicTransit;

  return (
    <div className={s.wrapper}>
      <h3>Public Transit to Stadium</h3>
      <p className={s.description}>{description}</p>

      <div className={s.section}>
        <strong>Transit Lines:</strong>
        <ul>
          {lines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      <div className={s.section}>
        <strong>Available Passes:</strong>
        <ul>
          {passes.map((pass, idx) => (
            <li key={idx}>{pass}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PublicTransit;
