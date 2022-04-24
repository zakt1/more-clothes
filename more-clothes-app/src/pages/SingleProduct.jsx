import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { MdRemove, MdAdd } from 'react-icons/md';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


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

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    
    const locObj = useLocation()
    const productId = locObj.pathname.split("/")[2]
    console.log(productId, '<< productId')

    useEffect(() => {
        const fetchProduct = async () => {
            const url =`http://localhost:5000/api/products/find/${productId}`
            // const url =`http://localhost:5000/api/products/find/62641d0ca04325d14cb2c009`
            try{
                const singleProdRes = await axios.get(url)
                console.log(singleProdRes.data, '<< singleProdres.data')
                setProduct(singleProdRes.data)

            }catch(err) {

            }
        }
        fetchProduct()
    }, [productId])

    const handleQuantChange = (change) => {
        if(change === "dec" ){
            quantity > 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }   
    }

    const handleCartClick = () =>{
        //  update cart contents
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>£{product.price}</Price>
                <AddCartContainer>
                    <AmountContainer>
                        <MdRemove onClick={() => handleQuantChange("dec")} />
                        <Amount>{quantity}</Amount>
                        <MdAdd onClick={() => handleQuantChange("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleCartClick}>ADD TO CART</Button>
                </AddCartContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default SingleProduct