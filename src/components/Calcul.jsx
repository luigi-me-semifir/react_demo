import { useState } from "react";
import Boutton from "./boutton/Boutton";

const Calcul = () => {
  const [calcul, setCalcul] = useState(0);

  const handleIncrement = () => setCalcul(calcul + 1);
  const handleDecrement = () => setCalcul(calcul - 1);
  const handleReset = () => setCalcul(0);
  return (
    <>
      <h1>{calcul}</h1>
      <Boutton label="+1" onClick={handleIncrement} />
      <Boutton label="-1" onClick={handleDecrement} />
      <Boutton label="0" onClick={handleReset} />
    </>
  );
};

export default Calcul;
