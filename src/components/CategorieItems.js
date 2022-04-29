import React from "react";
import styled from "styled-components";

const Container = styled.div`
   flex:1;
   margin: 5px;
   height: 100vh;
   position:relative;
`;

const Image = styled.img`
     width: 70%;
     height: 70%;
`;

const Info = styled.div`
     position:absolute;
     top:0;
     left:0;
     width:100%;
     height:100%;
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content:center;
     
`;

const Title = styled.h1`
color:#8B4513;
margin-bottom:30px;

`;

const Button = styled.button`
    border:none;
     width:20%;
     height:10%;
    background-color:teal;
    color:black;
    cursor:pointer;
    font-weight:800;
`;

const CategorieItems = ({item}) => {
    return(
        <Container>
         <Image src={item.img} />

         <Info>
             <Title>{item.title}</Title>
             <Button>Select Now</Button>
         </Info>

        </Container>
    )

}
export default CategorieItems