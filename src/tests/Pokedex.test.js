import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Exercicio 5', () => {
  test('testa se a página contem o texto "Encountered pokémons"', () => {
    const { getByRole } = renderWithRouter(<App />);
    const h2 = getByRole('heading', { name: /Encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  test('Verifica a lista def pokemons', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const nextButton = getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);
    const charmander = getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
  });

  test('testando os botões de filtro', () => {
    const { getAllByTestId, getByRole, getByText } = renderWithRouter(<App />);
    const testIdButtons = getAllByTestId('pokemon-type-button');
    const psychic = getByRole('button', { name: /Psychic/i });
    expect(psychic).toBeInTheDocument();

    const allButton = getByRole('button', { name: /All/i });
    expect(allButton).toBeInTheDocument();

    userEvent.click(testIdButtons[4]);
    const alakazam = getByText(/Alakazam/i);
    expect(alakazam).toBeInTheDocument();
  });

  test('verifica se se existe um botão reset para os filtros', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const allButton = getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();

    userEvent.click(allButton);

    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
