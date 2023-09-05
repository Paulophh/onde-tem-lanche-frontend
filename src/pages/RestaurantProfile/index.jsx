import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import Header from '../../components/Header';

import {
    CoverImageContainer,
    PageContentContainer,
    PageContentHeader,
    RestaurantProfilePageContainer
} from './styles';

/*
restaurantID - 16c57659-3069-41ce-9ba9-3f676eae8292
*/
const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState(null);

    const params = useParams();

    async function fetchRestaurantData() {
        const response = await api.get(`/restaurants/${params.restaurantId}`);

        const responseRestaurant = response.data.restaurant;
        setRestaurant(responseRestaurant);
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    return (
        <div>
            <Header />
            <PageContentContainer>
                {restaurant ?
                    <>
                        <CoverImageContainer>
                            <img
                                src={`${api.defaults.baseURL}/restaurants/image/${restaurant.images[0].path}`}
                                alt=""
                            />
                        </CoverImageContainer>
                        <RestaurantProfilePageContainer>
                            <PageContentHeader>
                                <div>
                                    <img
                                        src={`${api.defaults.baseURL}/restaurants/image/${restaurant.images[0].path}`}
                                        alt=''
                                    />
                                </div>

                                <div className='restaurant-info-container'>
                                    <h1> Pizzeria Liceria </h1>

                                    <div>
                                        Massa de fermentação natural e apenas ingredientes frescos para trazer ao prato o verdadeiro
                                        sabor da pizza artesanal intaliana
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        Editar
                                    </div>

                                    <div>
                                        <span> Estrela </span>
                                        <span> 4.5 </span>
                                    </div>
                                </div>
                            </PageContentHeader>
                        </RestaurantProfilePageContainer>
                    </>

                    :

                    <div> Carregando </div>
                }
            </PageContentContainer>




        </div>
    )
}

export default RestaurantProfile;