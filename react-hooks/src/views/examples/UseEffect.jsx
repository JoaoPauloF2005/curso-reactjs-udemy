import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "./../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div className="center">
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
