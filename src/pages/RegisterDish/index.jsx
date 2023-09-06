import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuthContext } from '../../contexts/AuthContext';
import { geocodeApi } from '../../services/geocode-api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPopUp from '../../components/ErrorPopUp';
import SuccessPopUp from '../../components/SuccessPopUp';
import SubmitButton from '../../components/SubmitButton';
import AddressSuggestions from '../../components/AddressSuggestions';
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
import { WrongAddressError } from '../../errors/WrongAddressError';
import { SelectAtLeastOneDayError } from '../../errors/selectAtLeastOneDayError';
import { InvalidOperationHoursError } from '../../errors/InvalidOperationHoursError';

const formSchema = yup.object({
    phone: yup.string().length(11, 'Numero de telefone deve conter o DDD').required('Informe o telefone'),
    address: yup.string().required('Informe o endereço'),
    description: yup.string().max(250, 'Máximo de 250 caractéres'),
    number: yup.string().min(2).max(5).required('Informe o numero')
})

const RegisterDish = () => {
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

    const [isLoading, setIsLoading] = useState(false);

    const [address, setAddress] = useState('');
    const [serves, setServes] = useState([]);
    const [operationHoursError, setOperationHoursError] = useState('');
    const [selectedImage, setSelectedImage] = useState(FileInputImage);

    const [errorMessage, setErrorMessage] = useState('');
    const [addressError, setAddressError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
    const [addressSuggestions, setAddressSuggestions] = useState([]);

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const navigate = useNavigate();

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
        const previouslyTypedKey = addressValue[addressValue.length - 1];

        if (addressValue.length > 5 && previouslyTypedKey === ' ') {
            const apiFormattedAddress = addressValue.trim().split(' ').join('+')

            const url = `/json?address=${apiFormattedAddress}&key=${geocodeApiKey}`;

            const response = await geocodeApi.get(url);

            const suggestions = response.data.results.map(result => result.formatted_address);
            console.log('Sugestão -> ', suggestions);

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
        try {
            setIsLoading(true);

            if (!address) throw new WrongAddressError();
            const buildFullAddress = `${address}, ${formData.number}`.trim().split(' ').join('+');

            const coordinates = await getCoordinatesFromAddress(buildFullAddress)

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

            await api.post('/restaurants/operation_hours', selectedOperationDays, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            navigate('/');

        } catch (error) {
            if (
                error instanceof InvalidOperationHoursError ||
                error instanceof SelectAtLeastOneDayError
            ) {
                setOperationHoursError(error.message);
            }

            if (error instanceof WrongAddressError) {
                setAddressError(error.message);
            }

            console.log(error);
        } finally {
            setIsLoading(true);
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
                    Cadastrar um prato? Boa ideia!
                </div>

                <div className='sub-title'>
                    Quanto mais completo for seu cardápio mais atenção ele chama.
                </div>

                <ImageUploadContainer>
                    <label htmlFor='image'>
                        <img src={selectedImage} alt="selecionar imagem" />
                        <span>
                            Selecione uma boa imagem para ilustrar seu produto!
                        </span>
                    </label>

                    <input
                        type="file"
                        id='image'
                        style={{ display: 'none' }}
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleImageInput}
                    />

                    <button>

                    </button>
                </ImageUploadContainer>

                <StandardInputContainer>
                    <div className='top-row-container'>
                        <StandardInput>
                            <div className='input-label-container'>
                                <label htmlFor='name'>
                                    Nome
                                    <span className='required'> * </span>
                                </label>

                                <input
                                    placeholder='Nome'
                                    id='name'
                                // {...register('name')}
                                />
                            </div>

                            {errors.name &&
                                <div className='input-error-message'>
                                    {errors.name.message}
                                </div>
                            }
                        </StandardInput>
                    </div>

                    <StandardInput>
                        <div className='input-label-container'>
                            <label htmlFor='amount'>
                                Quantidade
                                <span className='required'> * </span>
                            </label>

                            <input
                                placeholder='Quantidade'
                                id='amount'
                            // {...register('phone')}
                            />
                        </div>

                        {errors.amount &&
                            <div className='input-error-message'>
                                {errors.amount.message}
                            </div>
                        }
                    </StandardInput>
                </StandardInputContainer>

                <DescriptionContainer>
                    <label htmlFor='description'>
                        Descrição
                    </label>
                    <textarea
                        placeholder='Fale um pouco sobre o produto para atrair mais atenção!'
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
                        O que é?
                    </div>

                    <div className='sub-title'>
                        Marque as alternativas que melhor descrevem esse produto.
                    </div>
                    <DishesOptionsSelector
                        selectedDishes={serves}
                        setSelectedDishes={setServes}
                        register={register}
                    />
                </DishOptionsContainer>

                <SubmitButton
                    title='Cadastrar produto'
                    isLoading={isLoading}
                />

            </PageContentContainer>

            <Footer />
        </RestaurantSpecificationsContainer>
    )
}

export default RegisterDish;