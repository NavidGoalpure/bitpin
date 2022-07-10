import toast from 'react-hot-toast';

function ErrorToast(message: string, duration?: number) {
  return toast.error(
    message?.length > 0 ? message : 'Sorry! something went wrong. code 420',
    {
      style: {
        backgroundColor: 'var(--color-gray5)',
        color: 'var(--color-gray2)',
      },
      duration: duration || 8000,
    }
  );
}
export default ErrorToast;
