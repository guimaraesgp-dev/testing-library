import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Exercicio 5', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    const { getByRole } = renderWithRouter(<App />);
    const headingh2 = getByRole('heading', { name: /Encountered pokémons/i });
    expect(headingh2).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo pokémon da lista...', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const nextButton = getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);
    const charmander = getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
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

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const allButton = getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();

    userEvent.click(allButton);

    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
