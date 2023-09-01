import React from 'react';
import { ColumnDivisor, Allergy, AllergySelectorContainer } from './styles';

const AllergiesSelector = ({ allergies, setAllergies }) => {

  function handleToggleAllergy(selectedAllergy) {
    if (allergies.includes(selectedAllergy)) {
      const removedPreference = allergies.filter(pref => {
        return pref !== selectedAllergy
      })

      setAllergies(removedPreference);

    } else {
      setAllergies([...allergies, selectedAllergy]);
    }
  }

  return (
    <AllergySelectorContainer>
      <ColumnDivisor>
        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Leite')}
            defaultChecked={allergies.includes('Leite')}
          />

          <span>
            Leite
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Glúten')}
            defaultChecked={allergies.includes('Glúten')}
          />

          <span>
            Glúten
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Peixe')}
            defaultChecked={allergies.includes('Peixe')}
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
            defaultChecked={allergies.includes('Ovos')}
          />

          <span>
            Ovos
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Mariscos')}
            defaultChecked={allergies.includes('Mariscos')}
          />

          <span>
            Mariscos
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Soja')}
            defaultChecked={allergies.includes('Soja')}
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
            defaultChecked={allergies.includes('Nozes')}
          />

          <span>
            Nozes
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Amendoim')}
            defaultChecked={allergies.includes('Amendoim')}
          />

          <span>
            Amendoim
          </span>
        </Allergy>

        <Allergy >
          <input
            type="checkbox"
            onChange={() => handleToggleAllergy('Não contém')}
            defaultChecked={allergies.includes('Não contém')}
          />

          <span>
            Não possuo restrição
          </span>
        </Allergy>
      </ColumnDivisor>
    </AllergySelectorContainer>
  );
}

export default AllergiesSelector;