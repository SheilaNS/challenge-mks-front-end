import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { renderWithProvider } from './helpers/renderWithProvider';
import { Header } from '@/components/Header';

describe('ProductCard component', () => {
  beforeEach(() => renderWithProvider(<Header />));

  it('Has a cart button', async () => {
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('Opens the cartModal', async () => {
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);

    await waitFor(() => {
      const cartTitle = screen.getByText('Carrinho de compras');
      expect(cartTitle.innerHTML).toBe('Carrinho de compras');
    })
  });

  it('Has "Seu carrinho está vazio." text', async () => {
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);

    await waitFor(() => {
      const emptyCartText = screen.getByText('Seu carrinho está vazio.');
      expect(emptyCartText.innerHTML).toBe('Seu carrinho está vazio.');
    })
  });

  it('Has "Total:" and "R$0" texts in the screen', async () => {
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);

    await waitFor(() => {
      const totalText = screen.getByText('Total:');
      expect(totalText).toBeInTheDocument();
      expect(totalText.innerHTML).toBe('Total:');

      const priceText = screen.getByText('R$0');
      expect(priceText).toBeInTheDocument();
    })
  });

  it('Has a finish shopping button', async () => {
    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);

    await waitFor(() => {
      const finishShopButton = screen.getByText('Finalizar Compra');
      expect(finishShopButton).toBeInTheDocument();
      expect(finishShopButton.innerHTML).toBe('Finalizar Compra');
      expect(finishShopButton).not.toBeDisabled();
    })
  });
});
