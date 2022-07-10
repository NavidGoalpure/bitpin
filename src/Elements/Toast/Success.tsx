import toast from 'react-hot-toast';
import { MdCheckCircle } from 'react-icons/md';
import styled from 'styled-components/macro';

function SuccessToast(message: string, duration?: number) {
  return toast.success(message, {
    style: {
      backgroundColor: 'var(--color-gray5)',
      color: 'var(--color-gray2)',
      marginBottom: '2rem',
      direction: 'rtl',
    },
    icon: <StyledMdCheckCircle />,
    duration: duration || 4000,
  });
}
export default SuccessToast;
const StyledMdCheckCircle = styled(MdCheckCircle)`
  color: var(--color-success);
`;
