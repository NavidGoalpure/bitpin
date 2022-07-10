import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components/macro';
import LoadingIcon from '../Loading';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: 'PRIMARY' | 'SECONDARY' | 'NAKE';
  children: ReactNode;
  isLoading?: boolean;
}
export const Button = ({
  variant = 'PRIMARY',
  children,
  disabled = false,
  isLoading = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <Container
      type={type}
      variant={variant}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <LoadingIcon
          fill={variant === 'PRIMARY' ? 'white' : 'var(--color-primary)'}
        />
      ) : (
        children
      )}
    </Container>
  );
};

const Container = styled.button<{
  disabled: boolean | undefined;
  variant: 'PRIMARY' | 'SECONDARY' | 'NAKE';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  width: auto;
  height: 3.5rem;
  padding: 0 28px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
  transition: all 0.3s;
  ///////////////secondary button ///////////////////
  ${({ variant }) =>
    variant === 'SECONDARY' &&
    `background: var(--color-primary-light2);
border: 1px solid var(--color-primary-light1);
color:var(--color-primary);
`}
  ///////////////Nake button ///////////////////
  ${({ variant }) =>
    variant === 'NAKE' &&
    `background: transparent;
     border: none;
     color:var(--color-gray3);
     text-decoration: underline;
     padding:0;
`}
  //////////////disabled///////////////////////
  ${({ disabled, variant }) => {
    if (disabled && variant === 'PRIMARY')
      return `background-color:var(--color-primary-light1);`;
    if (disabled && variant === 'SECONDARY')
      return `color:var(--color-primary-light1);`;
  }}
  //////////////hover///////////////////////
    ${({ disabled, variant }) => {
    if (!disabled && variant === 'PRIMARY')
      return `:hover{background-color:var(--color-primary-dark);}`;
    if (!disabled && variant === 'SECONDARY')
      return `:hover{background-color:var(--color-primary);
      color:white;
      }`;
    if (!disabled && variant === 'NAKE')
      return `:hover{font-weight:bold;
      }`;
  }}
`;
// const StyledLoading = styled(Loading)<{
//   variant: 'PRIMARY' | 'SECONDARY';
// }>`
//   ///////////////primary button ///////////////////
//   ${({ variant }) =>
//     variant === 'PRIMARY' &&
//     `fill: white;
// `}
// `;
