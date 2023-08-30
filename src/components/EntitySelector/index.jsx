import { EntitySelectorContainer } from "./styles";

const EntitySelector = ({ selectedEntity, setSelectedEntity }) => {
    function handleSelectEntity(entity) {
        setSelectedEntity(entity)
    }

    return (
        <EntitySelectorContainer selectedEntity={selectedEntity}>
            <button
                className='entity entity-restaurant'
                onClick={() => handleSelectEntity('restaurant')}
            >
                Restaurante
            </button>

            <button
                className='entity entity-customer'
                onClick={() => handleSelectEntity('customer')}
            >
                Cliente
            </button>
        </EntitySelectorContainer>
    )

}

export default EntitySelector;