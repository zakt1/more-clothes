import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-style: 20px;
    font-weight: 650;
`
const SelectFilter = styled.select`
`
const SelectSort = styled.select`
    
`
const Option = styled.option`
    
`

const ProductsList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>T-shirts</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Items</FilterText>
            <SelectFilter>
                <Option disable selected>
                    size
                </Option>
                
            </SelectFilter>
                </Filter>
            <Filter><FilterText>Sort Items</FilterText></Filter>
            

        </FilterContainer>
        <Products/>

    </Container>
  )
}

export default ProductsList