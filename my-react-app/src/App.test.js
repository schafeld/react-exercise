import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "happy now"', () => {
  render(<App />);
  const textElement = screen.getByText(/happy now/i);
  expect(textElement).toBeInTheDocument();
});

test('renders greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/Hi there!/i);
  expect(greeting).toBeInTheDocument();
});