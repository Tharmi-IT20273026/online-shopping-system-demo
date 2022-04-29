
import React, {useState} from "react";
import styled from "styled-components";
import {TiArrowLeftThick, TiArrowRightThick} from "react-icons/all";
import Home from "../pages/Home";



const Container = styled.div`
   width: 100%;
   height:100vh;
   display: flex;
   overflow:hidden;
    position:relative;
`;
const Arrow = styled.div`
  width:50px;
  height: 50px;
  background-color: grey;
  border-radius:50%;
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor:pointer;
  opacity:1.5;
  z-index:2;
`;

const Wrapper = styled.div`
height: 100%;
display:flex;
transition:all 1.3s ease;
transform:translateX(${(props) =>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  background-color: #${props => props.bg};
`;
const ImgContainer  = styled.div`
  flex:1;
  height:100%;
`;

const Image = styled.img`
height:80%;
`;

const InfoContainer = styled.div`
flex:1;
padding: 15%;
`;


const Title = styled.h1`
font-size:70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding:13px;
font-size:20px;
background-color: teal;
cursor: pointer;
`;


const Slider=() =>{

    const [slideIndex, setSlideIndex] = useState(0);
    const handleclick = (direction) => {
        if (direction==="left"){
            slideIndex(slideIndex >0 ? slideIndex -1 : 2);
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleclick("left")}>
             <TiArrowLeftThick />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide bg="f5fafd" >
               <ImgContainer>
                   <Image src="https://clipart.world/wp-content/uploads/2020/11/Hello-Spring-clipart.png" />
               </ImgContainer>
                <InfoContainer>
                    <Title>Spring Sale</Title>
                    <Desc>hey guys come fast!!!!!!</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
                </Slide>

                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src="https://p.kindpng.com/picc/s/19-198033_summer-clipart-png-transparent-png.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>hey guys come fast!!!!!!</Desc>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>

                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src="https://media.istockphoto.com/vectors/hello-winter-vectorred-cardinal-on-leaves-wreath-illustration-hand-vector-id1278882521?k=20&m=1278882521&s=612x612&w=0&h=SohoD1xWc3d53eTtCAjS-NryzrCcXXiw1_90cg4wdoQ=" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Winter Sale</Title>
                        <Desc>hey guys come fast!!!!!!</Desc>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>

            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleclick("right")}>
             <TiArrowRightThick />
            </Arrow>
        </Container>

    )

}
export default Slider