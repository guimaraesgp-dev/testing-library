import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testes do componente', () => {
  test('É exibido na tela um heading com h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);
    const textH2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(textH2).toBeInTheDocument();
  });

  test('O atributo src da imagem é https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    renderWithRouter(<About />);
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image).toHaveAttribute('src', src);
    expect(image).toBeInTheDocument();
  });
});
