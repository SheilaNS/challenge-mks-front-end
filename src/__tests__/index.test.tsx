import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';
import { renderWithProvider } from '@/helpers/test/renderWithProvider';

describe('Teste do teste', () => {
  it('', () => {
    renderWithProvider(<Header />);

    const headind = screen.getByRole('button');

    expect(headind).toBeInTheDocument();
  });
});