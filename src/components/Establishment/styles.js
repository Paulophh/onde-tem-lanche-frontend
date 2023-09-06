import styled from "styled-components";

export const Card = styled.div`
  margin: 0 auto;
`;

export const ControlEstablishment = styled.div`
  background: linear-gradient(0.98turn, #FFA500, #FF6347, #FF8000);
`;

export const ImgEstablishment = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1380px;
  height: 228px;
  border: 1px solid orange;

  margin: 0 auto;

  img {
    width: 100%;
  }
`
export const Information = styled.div`
  width: 1000px;
  background-color: #fff;
  display: flex;
`;

export const IconRestaurant = styled.div`
 width: 120px;

 img{
  width: 100%;
 }
`;

export const NameDescription = styled.div`
  width: 880px;
  h1{
  text-align: center;
  color: #000;
  font-family: Ubuntu;
  font-size: 4.0rem;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  padding: 5px;
  }

  p{
  text-align: center;
  color: #3F3F3F;
  font-family: Ubuntu;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding: 8px;
  }
`;

export const NameDescriptionEditStar = styled.div`
 display: flex;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
  }

  .text-container {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const EditStar = styled.div`

`;

export const Edit = styled.div`
  font-size: 2.2rem;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
  }

  .text-container {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;


export const ImagesRestaurant = styled.div`
  width: 1300px;

  img{
  width: 240px;
  height: 234px;
  flex-shrink: 0;
  margin: 10px;
  border-radius: 10px;
  }
`;

export const ImagesRestaurantInformations = styled.div`

`;

export const AddressHours = styled.div`
  display: flex;
`;

export const Address = styled.div`
  
  p{
  color: #000;
  font-family: Ubuntu;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; 
  }
`;

export const Hours = styled.div`
  display: flex;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
  }

  .text-container {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;