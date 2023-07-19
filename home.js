
let i = 0;

function myFunction() {
    let x = document.getElementById('CritIn');
    let y = document.getElementById('CritOut');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }

 

function myFunction1() {
    let x = document.getElementById('pret');
    let y = document.getElementById('pop-up');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }

function changeStyle(){
    let element = document.getElementsByClassName("poza");
    element.style.width = "100px";
    element.style.height = "100px";
}

function adaugaProduse(){
  ++i;
  const produse = document.getElementById('prod');
  const produs = document.createElement('DIV');
  const div = document.createElement('DIV');
  const nr = document.createElement('H1');
  produs.setAttribute("id", i.toString());
  produse.appendChild(produs);
  produs.appendChild(div);
  div.appendChild(nr);
  
}

 
// let input = document.getElementById("remove");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("remove-product").click();
//   }
// });

const nrInput = document.getElementById("remove");
console.log(nrInput);

function stergeProduse() {
  const produse = document.getElementById('prod');
  const produs = document.getElementById(1);
  produse.removeChild(produs);
}


