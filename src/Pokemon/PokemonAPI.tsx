export const getPokemon = (color: string) => {
  return fetch('https://pokeapi.co/api/v2/pokemon-color/' + color, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
};
