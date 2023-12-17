import { useEffect, useState } from "react";
import { getPokemons } from "../api/PokemonAPI";

//Styles
import "./PokemonList.css";

import { Pokemon } from "../types/types";
import axios from "axios";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
} from "@ionic/react";

function PokemonList() {
  const [pokemonData, setPokemondata] = useState<Pokemon[]>([]);
  const [morePokemons, setMorePkemons] = useState<number>(20);

  const loadPokemons = async () => {
    const res = await getPokemons(morePokemons);
    const pokemonFetching = await Promise.all(
      res.map(async (pokemon) => {
        const response = await axios(pokemon.url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          height: response.data.height,
          weight: response.data.weight,
          experience: response.data.base_experience,
          skills: response.data.abilities,
        };
      })
    );

    // Ordenar de manera aleatoria antes de establecer el estado
    const randomizedPokemonData = pokemonFetching.sort(
      () => Math.random() - 0.5
    );
    setPokemondata(randomizedPokemonData);
  };

  useEffect(() => {
    loadPokemons();
  }, [morePokemons]);

  return (
    <IonGrid className="IonGrid">
      <IonRow>
        {pokemonData.map((pokemon) => (
          <IonCol key={pokemon.id} size="12" size-md="6" size-lg="3">
            <IonCard className="IonCard">
              <IonImg
                alt={pokemon.name}
                src={pokemon.image}
                className="IonImg"
              />
              <IonCardHeader className="IonCardHeader">
                <IonCardTitle>{pokemon.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="IonCardContent">
                <p>
                  Weight:<span> {Number(pokemon.weight) / 10} Kg.</span>
                </p>
                <p>
                  Experience:<span> {pokemon.experience}</span>
                </p>
                <p>
                  Height:<span> {Number(pokemon.height) * 10} cm.</span>
                </p>
                <p>
                  Skills:
                  <span>
                    {" "}
                    {pokemon.skills
                      ?.map((skill) => skill.ability.name)
                      .join(" | ")}
                  </span>
                </p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
      <div className="IonButton">
        <IonButton
          color="medium"
          onClick={() => setMorePkemons(morePokemons + 20)}
        >
          Load More Pokemons
        </IonButton>
      </div>
    </IonGrid>
  );
}

export default PokemonList;
