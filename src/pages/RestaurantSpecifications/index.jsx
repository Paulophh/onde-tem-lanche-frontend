import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import { useAuthContext } from '../../contexts/AuthContext';
import { geocodeApi } from '../../services/geocode-api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPopUp from '../../components/ErrorPopUp';
import SuccessPopUp from '../../components/SuccessPopUp';
import SubmitButton from '../../components/SubmitButton';
import DishesOptionsSelector from '../../components/DishesOptionsSelector';
import OperationHoursSelector from '../../components/OperationHoursSelector';

import FileInputImage from '../../assets/images/file-input-image.png';

import {
    DescriptionContainer,
    DishOptionsContainer,
    ImageUploadContainer,
    OperationHoursContainer,
    OperationHoursError,
    PageContentContainer,
    RestaurantSpecificationsContainer,
    StandardInput,
    StandardInputContainer
} from './styles';

import { ImageTooBigError } from '../../errors/ImageTooBigError';
import { SelectAtLeastOneDayError } from '../../errors/selectAtLeastOneDayError';
import { InvalidOperationHoursError } from '../../errors/InvalidOperationHoursError';
import AddressSuggestions from '../../components/AddressSuggestions';

const formSchema = yup.object({
    phone: yup.string().length(11, 'Numero de telefone deve conter o DDD').required('Informe o telefone'),
    address: yup.string().required('Informe o endereço'),
    description: yup.string().max(250, 'Máximo de 250 caractéres'),
    number: yup.string().min(2).max(5).required('Informe o numero')
})

