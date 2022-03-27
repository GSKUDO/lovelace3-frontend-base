function IDsearch(){  
  let ID = document.getElementById("ID").value;
  getText(`https://rickandmortyapi.com/api/character/${ID}`)
}


async function getText(link) {
  let myObject = await fetch(link);
  let myText = await myObject.text();
  var character = JSON.parse(myText);
  console.log(character);
}

