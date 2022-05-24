import React from 'react'
import styled from 'styled-components'

function Announcement() {
  return (
    <Container>
        Free Shipping on orders above Rs.499!
    </Container>
  )
}

export default Announcement

const Container = styled.div`
    background: teal;
    height:30px;
    color:white;
    text-align: center;
    font-weight:500;
    letter-spacing: 1.5px;
`