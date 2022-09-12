import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente', () => {
  it('Teste se as informações detalhadas do pokémon selecionado são mostradas', () => {
    renderWithRouter(<App />);

    const pokemonDetails = screen.getByRole('link', { name: /Details/i });
    expect(pokemonDetails).toBeInTheDocument();
    userEvent.click(pokemonDetails);

    const getPikachuDetails = screen.getByText('Pikachu Details');
    expect(getPikachuDetails).toBeInTheDocument();
    expect(pokemonDetails).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { level: 2, name: /Summary/i });
    expect(summary).toBeInTheDocument();

    const paragraph = screen.getByText(/This intelligent Pokémon roasts hard/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações', () => {
    renderWithRouter(<App />);

    const pokemonDetails = screen.getByRole('link', { name: /Details/i });
    expect(pokemonDetails).toBeInTheDocument();
    userEvent.click(pokemonDetails);

    const location = screen.getByRole('heading', { level: 2,
      name: /Game Locations of Pikachu/i });
    expect(location).toBeInTheDocument();

    const locationimage = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(locationimage).toHaveLength(2);
    expect(locationimage[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationimage[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const pokemonDetails = screen.getByRole('link', { name: /Details/i });
    expect(pokemonDetails).toBeInTheDocument();
    userEvent.click(pokemonDetails);

    const favoritePokemon = screen.getByLabelText('Pokémon favoritado?');
    expect(favoritePokemon).toBeInTheDocument();

    userEvent.click(favoritePokemon);
    const isMarked = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(favoritePokemon).toBeChecked();
    expect(isMarked).toBeInTheDocument();

    userEvent.click(favoritePokemon);
    expect(favoritePokemon).not.toBeChecked();
    expect(isMarked).not.toBeInTheDocument();
  });
});
