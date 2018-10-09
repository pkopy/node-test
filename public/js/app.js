const headers = {
  'Accept': 'application/json',
  'Authorization': 'token' 
}

fetch('http://localhost:3000/x').then((res) => res.json()).then((cities) => {
  let x = JSON.parse(cities)

  for(citi of x ){
    let div = document.createElement('div');
    div.innerHTML = citi.name;
    document.getElementsByTagName('body')[0].appendChild(div)

    console.log(citi.name)
  }
})