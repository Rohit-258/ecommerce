import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
const Container = styled.div`
    height:60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size:50px;
    margin-bottom: 20px;
    letter-spacing:1px;
`
const Desc = styled.p`
  font-weight: 300;
  margin-bottom: 25px;
  font-size: 24px;
  ${mobile({ margin:"10px 15px", textAlign:"center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  border: 1px solid grey;
  justify-content: space-between;
  ${mobile({ width:"80%" })}
`;
const Input = styled.input`
    border:none;
    padding-left:20px;
    flex:8;
`
const Button = styled.button`
    flex:1;
    border:none;
    color:white;
    background-color:teal;
    cursor:pointer;
    
`
 

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Join our newsletter for updates and for many more exiting things! </Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter