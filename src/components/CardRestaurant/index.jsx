import React from 'react';
import { Card, CardInformation, IamgemInformation, Image} from './styles';

import ImageCard from '../../assets/restaurant-images/imagem-card-restaurant.png';
import Icon from '../../assets/restaurant-images/icon-burger-restaurant.png'


const CardRestaurant = () => {
  return (
    <Card>
      <IamgemInformation>
        <Image>
          <img src={ImageCard} alt='' />
        </Image>
        <CardInformation>
          <c>

          </Icon>
          
        </CardInformation>
      </IamgemInformation>
    </Card>
    
  );
}

export default CardRestaurant;