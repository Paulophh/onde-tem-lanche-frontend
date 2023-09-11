import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuthContext } from '../../contexts/AuthContext';

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Highlights from '../../components/Highlights';
import RestaurantSearchCard from '../../components/RestaurantSearchCard';
import { PageContentContainer, RestaurantSearchResultContainer } from './styles';

const RestaurantSearchResult = () => {
    const [foundRestaurants, setFoundRestaurants] = useState([]);
    const [nearbyFoundRestaurants, setNearbyFoundRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q').toLowerCase().trim();

    const { userCoordinates } = useAuthContext();

    function getDistanceBetweenCoordinates(from, to) {
        if (from.lat === to.lat && from.lng === to.lng) {
            return 0
        }

        const fromRadian = (Math.PI * from.lat) / 180
        const toRadian = (Math.PI * to.lat) / 180

        const theta = from.lng - to.longitude
        const radTheta = (Math.PI * theta) / 180

        let dist =
            Math.sin(fromRadian) * Math.sin(toRadian) +
            Math.cos(fromRadian) * Math.cos(toRadian) * Math.cos(radTheta)

        if (dist > 1) {
            dist = 1
        }

        dist = Math.acos(dist)
        dist = (dist * 180) / Math.PI
        dist = dist * 60 * 1.1515
        dist = dist * 1.609344

        return dist
    }

    async function filterNearbyRestaurants(foundByQuery) {
        const fromUser = {
            lat: Number(userCoordinates.lat),
            lng: Number(userCoordinates.lng)
        };

        const nearby = foundByQuery.filter(rest => {
            if (!rest.lat || !rest.lng) return false;

            const toRestaraunt = {
                lat: Number(rest.lat),
                lng: Number(rest.lng)
            }

            const distance = getDistanceBetweenCoordinates(fromUser, toRestaraunt)

            return distance <= 10 // Km
        })

        setNearbyFoundRestaurants(nearby);
    }

    async function fetchRestaurantsWithQuery() {
        try {
            setIsLoading(true)
            const response = await api.get(`/restaurants?q=${query}`);

            setFoundRestaurants(response.data.restaurants);
            filterNearbyRestaurants(response.data.restaurants);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchRestaurantsWithQuery();
    }, [])

    return (
        <RestaurantSearchResultContainer>
            <Header />

            <PageContentContainer>
                <Highlights
                    text='Próximos a você'
                    textPlacement='left'
                />
                <div className='restaurant-list-container'>
                    {
                        nearbyFoundRestaurants.map(rest => (
                            <RestaurantSearchCard
                                restaurant={rest}
                            />
                        ))
                    }
                </div>

                <Highlights
                    text='Outros resultados'
                    textPlacement='right'
                />

                <div className='restaurant-list-container'>
                    {
                        foundRestaurants.map(rest => (
                            <RestaurantSearchCard
                                restaurant={rest}
                            />

                        ))
                    }
                </div>
            </PageContentContainer>

            <Footer />
        </RestaurantSearchResultContainer>
    )
}

export default RestaurantSearchResult;