import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renderiza campos do Login na página inicial', () => {
  render(<App />);

  const email =
    screen.queryByLabelText(/e-mail/i) ||
    screen.queryByPlaceholderText(/email/i) ||
    screen.queryByTestId('email');

  const senha =
    screen.queryByLabelText(/senha/i) ||
    screen.queryByPlaceholderText(/senha/i) ||
    screen.queryByTestId('senha');

  expect(email).toBeInTheDocument();
  expect(senha).toBeInTheDocument();
});
