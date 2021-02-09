import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";

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
      childs: 
      characters.map(character => createCard(character))
    })

    return container;
}
  