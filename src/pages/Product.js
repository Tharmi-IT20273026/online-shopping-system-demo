
import React from "react";
import styled from "styled-components";
import Navebar from "../components/Navebar";
import {
    BsCartCheckFill,
    BsCartDashFill, BsFillCartCheckFill, BsFillCartPlusFill,
    IoBagAdd,
    IoBagRemove,
    IoMdRemoveCircleOutline,
    MdShoppingCart
} from "react-icons/all";





const Container=styled.div`

`;
const Wrapper=styled.div`
   padding:50px;
   display:flex;
`;
const ImgContainer=styled.div`
   flex:1;
`;
const Imag=styled.img`
  width:80%;
  height:100vh;
`;
const InfoContainer=styled.div`
    flex:1;
    padding:0px 50px;
`;
const Title=styled.h1`
  font-weight: 301;
  
`;
const Desc=styled.div`
  padding:20px 0px;
`;
const Price=styled.div`
   font-weight: 301;
   font-size: 50px;
`;

const FilterContainer = styled.div` 
   width:50%;
   margin:31px 0px;
   display: flex;
   justify-content: space-between;
`;


const Filter = styled.div` 
  display:flex;
  align-items: center;
`;


const FilterTitle = styled.span`
  font-size:25px;
  font-weight: 250;
`;


const FilterColor = styled.div`
 width: 31px;
 height:31px;
 border-radius: 100%;
 background-color: ${(props) => props.color};
 margin: 0px 5px;
 cursor:pointer;
`;


const FilterSize = styled.select`
  padding:6px;
  margin-left: 5px;
`;


const FilterSizeOption = styled.option`

`;

const AddContainer=styled.div`
   width:50%;
   display:flex;
   align-items:center;
   justify-content: space-between;
`;

const AmountContainer=styled.div`
  display:flex;
  align-items:center;
  font-weight:800;
`;

const Amount=styled.span`
  width: 7vh;
  height:7vh;
  border-radius: 13px;
  border: 3px solid Crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 7px;
  cursor:pointer;
`;

const Button=styled.button`
  padding:20px;
  border: 5px solid Crimson;
  background-color:#FA8072;
  font-weight: 700;
  cursor:pointer;
  
  &:hover{
      background-color: #FF6347;
  }
`;


const Product = () => {
    return(
        <Container>
            <Navebar />
            <Wrapper>
                <ImgContainer>
                    <Imag src="https://hashrail.sgp1.cdn.digitaloceanspaces.com/CND/Product/large/CS38_1.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Redish Pink Cotten Saree</Title>
                    <Desc> Cotton or Silk Saree look elegant in all circumstances.
                        It keeps you looking your elegant best from dawn to.</Desc>
                    <Price>5000Lkr</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color= "green"/>
                            <FilterColor color= "blue"/>
                            <FilterColor color= "yellow"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <BsCartDashFill/>
                            <Amount>1</Amount>
                            <BsFillCartPlusFill />
                        </AmountContainer>
                        <Button>Add To Cart
                            <BsFillCartCheckFill/>
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );

}

export default Product