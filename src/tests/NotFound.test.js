import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testes do componente', () => {
  test('É exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const h2NotFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(h2NotFound).toBeInTheDocument();
  });

  test('O atributo src da imagem é hhttps://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const notFoundImg = screen.getByRole('img', { name: /Pikachu crying/i });
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
