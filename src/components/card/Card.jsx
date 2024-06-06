import { useState } from "react";
import Boutton from "../boutton/Boutton";
import styles from "./Card.module.css";

const Card = ({ nom, id, actif }) => {
  const [idx, setIdx] = useState(0);

  return (
    <section className={styles.Card}>
      {actif && (
        <>
          <p>
            Bonjour {nom}, mon id: {id}
          </p>
          {id >= 5 && <Boutton label={nom} onClick={() => setIdx(idx + 1)} />}
          <p>{idx}</p>
        </>
      )}
    </section>
  );
};

export default Card;
