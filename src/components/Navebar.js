import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import {MdShoppingCart} from "react-icons/all";


const Container = styled.div`
       height: 90px;
       background-color:#FC6C85;
`;

const Language = styled.span`
   font-size: 13px;
   cursor: pointer;
`


const Wrapper = styled.div`
   padding: 13px 31px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0px solid black;
    display: flex;
    align-items: center;
    margin-left:31px;
    padding: 5px;
`

const Input = styled.input`
border:none;
`

const Center = styled.div`
 flex:1;
 text-align: center;
`;

const Logo = styled.h1`
 font-weight: bold;
`

const Right = styled.div`
flex:1;
justify-content: flex-end;
`;






const Navebar = () => {
    return (
        <Container>
           <Wrapper>
               <Left>
                   <Language>Easy Get</Language>
                   <SearchContainer>
                      <Input />
                   </SearchContainer>
               </Left>
               <Center><Logo>Shoppy La</Logo></Center>
               <Right>
                   Cart Items
            <MdShoppingCart />
               </Right>
           </Wrapper>
        </Container>
    )
}

export default Navebar