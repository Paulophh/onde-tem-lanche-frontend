import React from 'react';

import { ColumnDivisor, Allergy, AllergySelectorContainer } from './styles';

const AllergensSelector = ({ allergens, setAllergens }) => {

  function handleToggleAllergy(selectedAllergy) {
    if (allergens.includes(selectedAllergy)) {
      const removedPreference = allergens.filter(pref => {
        return pref !== selectedAllergy
      })

      setAllergens(removedPreference);

    } else {
      setAllergens([...allergens, selectedAllergy]);
    }
  }

  return (
    <AllergySelectorContainer>
      <ColumnDivisor>
        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Leite')}
            defaultChecked={allergens.includes('Leite')}
          />

          <span>
            Leite
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Glúten')}
            defaultChecked={allergens.includes('Glúten')}
          />

          <span>
            Glúten
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Peixe')}
            defaultChecked={allergens.includes('Peixe')}
          />

          <span>
            Peixe
          </span>
        </Allergy>
      </ColumnDivisor>

      <ColumnDivisor>
        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Ovos')}
            defaultChecked={allergens.includes('Ovos')}
          />

          <span>
            Ovos
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Mariscos')}
            defaultChecked={allergens.includes('Mariscos')}
          />

          <span>
            Mariscos
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Soja')}
            defaultChecked={allergens.includes('Soja')}
          />

          <span>
            Soja
          </span>
        </Allergy>
      </ColumnDivisor>

      <ColumnDivisor>
        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Nozes')}
            defaultChecked={allergens.includes('Nozes')}
          />

          <span>
            Nozes
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Amendoim')}
            defaultChecked={allergens.includes('Amendoim')}
          />

          <span>
            Amendoim
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Não contém')}
            defaultChecked={allergens.includes('Não contém')}
          />

          <span>
            Não possuo restrição
          </span>
        </Allergy>
      </ColumnDivisor>
    </AllergySelectorContainer>
  );
}

export default AllergensSelector;