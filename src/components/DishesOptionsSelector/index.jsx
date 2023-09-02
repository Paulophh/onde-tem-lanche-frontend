import React from 'react';
import { ColumnDivisor, Preference, DishesOptionsSelectorContainer } from './styles';

const DishesOptionsSelector = ({ selectedDishes, setSelectedDishes }) => {

  function handleTogglePreference(dish) {
    if (selectedDishes.includes(dish)) {
      const removedPreference = selectedDishes.filter(pref => {
        return pref !== dish
      })

      setSelectedDishes(removedPreference);

    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  }

  return (
    <DishesOptionsSelectorContainer>
      <ColumnDivisor>
        <Preference key={"Carnes"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Carnes')}
            defaultChecked={selectedDishes.includes('Carnes')}
          />

          <span>
            Carnes
          </span>
        </Preference>

        <Preference key={"Porções"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Porções')}
            defaultChecked={selectedDishes.includes('Porções')}
          />

          <span>
            Porções
          </span>
        </Preference>

        <Preference key={"Lanches"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Lanches')}
            defaultChecked={selectedDishes.includes('Lanches')}
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
            defaultChecked={selectedDishes.includes('Marmitex')}
          />

          <span>
            Marmitex
          </span>
        </Preference>

        <Preference key={"Massas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Massas')}
            defaultChecked={selectedDishes.includes('Massas')}
          />

          <span>
            Massas
          </span>
        </Preference>

        <Preference key={"Saladas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Saladas')}
            defaultChecked={selectedDishes.includes('Saladas')}
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
            defaultChecked={selectedDishes.includes('Yakisoba')}
          />

          <span>
            Yakisoba
          </span>
        </Preference>

        <Preference key={"Confeitaria"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Confeitaria')}
            defaultChecked={selectedDishes.includes('Confeitaria')}
          />

          <span>
            Confeitaria
          </span>
        </Preference>

        <Preference key={"Pizzas"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Pizzas')}
            defaultChecked={selectedDishes.includes('Pizzas')}
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
            defaultChecked={selectedDishes.includes('Esfiha')}
          />

          <span>
            Esfiha
          </span>
        </Preference>

        <Preference key={"Japonês"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Japonês')}
            defaultChecked={selectedDishes.includes('Japonês')}
          />

          <span>
            Japonês
          </span>
        </Preference>

        <Preference key={"Açaí/Sorvete"}>
          <input
            type="checkbox"
            onChange={() => handleTogglePreference('Açaí/Sorvete')}
            defaultChecked={selectedDishes.includes('Açaí/Sorvete')}
          />

          <span>
            Açaí/Sorvete
          </span>
        </Preference>
      </ColumnDivisor>
    </DishesOptionsSelectorContainer>
  );
}

export default DishesOptionsSelector;