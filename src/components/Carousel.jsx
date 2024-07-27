import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  height: 200px;
`;

const Image = styled.img`
  height: 300px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
`;

const RestaurantName = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const ImageCarousel = () => (
  <Carousel showThumbs={false} autoPlay infiniteLoop>
    <CarouselContainer>
      <Image src="https://via.placeholder.com/800x600?text=Apresentação+1" alt="Slide 1" />
      <Overlay>
        <Logo src="https://via.placeholder.com/150x150?text=Logo" alt="Logo do Restaurante" />
        <RestaurantName>Nome do Restaurante</RestaurantName>
      </Overlay>
    </CarouselContainer>
    <CarouselContainer>
      <Image src="https://via.placeholder.com/800x600?text=Apresentação+2" alt="Slide 2" />
      <Overlay>
        <Logo src="https://via.placeholder.com/150x150?text=Logo" alt="Logo do Restaurante" />
        <RestaurantName>Nome do Restaurante</RestaurantName>
      </Overlay>
    </CarouselContainer>
    <CarouselContainer>
      <Image src="https://via.placeholder.com/800x600?text=Apresentação+3" alt="Slide 3" />
      <Overlay>
        <Logo src="https://via.placeholder.com/150x150?text=Logo" alt="Logo do Restaurante" />
        <RestaurantName>Nome do Restaurante</RestaurantName>
      </Overlay>
    </CarouselContainer>
  </Carousel>
);

export default ImageCarousel;
