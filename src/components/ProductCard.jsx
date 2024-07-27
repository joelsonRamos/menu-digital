import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem;
  padding: 1rem;
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p><strong>{product.price}</strong></p>
  </Card>
);

export default ProductCard;
