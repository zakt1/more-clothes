import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { MdRemove, MdAdd } from 'react-icons/md';


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
    
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 250;
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 20;
    font-size: 50px;
`
const AddCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
    
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    border: 1.5px solid teal;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;

    &:hover{
        background-color: #e1e1e1
    }
    
`

const SingleProduct = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dwcdd0ef87/images/zoom/G8NC5ZG7B9H_W0800_2.jpg?sw=1484&sh=1888&sm=fit" />
            </ImgContainer>
            <InfoContainer>
                <Title>Overpriced T-shirt</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia obcaecati at molestias reiciendis, omnis nemo nesciunt provident? Nesciunt perspiciatis non recusandae eveniet, mollitia dolore autem doloremque ea? Laudantium, enim.
                </Desc>
                <Price>£29</Price>
                <AddCartContainer>
                    <AmountContainer>
                        <MdRemove/>
                        <Amount>1</Amount>
                        <MdAdd/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddCartContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default SingleProduct