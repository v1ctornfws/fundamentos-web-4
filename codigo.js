lista=[{ 
      username:"fernando",
      password:"fer.123",
      nivel:1  
    },
    {
      username:"raquel",
      password:"raq.123",
      nivel:2  
      }
  ]
localStorage.setItem("datos",JSON.stringify(lista));
usuarios=JSON.parse(localStorage.getItem("datos"));
console.log(typeof(usuarios));


function logo(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username === "fernando" && password === "fer.123"){
    window.location.href = "admin.html";
  } else if(username === "raquel" && password === "raq.123"){
    window.location.href = "useruario.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}