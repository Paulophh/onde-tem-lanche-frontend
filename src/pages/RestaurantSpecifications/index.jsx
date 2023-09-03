import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubmitButton from '../../components/SubmitButton';
import DishesOptionsSelector from '../../components/DishesOptionsSelector';
import OperationHoursSelector from '../../components/OperationHoursSelector';

import FileInputImage from '../../assets/images/file-input-image.png';

import {
    DescriptionContainer,
    DishOptionsContainer,
    ImageUploadContainer,
    OperationHoursContainer,
    PageContentContainer,
    RestaurantSpecificationsContainer,
    StandardInput,
    StandardInputContainer
} from './styles';

const RestaurantSpecifications = () => {
    const [serves, setServes] = useState([]);

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

                <OperationHoursContainer>
                    <div className='title'>
                        Horário de funcionamento
                        <span className='required'>
                            *
                        </span>
                    </div>

                    <div className='sub-title'>
                        Preencha os campos com os horários em que seu restaurante atende.
                    </div>

                    <OperationHoursSelector />
                </OperationHoursContainer>

                <SubmitButton
                    title='Criar Conta'
                />

            </PageContentContainer>

            <Footer />
        </RestaurantSpecificationsContainer>
    )
}

export default RestaurantSpecifications;