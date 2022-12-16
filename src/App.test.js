import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Architecture for Healthcare and Life Sciences applications/i);
  expect(linkElement).toBeInTheDocument();
});
