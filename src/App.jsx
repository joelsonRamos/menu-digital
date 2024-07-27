
import React, { useState } from 'react';
import './App.css'
import styled from 'styled-components';
import ImageCarousel from './components/Carousel'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

const AppContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 1rem;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const categories = ['Bebidas', 'Lanches', 'Pratos Principais', 'Sobremesas'];

const products = [
  { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 'R$ 10,00', image: 'image1.jpg', category: 'Bebidas' },
  { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 'R$ 15,00', image: 'image2.jpg', category: 'Lanches' },
  // Adicione mais produtos aqui
];

function App() {

  const [selectedCategory, setSelectedCategory] = useState('Bebidas');

  const filteredProducts = products.filter(product => product.category === selectedCategory);
  return (
    <>
      <ImageCarousel />
      <Navbar categories={categories} onSelectCategory={setSelectedCategory} />
      <Content>
        <ProductList>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </Content>
    </>
  )
}

export default App
