import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuthContext } from '../../contexts/AuthContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPopUp from '../../components/ErrorPopUp';
import SuccessPopUp from '../../components/SuccessPopUp';
import SubmitButton from '../../components/SubmitButton';
import DishUnitSelector from '../../components/DishUnitSelector';
import AllergesSelector from '../../components/AllergensSelector';
import DishesOptionsSelector from '../../components/DishesOptionsSelector';

import FileInputImage from '../../assets/images/file-input-image.png';

import {
    AllergensOptionsContainer,
    DescriptionContainer,
    DishOptionsContainer,
    ImageUploadContainer,
    PageContentContainer,
    RestaurantSpecificationsContainer,
    StandardInput,
    StandardInputContainer
} from './styles';

import { ImageTooBigError } from '../../errors/ImageTooBigError';
import AllergensSelector from '../../components/AllergensSelector';

const formSchema = yup.object({
    name: yup.string().max(25, 'Nome deve ter no máximo 25 caractéres').required('Informe o nome'),
    description: yup.string().max(250, 'Máximo de 250 caractéres').optional(),
    size: yup.string().optional()
})

const RegisterDish = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories] = useState([]);
    const [allergens, setAllergens] = useState([]);
    const [selectedImage, setSelectedImage] = useState(FileInputImage);
    const [sizeUnit, setSizeUnit] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const navigate = useNavigate();

    const { token } = useAuthContext();

    function handleSelectUnit(e) {
        const selectedUnit = e.target.value;
        setSizeUnit(selectedUnit);
    }

    function validateSizeUnit(size) {
        const isThereAValue = size !== '';

        if (!isThereAValue) return '';

        const validUnits = ['mg', 'g', 'kg', 'L', 'unidades', 'pedaços'];
        const isUnitValid = validUnits.includes(sizeUnit);

        if (isUnitValid) return sizeUnit;

        return null;
    }

    async function saveDishData(formData) {
        const adjustedUnit = validateSizeUnit(formData.size);
        const size = formData.size ? Number(formData.size) : null;
        const data = {
            ...formData,
            size,
            allergens,
            categories,
            size_unit: adjustedUnit,
        }

        console.log(data);

        try {
            setIsLoading(true);

            const response = await api.post('/dishes', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response.data);

            // navigate('/');

        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
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

            <PageContentContainer onSubmit={handleSubmit(saveDishData)}>
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
                    <StandardInput>
                        <div className='input-label-container'>
                            <label htmlFor='name'>
                                Nome
                                <span className='required'> * </span>
                            </label>

                            <input
                                placeholder='Nome'
                                id='name'
                                {...register('name')}
                            />
                        </div>

                        {errors.name &&
                            <div className='input-error-message'>
                                {errors.name.message}
                            </div>
                        }
                    </StandardInput>

                    <div className='bottom-row-container'>
                        <StandardInput>
                            <div className='input-label-container'>
                                <label htmlFor='amount'>
                                    Quantidade
                                </label>

                                <input
                                    placeholder='Quantidade'
                                    id='amount'
                                    type='number'
                                    {...register('size')}
                                />
                            </div>

                            {errors.size &&
                                <div className='input-error-message'>
                                    {errors.size.message}
                                </div>
                            }
                        </StandardInput>

                        <DishUnitSelector handleSelectUnit={handleSelectUnit} />
                    </div>
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
                        selectedDishes={categories}
                        setSelectedDishes={setCategories}
                        register={register}
                    />
                </DishOptionsContainer>

                <AllergensOptionsContainer>
                    <div className='title'>
                        Contem algum alergênico?
                    </div>

                    <AllergensSelector
                        allergens={allergens}
                        setAllergens={setAllergens}
                    />
                </AllergensOptionsContainer>

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