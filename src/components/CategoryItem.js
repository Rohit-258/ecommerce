import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
    flex:1;
    height:70vh;
    margin:3px;
    position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height:"40vh" })}
`;
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
        
`
const Title = styled.h1`
    color: white;
    text-align:center;
    margin-bottom:20px;
`
const Button = styled.button`
    padding:10px;
    border:none;
    font-weight:600;
    color:grey;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}
            </Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem