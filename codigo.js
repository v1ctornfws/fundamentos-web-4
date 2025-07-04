lista = [{
  username: "fernando",
  password: "fer.123",
  nivel: 1
},
{
  username: "raquel",
  password: "raq.123",
  nivel: 2
}
]
localStorage.setItem("datos", JSON.stringify(lista));
usuarios = JSON.parse(localStorage.getItem("datos"));
console.log(typeof (usuarios));


function logo() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUser = usuarios.find(user => user.username === username && user.password === password);
  if (!validUser) { return alert('Usuario y/o contraseña incorrectos!') }
  if (validUser.nivel === 1) {
    window.location.href = "admin.html";
  } else {
    window.location.href = "usuario.html";
  }
}