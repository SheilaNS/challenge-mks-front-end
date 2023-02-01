import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProvider } from './helpers/renderWithProvider';
import ProductCard from '@/components/ProductCard';
import { products } from './data/products';

const productsData = products.products[0];

describe('ProductCard component', () => {
  beforeEach(() => renderWithProvider(<ProductCard {...productsData} />));

  it('Has the AirPods image', () => {
    const productImage = screen.getByRole('img', { name: 'AirPods'});

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src');
  });

  it('Has the products name "AirPods"', () => {
    const productName = screen.getByRole('heading', { level: 3, name: 'AirPods' });

    expect(productName).toBeInTheDocument();
  });

  it('Has the products price "R$1.200"', () => {
    const productPrice = screen.getByText('R$1.200');

    expect(productPrice).toBeInTheDocument();
  });

  it('Has the text "Redesigned from scratch and completely revised."', () => {
    const productCondition = screen.getByText('Redesigned from scratch and completely revised.');

    expect(productCondition).toBeInTheDocument();
    expect(productCondition.innerHTML).toBe('Redesigned from scratch and completely revised.');
    expect(typeof productCondition.innerHTML).toBe('string');
  });

  it('Has a "COMPRAR" button', () => {
    const buyButton = screen.getByRole('button', { name: "COMPRAR" });

    expect(buyButton).toBeInTheDocument();
  });
});
