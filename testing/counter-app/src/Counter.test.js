import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('initial count is 0', () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('increments the count', async () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  await userEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('decrements the count', async () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  await userEvent.click(decrementButton);
  expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
});

test('resets the count', async () => {
  render(<Counter />);
  // First increment to make sure reset actually does something
  const incrementButton = screen.getByText(/Increment/i);
  await userEvent.click(incrementButton);
  
  const resetButton = screen.getByText(/Reset/i);
  await userEvent.click(resetButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
