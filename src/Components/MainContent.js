import React from 'react';
import styled from 'styled-components';


function MainContent() {
  return (
    <main>
      <p>Welcome to my portfolio!</p>
    </main>
  );
}


const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MyButton = () => {
  return <StyledButton>Click Me</StyledButton>;
};

export default MainContent;

