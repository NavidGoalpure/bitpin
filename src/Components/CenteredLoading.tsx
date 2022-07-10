import React from 'react';
import styled, { CSSObject } from 'styled-components/macro';
import LoadingIcon from '../Elements/Loading';

/**
 * Primary UI component for user interaction
 */
interface Props {
  width?: number;
  height?: number;
  className?: string;
  style?: CSSObject;
}
export const CenteredLoading = ({ className, height, width, style }: Props) => {
  return (
    <LoadingContainer className={className} style={style}>
      <LoadingIcon height={height} width={width} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
