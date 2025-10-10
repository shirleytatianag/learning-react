import {useCounter} from "../hook/useCounter.tsx";
import {usePokemon} from "../hook/usePokemon.tsx";

export const PokemonPage = () => {
  const {counter, increment, decrement} = useCounter(1);
  const {pokemon, isLoading, formattedId} = usePokemon({id: counter})

  if (isLoading) {
    return (<div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Cargando...</h3>
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-white"
             role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon?.name}</h3>
      <img
        src={pokemon?.imageUrl}
        alt={pokemon?.name}
      />

      <div className="flex gap-2">

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={decrement}>
          Anterior
        </button>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
          Siguiente
        </button>

      </div>
    </div>
  );
};