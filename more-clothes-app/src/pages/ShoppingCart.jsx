import { MdAdd, MdRemove } from "react-icons/md"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "fill" && "none"};
    background-color: ${(props) => props.type === "fill" ? "black" :  "transparent"};
    color: ${(props) => props.type === "fill" && "white"};
`
const TopInfo = styled.div`
    
`
const Toptext = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
`
const Body = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;

`
const Image = styled.img`
    width: 200px;


`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const ProductID = styled.div`

`
const ProductName = styled.span`

`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
const ProductQuantContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
`
const ProductQuant = styled.div`
    font-size: 24px;
    margin: 5px;
    
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    
`
const SepL = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 20px;
    
    
    `

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
        
    `
const SummaryTitle = styled.h1`
    font-weight: 270;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`
const SummaryItemText = styled.span`
    

`
const SummaryItemPrice = styled.span`
    

`
const SummaryButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: teal;
    font-weight: 600;
    color: white;   

    
`

const ShoppingCart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR SHOPPING BASKET</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopInfo>
                    <Toptext>Shopping basket(2)</Toptext>
                    <Toptext>My wishlist</Toptext>
                    
                </TopInfo>
                <TopButton type="fill">PROCEED TO CHECKOUT</TopButton>
            </Top>
            <Body>
                <Info>
                    <Product>
                        <ProductDetails>
                             <Image src="https://tommy-europe.scene7.com/is/image/TommyEurope/DM0DM12479_YBR_alternate3?$main@2x$"/>
                                 <Details>
                                     <ProductName><b>Product:</b> TOMMY WHITE T-SHIRT</ProductName>
                                     <ProductID><b>ID:</b> 3429285395</ProductID>
                                 </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductQuantContainer>
                                <MdAdd/>
                                <ProductQuant>2</ProductQuant>
                                <MdRemove/>
                            </ProductQuantContainer>
                            <ProductPrice> £33 </ProductPrice>
                        </PriceDetails>
                    
                    </Product>

                    <SepL/>

                    <Product>
                        <ProductDetails>
                             <Image src="https://tommy-europe.scene7.com/is/image/TommyEurope/FM0FM04086_GXZ_main?$main@2x$"/>
                                 <Details>
                                     <ProductName><b>Product:</b> COMFY SUEDE LOAFERS</ProductName>
                                     <ProductID><b>ID:</b> 342928532345</ProductID>
                                 </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductQuantContainer>
                                <MdAdd/>
                                <ProductQuant>2</ProductQuant>
                                <MdRemove/>
                            </ProductQuantContainer>
                            <ProductPrice> £55 </ProductPrice>
                        </PriceDetails>
                    
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> £68</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice> £7.60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discounts Applied</SummaryItemText>
                        <SummaryItemPrice> - £7.60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Order Total</SummaryItemText>
                        <SummaryItemPrice> £57.40</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Body>
        </Wrapper>
    </Container>
  )
}

export default ShoppingCart