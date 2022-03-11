getText("https://simple-market-backend.herokuapp.com/aboutme")

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  var leodata = JSON.parse(myText);

  document.getElementById("greeting").innerHTML  = leodata.greeting;
  document.getElementById("aboutme").innerHTML  = leodata.aboutMe;
  document.getElementById("email").innerHTML  = leodata.email;
  document.getElementById("linkedin").innerHTML  = leodata.linkedin;
  document.getElementById("mobile").innerHTML  = leodata.mobileNumber;
}


