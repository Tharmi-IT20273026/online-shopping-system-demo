import React from "react";
import styled from "styled-components";
import Navebar from "../components/Navebar";
import Productss from "../components/Productss";

const Container=styled.div``;

const Title=styled.h1`
  margin:21px;
`;

const FilterContainer=styled.div`
  display:flex;
  justify-content: space-between;
`;

const Filter=styled.div`
  margin:31px;
`;

const FilterText = styled.span`
  font-size=51px;
  font-weight:800;
  margin:1px;
`;

const Select = styled.select`
  padding:0;
  margin-right:9px;
  cursor:pointer;
  font-size=31px;
  font-weight:800;
   background-color: #FEA3AA;
   border:none;
`;

const Option = styled.option`
 font-size=31px;
  font-weight:600;
  background-color: #FDD7E4;
  
  &:hover {
   background-color:red;
   transform: scale(1.3);
 }

`;



const ProductList = () => {
    return(
        <Container>
            <Navebar />
            <Title>Women's Wear</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Product :</FilterText></Filter>
                <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Pink</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                <Filter><FilterText>Sort Product :</FilterText></Filter>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>price (desc)</Option>
                </Select>
            </FilterContainer>
            <Productss />
        </Container>

    );

};

export default ProductList