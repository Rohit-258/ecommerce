import { Facebook, Instagram, LinkedIn, Mail, Map, Phone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #68a7ad;
  ${mobile({ flexDirection:"column" })}
`;
const Left = styled.div`
    flex:1;
    text-align:center;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p``
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.div`
margin-top:5px;
margin-left:15px;  
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display:"none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ margin:"5px 15px" , padding:"10px" })}
`;
const Contact = styled.div`

  display:flex;
  align-items: center; 
`;
const Address = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Number = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const MailId = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>DRIP.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          distinctio ex laborum, omnis facere perspiciatis illo fugit quibusdam
          enim eligendi aliquam architecto inventore in culpa.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Men</ListItems>
          <ListItems>Women</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>WishList</ListItems>
          <ListItems>Order</ListItems>
          <ListItems>Tracking</ListItems>
          <ListItems>Return/Replacement</ListItems>
        </List>
      </Center>
      <Right>
        <Contact>
          <Address>
            <Map style={{ marginRight: "10px" }} />
            Durgapur-12 , West Bengal ,India
          </Address>
        </Contact>
        <Contact>
          <Number>
            <Phone style={{ marginRight: "10px" }} />
            +91 - 9800258190
          </Number>
        </Contact>
        <Contact>
          <MailId>
            <Mail style={{ marginRight: "10px" }} />
            rohitsaha372@gmail.com
          </MailId>
        </Contact>
      </Right>
    </Container>
  );
}

export default Footer