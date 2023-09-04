import React from 'react';
import Header from '../../components/Header';
import { CardFavorites, HighlightsCardsContainer, TextLiked, Text, NoFavotites } from './styles';
import RestaurantHighlightCard from '../../components/RestaurantHighlightCard';
import Footer from '../../components/Footer';

import NoFavotite from '../../assets/images/iconsRestaurant/Vector.svg';


const Favorites = () => {

  const restaurantData = {
    name: 'Pizzeria Leceria',
    description: 'Massa de fermentação natural e apenas ingredientes fresco para trazer ao prato o verdadeiro sabor da pizza artesanal italiana.',
    closingTime: '18:00',
    starRating: 4.5,

  };
  return (
    <>
      <Header />
      <CardFavorites>
        <NoFavotites>
        {/* <HighlightsCardsContainer>
          <RestaurantHighlightCard restaurant={restaurantData} />
          <RestaurantHighlightCard restaurant={restaurantData} />
        </HighlightsCardsContainer> */}
        <img src={NoFavotite} />
        </NoFavotites>
      </CardFavorites>
      <TextLiked>
        Gostou de mais algum restaurante?
      </TextLiked>
      <Text>
        Favorite para que ele apareça aqui também!
      </Text>
      <Footer/>
    </>
    
  );
}

export default Favorites;