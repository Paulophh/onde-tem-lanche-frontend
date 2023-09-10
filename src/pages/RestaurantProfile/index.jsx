import jwt_decode from 'jwt-decode';
import { CiClock2 } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiFillStar } from 'react-icons/ai';

import { api } from '../../services/api';
import { geocodeApi } from '../../services/geocode-api';
import { useAuthContext } from '../../contexts/AuthContext';

import Header from '../../components/Header';
import MenuFoodCard from '../../components/MenuFoodCard';
import RestaurantImages from '../../components/RestaurantImages';
import OperationDayAndHour from '../../components/OperationDayAndHour';

// import AddImage from '../../assets/add-image.png';
import AddImage from '../../assets/add-image.png';
import DefaultLogo from '../../assets/defaults/restaurant-default-logo.png';
import DefaultCover from '../../assets/defaults/restaurant-default-cover.png';

import {
    AddDishButton,
    AddImageButton,
    AddressHoursContainer,
    CoverContainer,
    DishesTitle,
    EditRatingContainer,
    EmptyMenuList,
    ImagesContainer,
    LogoContainer,
    MenuContainer,
    OrangeDivider,
    RatingContainer,
    RestaurantContentContainer,
    RestaurantContentHeader,
    RestaurantImage,
    RestaurantProfileContainer,
    TitleDescription
} from './styles';

