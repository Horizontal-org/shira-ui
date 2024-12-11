import React from 'react';
import styled from 'styled-components';


export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
`

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className="button">
      {children}
    </StyledButton>
  );
};