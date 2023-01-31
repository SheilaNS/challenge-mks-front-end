import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';
import { renderWithProvider } from './helpers/renderWithProvider';

// Teste criado para verificar o funcinamento do jest config
describe('Teste do teste', () => {
  it('', () => {
    renderWithProvider(<Header />);

    const headind = screen.getByRole('button');

    expect(headind).toBeInTheDocument();
  });
});