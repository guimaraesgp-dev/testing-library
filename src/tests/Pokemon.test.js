import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import { Pokemon } from '../components';

describe('Testes do componente', () => {
  test('verifica se o card do pokemon é renderizado na page', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const pokName = screen.getByTestId('pokemon-name');
    expect(pokName).toHaveTextContent('Pikachu');
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toHaveTextContent('Electric');
    const pokWeight = screen.getByTestId('pokemon-weight');
    expect(pokWeight).toHaveTextContent('Average weight: 6.0 kg');
    const pokImage = screen.getByAltText(/sprite/);
    expect(pokImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const pokStar = screen.getByAltText(/is marked as favorite/);
    expect(pokStar).toHaveAttribute('src', '/star-icon.svg');
  });
  test('verifica se o link te redireciona para a page mais detalhes', () => {
    const {
      history,
    } = renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      showDetailsLink
    />);
    const pokLink = screen.getByText('More details');
    expect(pokLink).toBeInTheDocument();
    userEvent.click(pokLink);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
});
