import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Category = styled.div`
  width: 82px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CategoryIcon = styled.div`
  font-size: 6.4rem;
`;

export const CategoryTitle = styled.div`
  margin-top: -15px;
  font-size: 1.6rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  

`