import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive";
import Footer from '../components/Footer'

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
    flex:1;
    
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight:600;
`
const Desc = styled.p`
    margin:25px 0;
`
const Price = styled.h2`
    font-weight:600;
`
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({ width: "50%" })}
`;
const Option = styled.option`
  display: flex;
  align-items: center;
`;

const AddContainer = styled.div`
  width: 50%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight:700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;

  margin: 0 5px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    font-weight:700;
    cursor:pointer;

    &:hover{
        background-color: teal;
        color:white;
    }
`

function Product() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780968/2020/4/3/11591b03-97f1-4907-b735-906984c4bcd61585905051096HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt1.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Shirt</Title>
          <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut amet ipsum deserunt facere! Cupiditate fuga eligendi recusandae molestiae aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            aspernatur excepturi sequi.
          </Desc>
          <Price>Rs. 900</Price>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
          <AddContainer>
              <AmountContainer>
                  <Remove/>
                  <Amount>2</Amount>
                  <Add/>
              </AmountContainer>
              <Button>Add To Cart</Button>
              <Button>Buy Now</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Product