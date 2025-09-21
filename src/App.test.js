import { render } from '@testing-library/react';
import App from './App';

test('App renderiza sem quebrar', () => {
  render(<App />);
});
