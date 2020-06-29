import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/RESTy/i);
  expect(linkElement).toBeInTheDocument();
});
it('renders main', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('URL :');
  expect(linkElement).toBeInTheDocument();
});
it('renders footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/code/i);
  expect(linkElement).toBeInTheDocument();
});