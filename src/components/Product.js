import React from "react";
import styled from "styled-components";
import {FaGrinHearts, GrSearch, IoMdCart} from "react-icons/all";



const Info=styled.div`
  opacity:0;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  background-color: #FFDFDD;
  z-index:3;
  display: flex;
  align-items: center;
  justify-content: center;
   transition: all 0.7s ease;
   cursor: pointer;
`;


const Container=styled.div`
  flex:1;
  margin:5px;
  min-width: 280px;
  height:350px;
  display:flex;
  align-items: center;
  justify-content: center;
background-color:white;
  position: relative;
  
  &:hover ${Info}{
     opacity:1;
  }
`;

const Circle=styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: white;
   position:absolute;
   
`;

const Image=styled.img`
  height:75%;
  z-index: 2;
`;



const Icon=styled.div`
 
 width:40px;
 height:40px;
 border-radius:50%;
 background-color: #F9A7B0;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 10px;
 
 transition: all 0.7s ease;
 
 &:hover {
   background-color:#E30B5D;
   transform: scale(1.3);
 }
`;



const Product = ({item}) => {
    return(
        <Container>
             <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <IoMdCart />
                </Icon>
                <Icon>
                    <GrSearch />
                </Icon>
                <Icon>
                    <FaGrinHearts />
                </Icon>
            </Info>
        </Container>
    );

};

export default Product