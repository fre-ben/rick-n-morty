import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter } from "../../utils/api";
import { getCharacters } from "../../utils/api";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
  ];

  const container = createElement("div", {
    className: "char__list",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

// Character
export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(437),
  }),
];

//Characters
export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "char__list",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // 1) generate random character id
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

      function getRandomID(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      // Alternative für RandomID: Math.floor(Math.random() * 670) + 1;

      const randomID = getRandomID(1, 671);
      console.log(randomID);

      // 2) getCharacter from API
      const character = await getCharacter(randomID);
      console.log(character);
      // 3) create card
      const charCard = createCard(character);
      console.log(charCard);
      // 4) append card
      if (container.childNodes.length === 1) {
        container.append(charCard);
      } else {
        container.replaceChild(charCard, container.childNodes[1]);
      }

      // 5) make sure to only display one character
      // 6) feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "char__list",
    childs: [randomButton],
  });
  return container;
};
