import { AiFillStar } from 'react-icons/ai';

import { api } from '../../services/api';

import {
    DescriptionContainer,
    FoodInfoContainer,
    ImageContainer,
    MenuFoodCardContainer,
    TopRowContainer
} from './styles';

import DishDefaultImage from '../../assets/defaults/dish-default-image.png';

const MenuFoodCard = ({ food }) => {
    const image = food.images ? `${api.defaults.baseURL}/dishes/image/${food.images}` : DishDefaultImage;

    return (
        <MenuFoodCardContainer>
            <ImageContainer>
                <img src={image} alt="" />
            </ImageContainer>

            <FoodInfoContainer>
                <TopRowContainer>
                    <div className='name'>
                        {food.name}
                    </div>

                    <div className='rating'>
                        <span> <AiFillStar /> </span>
                        <span> 3.4 </span>
                    </div>

                    <div className='price'>
                        <span> R$ </span>
                        <span> 56.70 </span>
                    </div>
                </TopRowContainer>

                <DescriptionContainer>
                    Pepperoni, azeitona preta, cogumelos e rodelas de pimentão amarelo.
                </DescriptionContainer>

            </FoodInfoContainer>

        </MenuFoodCardContainer>
    )
}

export default MenuFoodCard;