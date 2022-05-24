import styled from 'styled-components'
import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {sliderItems} from "../data"
import {mobile} from "../responsive"

function SliderImg() {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
     if (direction === "left") {
       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
     } else {
       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
     }
   }; 
     
  

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrap slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
               {item.desc}
              </Desc>
              <Button>Shop Now.</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrap>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default SliderImg

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height:100%;
  flex:1;

`

const Image = styled.img`

  height:70%;
`
const InfoContainer = styled.div`
  flex:1;
  padding:50px;
`

const Title = styled.h1`
  font-size:70px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight:500;
  letter-spacing: 3px;
`
const Button = styled.button`
  background: transparent;
  cursor:pointer;
  padding: 20px;
  font-size:20px;
`













































































































































// import React from 'react'
// import Slider from "react-slick";
// import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function SliderImg() {

//     let settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//   return (
//     <Carousel {...settings}>
//       <Wrap>
//         <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/11/58d71b0e-b4a0-4eec-a5b2-032fd01fda861652253337736-unnamed--11-.jpg" />

//         {/* <Info>
//           <Title>SUMMER SALE</Title>
//           <Desc>
//             DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
//           </Desc>
//           <Button>Shop Now</Button>
//         </Info> */}
//       </Wrap>
//       <Wrap>
//         <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/11/c0f0ccd5-60c2-43e0-8428-8736958419e61652253337742-unnamed--10-.jpg" />

//         {/* <Info>
//           <Title>SUMMER SALE</Title>
//           <Desc>
//             DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
//           </Desc>
//           <Button>Shop Now</Button>
//         </Info> */}
//       </Wrap>
//     </Carousel>
//   );
// }

// export default SliderImg


// const Carousel = styled(Slider)`
//   margin-top: 25px;

//   // ul li button {
//   //   &:before {
//   //     font-size: 10px;
//   //     color: rgb(150, 158, 171);
//   //   }
//   // }
//   // li.slick-active button:before {
//   //   color: white;
//   // }
//   .slick-list {
//     overflow: visible;
//   }
//   button {
//     color: black;
//     z-index: 1;
//   }
// `;
// const Wrap = styled.div`
 
//   img {
//     width: 100%;
//     height: 50%;
//     object-fit: cover;
//   }
// `;


// // const Info = styled.div`
// // flex:1;
// // `;
// // const Title = styled.h2``
// // const Desc = styled.h4``
// // const Button = styled.button``
// // const Image = styled.div`
// //   display: flex;
// //   align-items: center;

// //   justify-content: center;
  
// // `
