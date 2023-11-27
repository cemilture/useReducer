import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const NumberCont = useContext(NumberContext);

  return (
    <div>
      Sayı = {NumberCont.state} <br />
      <button onClick={() => NumberCont.dispatch("increment")}>Arttır</button>
      <button onClick={() => NumberCont.dispatch("discrement")}>Azalt</button>
      <button onClick={() => NumberCont.dispatch("reset")}>Sıfırla</button>
    </div>
  );
}

export default Calculate;
