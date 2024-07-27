import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 1rem;
  cursor: pointer;
`;

const Navbar = ({ categories, onSelectCategory }) => (
  <Nav>
    <Ul>
      {categories.map(category => (
        <Li key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </Li>
      ))}
    </Ul>
  </Nav>
);

export default Navbar;

