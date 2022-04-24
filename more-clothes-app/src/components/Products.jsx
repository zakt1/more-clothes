import { useEffect, useState } from "react";
import styled from "styled-components";
import { productsSample } from "../data";
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ category: categoryFilter} ) => {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // console.log(categoryFilter)

    
    useEffect(() => {
      const fetchProducts = async () => {
        const url = categoryFilter ? `http://localhost:5000/api/products?category=${categoryFilter}` : "http://localhost:5000/api/products?category"
        try{
          const productsRes = await axios.get(url)
          setFilteredProducts(productsRes.data)
        }catch(err){

        };
        
      };
      fetchProducts();
      
    }, [categoryFilter]);


  return (
    <Container>
        {filteredProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products