/*
restaurantID - eb61b612-18ad-444b-a523-56c3bd4440c1 (proprio)
74bf592c-8b77-4d7f-9eba-d50ee9e37087
*/
const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [coverImageURL, setCoverImageURL] = useState(DefaultCover);
    const [logoImageURL, setLogoImageURL] = useState(DefaultLogo);
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [sortedOperationHours, setSortedOperationHours] = useState([]);

    const params = useParams();
    const { token } = useAuthContext();
    const navigate = useNavigate();
    const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;

    const userInfo = token ? jwt_decode(token) : {};
    const userId = userInfo.sub;
    const isOwnRestaurant = userId === params.restaurantId;

    async function handleDeleteRestaurantImage(imageId) {
        console.log(imageId);
        const updatedRestaurantImages = restaurantImages.filter(image => {
            return image.image_id !== imageId
        });

        setRestaurantImages(updatedRestaurantImages);

        try {
            await api.delete(`/restaurants/image/${imageId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    function sortOperationDays(days) {
        const orders = {
            'Domingo': 0,
            'Segunda-feira': 1,
            'Terça-feira': 2,
            'Quarta-feira': 3,
            'Quinta-feira': 4,
            'Sexta-feira': 5,
            'Sábado': 6,
        }

        const daysWithOrder = days.map(operationDay => {
            const dayOrder = orders[operationDay.day];
            return {
                ...operationDay,
                order: dayOrder
            }
        })

        const sortedDays = daysWithOrder.sort((a, b) => {
            return a.order - b.order;
        })

        setSortedOperationHours(sortedDays);
    }

    async function getAddressFromCoordinate({ lat, lng }) {
        try {
            const response = await geocodeApi.get(`/json?latlng=${lat},${lng}&key=${geocodeApiKey}`);
            setRestaurantAddress(response.data.results[0].formatted_address ?? 'Endereço não encontrado');
        } catch (error) {
            setRestaurantAddress('Endereço não encontrado');
        }

    }

    function getCoverImage(images = []) {
        if (images.length > 0) {
            const isThereAcoverImage = images.find(image => {
                return image.path.startsWith('cover');
            })

            if (isThereAcoverImage) {
                const fetchCoverImageURL = `${api.defaults.baseURL}/restaurants/image/cover/${isThereAcoverImage.path}`
                setCoverImageURL(fetchCoverImageURL);
            }
        }
    }

    function getLogoImage(images = []) {
        if (images.length > 0) {
            const isThereALogoImage = images.find(image => {
                return image.path.startsWith('logo');
            })

            if (isThereALogoImage) {
                const fetchLogoImageURL = `${api.defaults.baseURL}/restaurants/image/logo/${isThereALogoImage.path}`
                setLogoImageURL(fetchLogoImageURL);
            }
        }
    }

    function getRestaurantImages(images = []) {
        if (images.length > 0) {
            const existingRestaurantImages = images.filter(image => {
                return !image.path.startsWith('cover') && !image.path.startsWith('logo')
            });

            setRestaurantImages(existingRestaurantImages);
        }
    }

    async function fetchRestaurantData() {
        try {
            const response = await api.get(`/restaurants/${params.restaurantId}`);

            const responseRestaurant = response.data.restaurant;

            getCoverImage(responseRestaurant.images);
            getLogoImage(responseRestaurant.images);
            getRestaurantImages(responseRestaurant.images);
            getAddressFromCoordinate({ lat: responseRestaurant.lat, lng: responseRestaurant.lng })
            sortOperationDays(responseRestaurant.operation_hour);
            setRestaurant(responseRestaurant);

        } catch (error) {
            console.log(error);
        }
    }

    function handleRedirectToRegisterDish() {
        navigate('/register/dish');
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    return (
        <div>
            <Header />
            <div>
                {restaurant ?
                    <RestaurantProfileContainer>
                        <CoverContainer>
                            <img src={coverImageURL} alt="" />
                        </CoverContainer>

                        <RestaurantContentContainer>
                            <RestaurantContentHeader>
                                <LogoContainer>
                                    <img src={logoImageURL} alt="" />
                                </LogoContainer>

                                <EditRatingContainer>
                                    {isOwnRestaurant &&
                                        <>
                                            <span>
                                                <AiOutlineEdit />
                                            </span>
                                            <span>
                                                Editar
                                            </span>
                                        </>
                                    }

                                    <RatingContainer>
                                        <span>
                                            <AiFillStar />
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                    </RatingContainer>
                                </EditRatingContainer>

                                <TitleDescription>
                                    <h1> {restaurant.name} </h1>
                                    <div>
                                        {restaurant.description}
                                    </div>
                                </TitleDescription>
                            </RestaurantContentHeader>

                            <RestaurantImages
                                restaurantImages={restaurantImages}
                                isOwnRestaurant={isOwnRestaurant}
                                handleDeleteRestaurantImage={handleDeleteRestaurantImage}
                            />

                            <AddressHoursContainer>
                                <div className='address-container'>
                                    {restaurantAddress}
                                </div>

                                <div className='hours-container'>
                                    <CiClock2 />

                                    <div className='hours'>
                                        {
                                            sortedOperationHours.map(operation => (
                                                <OperationDayAndHour
                                                    key={operation.day}
                                                    dayInfo={operation}
                                                />

                                            ))
                                        }
                                    </div>
                                </div>

                            </AddressHoursContainer>

                            <OrangeDivider />

                            <DishesTitle >
                                Pratos
                            </DishesTitle>

                            <MenuContainer>
                                {
                                    restaurant.menu.length > 0 ?
                                        <>
                                            {
                                                restaurant.menu.map(dish => (
                                                    <MenuFoodCard
                                                        food={dish}
                                                    />
                                                ))
                                            }

                                            <AddImageButton htmlFor='image'>
                                                <div className='image-container'>
                                                    <img src={AddImage} alt="" />
                                                </div>
                                                <span>
                                                    Cadastrar prato
                                                </span>
                                            </AddImageButton>
                                        </>
                                        :
                                        <EmptyMenuList>
                                            <div className='no-dishes-message'>
                                                Não existem pratos cadastrados nesse restaurante
                                            </div>

                                            <AddDishButton onClick={handleRedirectToRegisterDish}>
                                                <div className='image-container'>
                                                    <img src={AddImage} alt="" />
                                                </div>
                                                <span>
                                                    Cadastrar prato
                                                </span>
                                            </AddDishButton>
                                        </EmptyMenuList>
                                }
                            </MenuContainer>

                        </RestaurantContentContainer>

                    </RestaurantProfileContainer>

                    :

                    <div> Carregando </div>
                }
            </div>




        </div>
    )
}

export default RestaurantProfile;