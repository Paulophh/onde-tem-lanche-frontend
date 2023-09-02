import { useState } from 'react';

import Header from '../../components/Header';
import DishesOptionsSelector from '../../components/DishesOptionsSelector';

import FileInputImage from '../../assets/images/file-input-image.png';

import {
    DescriptionContainer,
    DishOptionsContainer,
    ImageUploadContainer,
    PageContentContainer,
    RestaurantSpecificationsContainer,
    StandardInput,
    StandardInputContainer
} from './styles';

const RestaurantSpecifications = () => {
    const [serves, setServes] = useState([]);

    console.log(serves);

    return (
        <RestaurantSpecificationsContainer>
            <Header />

            <PageContentContainer>
                <div className='title'>
                    Que tal mais algumas informações?
                </div>

                <div className='sub-title'>
                    Um perfil completo torna seu restaurante mais visível para os clientes!
                </div>

                <ImageUploadContainer>
                    <label htmlFor='image'>
                        <img src={FileInputImage} alt="selecionar imagem" />
                        <span>
                            Selecione uma boa imagem para representar seu restaurante!
                        </span>
                    </label>

                    <input type="file" id='image' style={{ display: 'none' }} />
                </ImageUploadContainer>

                <StandardInputContainer>
                    <StandardInput>
                        <label htmlFor='phone'>
                            Telefone
                            <span className='required'> * </span>
                        </label>

                        <input
                            placeholder='Telefone'
                            id='phone'
                        />
                    </StandardInput>

                    <StandardInput>
                        <label htmlFor='address'>
                            Endereço
                            <span className='required'> * </span>
                        </label>

                        <input
                            placeholder='Endereço'
                            id='address'
                        />
                    </StandardInput>
                </StandardInputContainer>

                <DescriptionContainer>
                    <label htmlFor='description'>
                        Descrição
                    </label>
                    <textarea
                        placeholder='Fale um pouco sobre o restaurante para atrair mais atenção!'
                        id='description'
                        rows={4}
                    />
                </DescriptionContainer>

                <DishOptionsContainer>
                    <div className='title'>
                        O que serve?
                        <span className='required'>
                            *
                        </span>
                    </div>

                    <div className='sub-title'>
                        Marque todas as alternativas que mais se encaixam nos pratos que seu restaurante serve.
                    </div>
                    <DishesOptionsSelector
                        selectedDishes={serves}
                        setSelectedDishes={setServes}
                    />
                </DishOptionsContainer>
            </PageContentContainer>
        </RestaurantSpecificationsContainer>
    )
}

export default RestaurantSpecifications;