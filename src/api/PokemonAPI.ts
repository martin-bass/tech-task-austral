import { PokemonsFetching } from "../types/types";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function getPokemons(
  pokemonsQuantity: number
): Promise<PokemonsFetching[]> {
  const pokemonsParameters: AxiosRequestConfig = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pokemonsQuantity}`,
  };
  const response: AxiosResponse<{ results: PokemonsFetching[] }> = await axios(
    pokemonsParameters
  );
  const results = response.data.results;
  return results;
}
