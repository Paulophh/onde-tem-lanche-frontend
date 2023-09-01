import React from 'react';
import { ColumnDivisor, Preference, PreferencesSelectorContainer } from './styles';

const PreferencesSelector = ({ preferences, setPreferences }) => {

  function handleTogglePreference(selectedPreference) {
    if (preferences.includes(selectedPreference)) {
      const removedPreference = preferences.filter(pref => {
        return pref !== selectedPreference
      })

      setPreferences(removedPreference);

    } else {
      setPreferences([...preferences, selectedPreference]);
    }
  }

  return (
    <PreferencesSelectorContainer>
      <ColumnDivisor>
        <Preference key={"Carnes"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Carnes')}
            defaultChecked={preferences.includes('Carnes')}
          />

          <span>
            Carnes
          </span>
        </Preference>

        <Preference key={"Porções"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Porções')}
            defaultChecked={preferences.includes('Porções')}
          />

          <span>
            Porções
          </span>
        </Preference>

        <Preference key={"Lanches"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Lanches')}
            defaultChecked={preferences.includes('Lanches')}
          />

          <span>
            Lanches
          </span>
        </Preference>
      </ColumnDivisor>

      <ColumnDivisor>
        <Preference key={"Marmitex"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Marmitex')}
            defaultChecked={preferences.includes('Marmitex')}
          />

          <span>
            Marmitex
          </span>
        </Preference>

        <Preference key={"Massas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Massas')}
            defaultChecked={preferences.includes('Massas')}
          />

          <span>
            Massas
          </span>
        </Preference>

        <Preference key={"Saladas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Saladas')}
            defaultChecked={preferences.includes('Saladas')}
          />

          <span>
            Saladas
          </span>
        </Preference>
      </ColumnDivisor>

      <ColumnDivisor>
        <Preference key={"Yakisoba"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Yakisoba')}
            defaultChecked={preferences.includes('Yakisoba')}
          />

          <span>
            Yakisoba
          </span>
        </Preference>

        <Preference key={"Confeitaria"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Confeitaria')}
            defaultChecked={preferences.includes('Confeitaria')}
          />

          <span>
            Confeitaria
          </span>
        </Preference>

        <Preference key={"Pizzas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Pizzas')}
            defaultChecked={preferences.includes('Pizzas')}
          />

          <span>
            Pizzas
          </span>
        </Preference>
      </ColumnDivisor>

      <ColumnDivisor>
        <Preference key={"Esfiha"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Esfiha')}
            defaultChecked={preferences.includes('Esfiha')}
          />

          <span>
            Esfiha
          </span>
        </Preference>

        <Preference key={"Japonês"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Japonês')}
            defaultChecked={preferences.includes('Japonês')}
          />

          <span>
            Japonês
          </span>
        </Preference>

        <Preference key={"Açaí/Sorvete"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Açaí/Sorvete')}
            defaultChecked={preferences.includes('Açaí/Sorvete')}
          />

          <span>
            Açaí/Sorvete
          </span>
        </Preference>
      </ColumnDivisor>
    </PreferencesSelectorContainer>
  );
}

export default PreferencesSelector;