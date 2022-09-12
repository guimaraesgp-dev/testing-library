import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testes do componente', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const msgNoFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(msgNoFavorite).toBeInTheDocument();
  });
});