const RestaurantSpecifications = () => {
    const [operationHours, setOperationHours] = useState([
        {
            id: 'monday',
            order: 1,
            day: 'Segunda-feira',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'tuesday',
            order: 2,
            day: 'Terça-feira',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'wednesday',
            order: 3,
            day: 'Quarta-feira',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'thursday',
            order: 4,
            day: 'Quinta-feira',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'friday',
            order: 5,
            day: 'Sexta-feira',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'saturday',
            order: 6,
            day: 'Sábado',
            opens_at: null,
            closes_at: null,
            selected: false
        },
        {
            id: 'sunday',
            order: 7,
            day: 'Domingo',
            opens_at: null,
            closes_at: null,
            selected: false
        }
    ])

    const [address, setAddress] = useState('');
    const [serves, setServes] = useState([]);
    const [operationHoursError, setOperationHoursError] = useState('');
    const [selectedImage, setSelectedImage] = useState(FileInputImage);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
    const [addressSuggestions, setAddressSuggestions] = useState([]);

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const { token } = useAuthContext();
    const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;

    function validateOperationHours(selectedDays) {
        setOperationHoursError('');

        const selectedAtLeastOneDay = selectedDays.length > 0;

        if (!selectedAtLeastOneDay) throw new SelectAtLeastOneDayError();

        const invalidOperationDays = selectedDays.find(operationDay => {
            const { closes_at, opens_at } = operationDay;

            const areOpenAndCloseValueNumbers = closes_at && opens_at;

            const isOpeningTimeLowerThanClosingTime = Number(closes_at) > Number(opens_at);

            const areValuesWithinInterval = Number(closes_at) >= 0 && Number(closes_at) <= 24 && Number(opens_at) >= 0 && Number(opens_at) <= 24;

            return !(
                areOpenAndCloseValueNumbers &&
                isOpeningTimeLowerThanClosingTime &&
                areValuesWithinInterval
            );
        })

        if (invalidOperationDays) throw new InvalidOperationHoursError();
    }

    function handleSelectAddressSuggestion(selectedAddress) {
        setAddress(selectedAddress);
        setShowAddressSuggestions(false)
    }

    async function handleAddressSuggestion(e) {
        const addressValue = e.target.value;
        const typedKey = addressValue[addressValue.length - 1];
        const apiFormattedAddress = addressValue.trim().split(' ').join('+');

        if (addressValue.length > 5 && typedKey === ' ') {
            const url = `/json?address=${apiFormattedAddress}&key=${geocodeApiKey}`;

            const response = await geocodeApi.get(url);

            const suggestions = response.data.results.map(result => result.formatted_address);

            if (suggestions.length > 0) {
                setAddressSuggestions(response.data.results);
                setShowAddressSuggestions(true);
            }
        }
    }

    async function getCoordinatesFromAddress(address) {
        const response = await geocodeApi.get(`/json?address=${address}&key=${geocodeApiKey}`);

        const coordinates = response.data.results[0].geometry.location;

        return coordinates;
    }

    async function saveRestaurantData(formData) {
        const buildFullAddress = `${address}, ${formData.number}`.trim().split(' ').join('+');

        const coordinates = await getCoordinatesFromAddress(buildFullAddress)

        try {
            const selectedOperationDays = operationHours.filter(days => {
                return days.selected;
            })
            validateOperationHours(selectedOperationDays);

            const data = {
                ...formData,
                ...coordinates,
                serves,
            }

            await api.put('/restaurants', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(selectedOperationDays);

            const response = await api.post('/restaurants/operation_hours', selectedOperationDays, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response);

        } catch (error) {
            if (
                error instanceof InvalidOperationHoursError ||
                error instanceof SelectAtLeastOneDayError
            ) {
                setOperationHoursError(error.message);
            }

            console.log(error);
        }
    }

    async function handleImageInput(e) {
        const files = e.target.files;
        if (files.length === 0) return; //Não selecionou imagem

        const fileSize = files[0].size;
        if (fileSize > 5000000) throw new ImageTooBigError(); // Imagem deve ter até 5 MB

        const file = files[0];
        const fileURL = URL.createObjectURL(file);
        setSelectedImage(fileURL);

        const imageForm = new FormData();

        imageForm.append('image', file);

        try {
            await api.post('/restaurants/image', imageForm, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setSuccessMessage('Imagem carregada com sucesso!');
        } catch (error) {
            if (
                error.response?.status === 400 ||
                error.response?.status === 401 ||
                error.response?.status === 403 ||
                error.response?.status === 409
            ) {
                setErrorMessage(error.message)
            }

            setErrorMessage('Erro ao enviar a imagem. Tente novamente mais tarde');
        }
    }

    return (
        <RestaurantSpecificationsContainer>
            <Header />

            <PageContentContainer onSubmit={handleSubmit(saveRestaurantData)}>
                {successMessage && <SuccessPopUp message={successMessage} />}
                {errorMessage && <ErrorPopUp message={errorMessage} />}

                <div className='title'>
                    Que tal mais algumas informações?
                </div>

                <div className='sub-title'>
                    Um perfil completo torna seu restaurante mais visível para os clientes!
                </div>

                <ImageUploadContainer>
                    <label htmlFor='image'>
                        <img src={selectedImage} alt="selecionar imagem" />
                        <span>
                            Selecione uma boa imagem para a capa da página do seu restaurante!
                        </span>
                    </label>

                    <input
                        type="file"
                        id='image'
                        style={{ display: 'none' }}
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleImageInput}
                    />
                </ImageUploadContainer>

                <StandardInputContainer>
                    <StandardInput>
                        <div className='input-label-container'>
                            <label htmlFor='address'>
                                Endereço
                                <span className='required'> * </span>
                            </label>

                            <input
                                placeholder='Endereço'
                                id='address'
                                {...register('address')}
                                onChange={handleAddressSuggestion}
                            />
                        </div>

                        {showAddressSuggestions &&
                            <AddressSuggestions
                                suggestionsList={addressSuggestions}
                                onSelect={handleSelectAddressSuggestion}
                                isShown={setShowAddressSuggestions}
                            />
                        }

                        {errors.address &&
                            <div className='input-error-message'>
                                {errors.address.message}
                            </div>
                        }
                    </StandardInput>

                    <StandardInput>
                        <div className='input-label-container'>
                            <label htmlFor='number'>
                                Numero
                                <span className='required'> * </span>
                            </label>

                            <input
                                placeholder='Número'
                                id='number'
                                {...register('number')}
                            />
                        </div>

                        {errors.number &&
                            <div className='input-error-message'>
                                {errors.number.message}
                            </div>
                        }
                    </StandardInput>

                    <StandardInput>
                        <div className='input-label-container'>
                            <label htmlFor='phone'>
                                Telefone
                                <span className='required'> * </span>
                            </label>

                            <input
                                placeholder='Telefone'
                                id='phone'
                                {...register('phone')}
                            />
                        </div>

                        {errors.phone &&
                            <div className='input-error-message'>
                                {errors.phone.message}
                            </div>
                        }
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
                        {...register('description')}
                    />

                    {errors.description &&
                        <div className='input-error-message'>
                            {errors.description.message}
                        </div>
                    }
                </DescriptionContainer>

                <DishOptionsContainer>
                    <div className='title'>
                        O que serve?
                    </div>

                    <div className='sub-title'>
                        Marque todas as alternativas que mais se encaixam nos pratos que seu restaurante serve.
                    </div>
                    <DishesOptionsSelector
                        selectedDishes={serves}
                        setSelectedDishes={setServes}
                        register={register}
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

                    <OperationHoursSelector
                        operationHours={operationHours}
                        setOperationHours={setOperationHours}
                    />

                    {operationHoursError &&
                        <OperationHoursError>
                            {operationHoursError}
                        </OperationHoursError>
                    }
                </OperationHoursContainer>

                <SubmitButton
                    title='Criar Conta'
                    isLoading={false}
                />

            </PageContentContainer>

            <Footer />
        </RestaurantSpecificationsContainer>
    )
}

export default RestaurantSpecifications;