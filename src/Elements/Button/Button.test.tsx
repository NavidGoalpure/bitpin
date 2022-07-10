import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '../../Utils/test-utils';
import { Button } from '.';

//👇 Imports a specific story for the test

////enable////
it('renders the button in the enable state', () => {
  render(<Button>Button</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Button');
});
////disable////
it('renders the button in the disable state', () => {
  render(<Button disabled={true}>Button</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
//////onClick ////////
it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Button</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
