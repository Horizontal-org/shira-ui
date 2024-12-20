import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'outline' | 'secondary';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  size?: string
}

interface StyledButtonProps {
  $type: 'primary' | 'outline' | 'secondary';
  $size?: string
  disabled?: boolean;
}

export const Button = ({ 
  text, 
  onClick, 
  type = 'primary',
  leftIcon,
  rightIcon,
  disabled = false,
  size = 'default'
}: ButtonProps) => {
  return (
    <StyledButton 
      onClick={onClick} 
      className="button" 
      $type={type}
      disabled={disabled}
      $size={size}
    >
      { leftIcon && <Left>{leftIcon}</Left>}
      <span>{ text }</span>
      { rightIcon && <Right>{ rightIcon }</Right>}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  border-radius: 100px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme, $type }) => $type === 'primary' && `
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

  ${({ theme, $type }) => $type === 'outline' && `
    background: ${theme.colors.light.white};
    border: 1px solid ${theme.colors.dark.mediumGrey};
    color: ${theme.colors.dark.black};

    &:focus {
      border: 2px solid ${theme.colors.dark.mediumGrey};
    }
  `}

  ${({ theme, $type }) => $type === 'secondary' && `
    background: ${theme.colors.green7};
    border: 1px solid ${theme.colors.green7};
    color: ${theme.colors.light.white};
  `}

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;    
  `}

  ${({ $size }) => $size === 'lg' && `
    width: 80%;
    justify-content: center;
  `}
`

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
`;

const Left = styled(SvgWrapper)`
  margin-right: 12px;
`;

const Right = styled(SvgWrapper)`  
  margin-left: 12px;
`;