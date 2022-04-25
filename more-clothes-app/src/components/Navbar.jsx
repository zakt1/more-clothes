import React from 'react'
import styled from 'styled-components'
// import { Search } from "@mui/icons-material" ;
import { MdSearch, MdOutlineShoppingCart } from 'react-icons/md';
import { Badge }  from '@material-ui/core'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { FaSearch } from 'react-icons/fa';





const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;

`
const Input = styled.input`
    border: none;

`

const Center = styled.div`
    flex: 1;
    text-align: center;
    

`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


const Navbar = () => {
    const cartQuantity = useSelector(state => state.cart.cartQuantity)

  return (
    <Container>
        <Wrapper> 
            <SearchContainer>
                <Input/>
                <MdSearch style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
            <Center><Logo>MORE CLOTHES</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem> SIGN IN</MenuItem>
                <Link to={"/cart"}>
                <MenuItem>
                <Badge badgeContent={cartQuantity} color="primary">
                <MdOutlineShoppingCart color="action" size={27} />
                </Badge>
                </MenuItem>
                </Link>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar