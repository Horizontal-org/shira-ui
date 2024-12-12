import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'outline' | 'secondary'; 
}

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  ${({ theme, type }) => type === 'primary' && `
    color: ${theme.colors.light.white};
    background: ${theme.colors.blue7};
    border: 2px solid ${theme.colors.blue7};
    &:hover {
      background: ${theme.colors.blue8};
      border-color: ${theme.colors.blue8};
    }
    &:focus {
      background: ${theme.colors.blue8};
      border-color: ${theme.colors.blue4};
    }
  `}

  ${({ theme, type }) => type === 'outline' && `
    background: ${theme.colors.light.white};
    border: 1px solid ${theme.colors.dark.mediumGrey};
    color: ${theme.colors.dark.black};

    &:focus {
      border: 2px solid ${theme.colors.dark.mediumGrey};
    }
  `}

  ${({ theme, type }) => type === 'secondary' && `
    background: ${theme.colors.green7};
    border: 1px solid ${theme.colors.green7};
    color: ${theme.colors.light.white};
  `}
`

export const Button = ({ children, onClick, type = 'primary' }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className="button" type={type}>
      {children}
    </StyledButton>
  );
};