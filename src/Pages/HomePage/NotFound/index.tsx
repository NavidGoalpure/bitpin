import styled from 'styled-components';
import { device } from '../../../consts/device';
import { H2 } from '../../../Elements/Typo';

export function NotFound() {
  return (
    <Container>
      <Title>No pair exist</Title>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3.5rem;
  margin-bottom: 7.5rem;
`;
const Title = styled(H2)`
  font-weight: 600;
  line-height: 27px;
  font-size: 26px;
  color: var(--color-gray1);
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;
