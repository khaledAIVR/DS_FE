import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header element', () => {
  render(<App />);
  const headerElement = screen.getByText(/A simple app/i);
  expect(headerElement).toBeInTheDocument();
});
