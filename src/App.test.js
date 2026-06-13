// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinMine title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinMine/i);
    expect(titleElement).toBeInTheDocument();
});
