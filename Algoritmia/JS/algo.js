// Problema 1
function problemaUno() {
  var p1_input = document.querySelector("#p1-input").value;
  var p1_array = p1_input.split(" ").reverse();
  var p1_res = "";

  p1_array.forEach(function (palabra, i) {
    if (i != 0 || i != p1_array.length) p1_res += " ";
    p1_res += palabra;
  });
  document.querySelector("#p1-output").textContent = p1_res;
}



function problemaDos() {

  
  let userX1 = document.querySelector("#p2-x1 ").value;
  let userX2 = document.querySelector("#p2-x2").value;
  let userX3 = document.querySelector("#p2-x3").value;
  let userX4 = document.querySelector("#p2-x4").value;
  let userX5 = document.querySelector("#p2-x5").value;
 
  
  let userY1 = document.querySelector("#p2-y1").value;
  let userY2 = document.querySelector("#p2-y2").value;
  let userY3 = document.querySelector("#p2-y3").value;
  let userY4 = document.querySelector("#p2-y4").value;
  let userY5 = document.querySelector("#p2-y5").value;


  let x = [];
  let y = [];


  x.push(userX1, userX2, userX3, userX4, userX5);
  y.push(userY1, userY2, userY3, userY4, userY5);


  x = x.map((x) => parseInt(x));
  y = y.map((y) => parseInt(y));


  const scalarProduct = (a, b) =>
    a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

  document.querySelector("#p2-output").textContent = scalarProduct(x, y);
}


function problema3() {
 
  var alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];

  var p3Input = document.querySelector("#p3-input").value;

  var p3Palabras = p3Input.split(",");


  p3Palabras = p3Palabras.map(function (palabras) {
    return palabras.replace(/\s/g, "").toUpperCase();
  });

  var p3Respuesta = "";


  p3Palabras.forEach(function (palabra, i) {
    var letrasUnicas = [];
    var palabraArray = palabra.split("");

    alfabeto.forEach((letra, j) => {

      
      palabraArray.forEach(function (letrasPalabras, k) {
 
        
        if (letrasPalabras == letra) {

          
          if (letrasUnicas.indexOf(letra) < 0) {
            letrasUnicas.push(letra);
          }
        }
      });
    });
   
    
    p3Respuesta += "Palabra: " + palabra + "=" + letrasUnicas.length + "\n";
  });
 
  
  document.querySelector("#p3-output").textContent = p3Respuesta;
}
