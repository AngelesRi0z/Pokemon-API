fetch('https://pokeapi.co/api/v2/pokemon/25/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('pokemon1')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p> Altura:${pokemon.height}<p><p> Peso: ${pokemon.weight}<p><p>ID: ${pokemon.id}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/12/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('pokemon2')
  element2.innerHTML = `<p> Nombre: ${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>Altura: ${pokemon2.height}<p><p> Peso: ${pokemon2.weight}<p><p>ID: ${pokemon2.id}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/6/')
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('pokemon3')
  element3.innerHTML = `<p> Nombre: ${pokemon3.name}<p>
  <img src='${pokemon3.sprites.front_default}'><p>Altura: ${pokemon3.height}<p><p> Peso: ${pokemon3.weight}<p><p>ID: ${pokemon3.id}<p>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/29/')
.then(response => response.json())
.then(pokemon4 => {
  let element4 = document.getElementById('pokemon4')
  element4.innerHTML = `<p> Nombre: ${pokemon4.name}<p>
  <img src='${pokemon4.sprites.front_default}'><p>Altura: ${pokemon4.height}<p><p> Peso: ${pokemon4.weight}<p><p>ID: ${pokemon4.id}<p>`;
  console.log(pokemon4)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/85/')
.then(response => response.json())
.then(pokemon5 => {
  let element5 = document.getElementById('pokemon5')
  element5.innerHTML = `<p> Nombre: ${pokemon5.name}<p>
  <img src='${pokemon5.sprites.front_default}'><p>Altura: ${pokemon5.height}<p><p> Peso: ${pokemon5.weight}<p><p>ID: ${pokemon5.id}<p>`;
  console.log(pokemon5)
})
.catch(err=>console.log(err))