import { ImagesRestaurantInformations, Edit, EditStar ,StarRating, NameDescriptionEditStar, ControlEstablishment, ImgEstablishment, Card, Information, IconRestaurant, NameDescription, ImagesRestaurant, AddressHours, Address, Hours  } from "./styles"
import React from "react"

import Imagem from "../../assets/restaurant-images/pizza-fresca.png"
import Icon from "../../assets/images/iconsRestaurant/iconBurnesBurger.png"
import RestaurantExampleImage from '../../assets/restaurant-images/image-33.png';


import { AiFillStar } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi";


export const Establishment = (Establishment) => {
    return (
        <Card>
        <ControlEstablishment>
          <ImgEstablishment>
            <img src={Imagem} alt="imagem do restaurante" />
          </ImgEstablishment>
        </ControlEstablishment>
        <Information>
          <IconRestaurant>
            <img src={Icon} alt="icone do restaurante" />
          </IconRestaurant>
          <NameDescriptionEditStar>
            <NameDescription>
              <h1>nome</h1>
              <p>descrição</p>
            </NameDescription>
  
            <EditStar>
              <Edit>
                <StarRating>
                  <span className='icon-container'>
                    <AiFillEdit />
                  </span>
                </StarRating>
                <StarRating>
                  <span className='icon-container'>
                    <AiFillStar />
                  </span>
  
                  <span className='text-container'>
                    4.5
                  </span>
                </StarRating>
              </Edit>
            </EditStar>
          </NameDescriptionEditStar>
        </Information>

        <ImagesRestaurantInformations>
          <ImagesRestaurant>
              <img src={RestaurantExampleImage} alt="imagem do restaurante" />
              <img src={RestaurantExampleImage} alt="imagem do restaurante" />
              <img src={RestaurantExampleImage} alt="imagem do restaurante" />
              <img src={RestaurantExampleImage} alt="imagem do restaurante" />
          </ImagesRestaurant>

          <AddressHours>
            <Address>
              <p>Endereço</p>
            </Address>
          

            <Hours>
              <span className='icon-container'>
              <BiTimeFive />
              </span>

              <span className='text-container'>
                Fecha às 22:00
              </span>
            </Hours>
          </AddressHours>

        </ImagesRestaurantInformations>
      </Card>
    )

}

export default Establishment;