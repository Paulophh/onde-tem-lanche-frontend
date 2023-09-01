import React from "react";
import { useState } from "react";
import { AlergenItem, AlergenSelectorContainer, AlergicContainer } from "./styles";


const SelectorAlergic = () => {
  const [selectedAlergens, setSelectedAlergens] = useState([]);

  const toggleAlergen = (alergen) => {
    if (selectedAlergens.includes(alergen)) {
      setSelectedAlergens(selectedAlergens.filter(item => item !== alergen));
    } else {
      setSelectedAlergens([...selectedAlergens, alergen]);
    }
  };

  const alergens = ["Leite", "Ovos", "Nozes", "Glúten", "Mariscos", "Amendoim", "Peixe", "Soja", "Não possuo"];
  return (
    <AlergenSelectorContainer>
      <AlergicContainer>
      {alergens.map(alergen => (
        <AlergenItem key={alergen}>
          <input
            type="checkbox"
            checked={selectedAlergens.includes(alergen)}
            onChange={() => toggleAlergen(alergen)}
          />
          <span>{alergen}</span>
        </AlergenItem>
      ))}
      </AlergicContainer>
    </AlergenSelectorContainer>
  );
}

export default SelectorAlergic;