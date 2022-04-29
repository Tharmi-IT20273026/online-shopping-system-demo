import React from "react";
import styled from "styled-components";
import Navebar from "../components/Navebar";
import {IoAddCircle, IoMdRemoveCircle} from "react-icons/all";


const Container= styled.div`

`;
const Wrapper= styled.div`
  padding:20px;
`;
const Title= styled.h1`
  font-weight:301;
  text-align: center;
`;
const Top= styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:20px;
`;

const TopButton= styled.button`
  padding:13px;
  font-weight: 700;
  cursor:pointer;
  border:${(props) =>props.type ==="Filled" && "none"};
  background-color:${(props) =>props.type ==="Filled" ? "black": "transparent"};
  color:${(props) =>props.type ==="Filled" && "white"};
`;

const Bottom= styled.div`
 display:flex;
 justify-content:space-between;
`;

const Summary=styled.div`
  flex:1;
  border: 0.5px solid grey;
  border-radius: 13px;
  padding:20px;
  height:50vh;
`;
const SummaryTitle=styled.h1``;
const SummaryItem=styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between; 
  font-weight:${props=>props.type==="total" && "500"};
  font-size:${props=>props.type==="total" && "31px"};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;

const Info=styled.div`
  flex:3;
`;

const TopTexts=styled.div`

`;
const TopText=styled.span`
  text-decoration:underline;
  cursor:pointer;
  margin:0px 13px;
`;
const ProductDetail= styled.div`
    flex:2;
    display:flex;
`;
const Product=styled.div`
  display:flex;
  justify-content: space-between;
`;
const PriceDetail=styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;

const ProductAmountContainer=styled.div`
display:flex;
align-item:center;
margin-bottom:20px;
`;

const ProductAmount=styled.div`
 font-size:50px;
 margin:5px;
`;
const ProductPrice=styled.div`
 font-size:50px;
 font-weight:300;
`;


;const Image=styled.img`
  width:131px;
  height:150px;
`;
const Details=styled.div`
  padding:20px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

const ProductName=styled.span``;

const ProductId=styled.span``;

const ProductColor=styled.div`
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color: ${(props) => (props.color)}
`;

const ProductSize=styled.span``;

const Hr=styled.hr`
 border:none;
 background-color: Crimson;
 height:1px;
`;



const Cart = () => {
    return (
        <Container>
            <Navebar />
            <Wrapper>
                <Title>Your Product List</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type = "Filled">CheckOut Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hashrail.sgp1.cdn.digitaloceanspaces.com/CND/Product/large/CS38_1.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b>Pink Cotten Saree</ProductName>
                                    <ProductId><b>ID:</b>131754879831</ProductId>
                                    <ProductColor color="Crimson"/>
                                    <ProductSize><b>size:</b>large</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IoAddCircle/>
                                    <ProductAmount>3</ProductAmount>
                                    <IoMdRemoveCircle />
                                </ProductAmountContainer>
                                <ProductPrice>15000Lkr</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://media.kreeva.com/catalog/product/cache/7c33e366a4697170fe16efe27689b88e/2/0/2041-1-min.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b>Green Short Top</ProductName>
                                    <ProductId><b>ID:</b>1316864879831</ProductId>
                                    <ProductColor color="#347C17"/>
                                    <ProductSize><b>size:</b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IoAddCircle/>
                                    <ProductAmount>1</ProductAmount>
                                    <IoMdRemoveCircle />
                                </ProductAmountContainer>
                                <ProductPrice>3000Lkr</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>500Lkr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>18000Lkr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-200Lkr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>18300Lkr</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
};

export default Cart