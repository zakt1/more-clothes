import styled from 'styled-components';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e1dede;
    border-radius: 50%;
    display: flex; align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex; 
    align-items:center;
    background-color: #${props => props.bg};

    
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    
`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <MdKeyboardArrowLeft/>
        </Arrow>

        <Wrapper>
            <Slide bg="fcf1ed">
        <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
        </ImgContainer>
        <InfoContainer>
            <Title>EASTER SALE</Title>
            <Desc>GET 20% OFF FROM SELECTED SALE ITEMS!</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
            </Slide>
            <Slide bg="f5fafd">
        <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
        </ImgContainer>
        <InfoContainer>
            <Title>EASTER SALE</Title>
            <Desc>GET 20% OFF FROM SELECTED SALE ITEMS!</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <MdKeyboardArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider