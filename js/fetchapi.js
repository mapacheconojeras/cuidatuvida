async function callUsers(){
     const data = await fetch("https://swapi.dev/api/planets/3/");
     console.log(data)
}