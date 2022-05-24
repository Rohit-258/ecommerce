import { SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"


function Navbar() {
  return (
    <Container>
      <Wrap>
        <Left>
          <Language>EN</Language>
          <Search>
            <Input />
            <SearchOutlined style={{color:"grey",fontSize:"17px"}}/>
          </Search>
        </Left>
        <Center>
          <Logo>DRIP.</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined/>
            </Badge>
          </MenuItems>
        </Right>
      </Wrap>
    </Container>
  );
}

export default Navbar

const Container = styled.div`
  height: 70px;
  padding: 5px 10px;
  ${mobile({height:"60px" })}
`;
const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.div`
    font-size:15px;
    cursor:pointer;
    ${mobile({display:"none"})}
`

const Search = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 20px;
  ${mobile({ marginLeft: "5px"  , padding: "2px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width:"50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align:center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:"2" , justifyContent:"center"})}
`;
const MenuItems = styled.div`
  margin-right: 15px;
  font-size: 15px;
  cursor: pointer;
  ${mobile({ marginRight: "10px",fontSize:"12px"})}
`;