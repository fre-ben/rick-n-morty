export type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type APICharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APICharacter[];
};

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const result = (await response.json()) as APICharacter;
  const character = {
    imgSrc: result.image,
    name: result.name,
    status: result.status,
    species: result.species,
    origin: { name: result.origin.name },
  };
  return character;
}

export async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const result = (await response.json()) as APICharacters;
  const characters = result.results.map((apiCharacter) => ({
    imgSrc: apiCharacter.image,
    name: apiCharacter.name,
    status: apiCharacter.status,
    species: apiCharacter.species,
    origin: { name: apiCharacter.origin.name },
  }));
  return characters;
}
