import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { AiOutlineEdit, AiFillStar } from 'react-icons/ai';
import { GrFavorite } from 'react-icons/gr';
import { CiClock2 } from 'react-icons/ci';

import { api } from '../../services/api';
import { geocodeApi } from '../../services/geocode-api';
import { useAuthContext } from '../../contexts/AuthContext';

import Header from '../../components/Header';
import OperationDayAndHour from '../../components/OperationDayAndHour';

import DefaultCover from '../../assets/defaults/restaurant-default-cover.png';
import DefaultLogo from '../../assets/defaults/restaurant-default-logo.png';
import AddImage from '../../assets/add-image.png';

import RestaurantDefault from '../../assets/defaults/restaurant-default-image.png';

import {
    AddImageButton,
    AddressHoursContainer,
    CoverContainer,
    EditRatingContainer,
    ImagesContainer,
    LogoContainer,
    OrangeDivider,
    RatingContainer,
    RestaurantContentContainer,
    RestaurantContentHeader,
    RestaurantImage,
    RestaurantProfileContainer,
    TitleDescription
} from './styles';

/*
restaurantID - eb61b612-18ad-444b-a523-56c3bd4440c1
*/
const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState({});
    const [coverImageURL, setCoverImageURL] = useState(DefaultCover);
    const [logoImageURL, setLogoImageURL] = useState(DefaultLogo);
    const [restaurantImages, setRestaurantImages] = useState([1, 2, 3]);
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [sortedOperationHours, setSortedOperationHours] = useState([]);

    const params = useParams();
    const { token } = useAuthContext();
    const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;

    const userInfo = token ? jwt_decode(token) : {};
    const userId = userInfo.sub;
    const isOwnRestaurant = userId === params.restaurantId;
    // const isOwnRestaurant = false;

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
        const response = await api.get(`/restaurants/${params.restaurantId}`);

        const responseRestaurant = response.data.restaurant;

        getCoverImage(responseRestaurant.images);
        getLogoImage(responseRestaurant.images);
        getRestaurantImages(responseRestaurant.images);
        getAddressFromCoordinate({ lat: responseRestaurant.lat, lng: responseRestaurant.lng })
        sortOperationDays(responseRestaurant.operation_hour);
        setRestaurant(responseRestaurant);
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
                                    <span>
                                        {isOwnRestaurant ? <AiOutlineEdit /> : <GrFavorite />}
                                    </span>
                                    <span>
                                        {isOwnRestaurant ? 'Editar' : 'Favoritar'}
                                    </span>

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
                                    <h1> Pizzeria Liceria </h1>
                                    <div>
                                        Massa de fermentação natural e apenas ingredientes fresco
                                        para trazer ao prato o verdadeiro sabor da pizza artesanal italiana.
                                    </div>
                                </TitleDescription>
                            </RestaurantContentHeader>

                            <ImagesContainer>
                                {
                                    restaurantImages.length === 0 && !isOwnRestaurant &&
                                    <span className='no-images-message'>
                                        Esse restaurante não possui imagens =(
                                    </span>
                                }

                                {
                                    restaurantImages.map(image => (
                                        <RestaurantImage key={image.path}>
                                            <img
                                                // src={`${api.defaults.baseURL}/restaurants/image/${image.path}`}
                                                src={RestaurantDefault}
                                                alt=''
                                            />
                                        </RestaurantImage>
                                    ))
                                }

                                {
                                    isOwnRestaurant && restaurantImages.length < 4 &&
                                    <AddImageButton>
                                        <img src={AddImage} alt="" />
                                    </AddImageButton>
                                }
                            </ImagesContainer>

                            <AddressHoursContainer>
                                <div className='address-container'>
                                    {restaurantAddress}
                                </div>

                                <div className='hours-container'>
                                    <CiClock2 />

                                    <div>
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