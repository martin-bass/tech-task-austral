export interface PokemonsFetching {
  name: string;
  url: string;
}

export interface Pokemon {
  id?: number;
  name?: string;
  image?: string;
  height?: number;
  weight?: number;
  experience?: number;
  skills?: Skills[];
}

export interface Skills {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Ability {
  name: string;
  url: string;
}
