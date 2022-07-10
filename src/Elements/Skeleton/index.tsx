import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props extends HTMLAttributes<HTMLDivElement> {
  progress?: boolean;
  lineCount?: number;
}
const Skeleton: React.FC<Props> = ({
  children,
  lineCount = 1,
  progress = true,
  ...props
}) => {
  const lines = [];
  for (let index = 0; index < lineCount; index++) {
    lines.push(<Container {...props} key={index} />);
  }
  if (progress) return <div>{lines}</div>;

  return <> {children}</>;
};
export default Skeleton;
const progressKeyframes = keyframes`
   0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
    `;
const Container = styled.div`
  animation: ${progressKeyframes} 1.2s ease-in-out infinite;
  background-color: var(--color-gray6);
  background-image: linear-gradient(90deg, var(--color-gray6), var(--color-gray5), var(--color-gray6));
  background-size: 200px 100%;
  background-repeat: no-repeat;
  height: 1.5rem;
  width: 7rem;
  border-radius: 4px;
}
`;
