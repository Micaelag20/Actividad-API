fetch('https://pokeapi.co')
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    console.log(data.sprites.front_default);
  })
  .catch(error => console.error('Error:', error));
