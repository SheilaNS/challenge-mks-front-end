import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProvider } from './helpers/renderWithProvider';
import { Footer } from '@/components/Footer';

describe('Footer component', () => {
  beforeEach(() => renderWithProvider(<Footer />));

  it('Has the "MKS sistemas © Todos os direitos reservados" text', () => {
    const companyName = screen.getByText('MKS sistemas © Todos os direitos reservados');

    expect(companyName).toBeInTheDocument();
  });

});