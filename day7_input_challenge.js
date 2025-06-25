\\login system
let userName=prompt("Enter the userName:");
let password=prompt("Enter the Password:");

if(userName==="admin" && password==="1234"){
    alert("Login Successful")
}
else{
    alert("Invalid credentials")
}


\\colour picker
let color = prompt("What is your favorite color?");
color = color.toLowerCase(); // handle capital letters

if (color === "blue") {
  alert("Cool! Blue is calming.");
} else if (color === "red") {
  alert("Wow! Red is fiery!");
} else {
  alert("Nice! That's a unique color.");
}
