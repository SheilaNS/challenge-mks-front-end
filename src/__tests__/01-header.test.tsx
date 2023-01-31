import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';
import { renderWithProvider } from './helpers/renderWithProvider';

describe('Header component', () => {
  beforeEach(() => renderWithProvider(<Header />));

  it('Is in the document', () => {
    const headind = screen.getByRole('banner');

    expect(headind).toBeInTheDocument();
  });

  it('Has a logo image', () => {
    const image = screen.getByRole('img', { name: 'MKS Sistemas logo image'});

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  it('Has one button', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});