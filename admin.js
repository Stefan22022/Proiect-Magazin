const produse = [
    aspirator = {
        id: 719,
        cod: 1,
        tehnologie: 'avansata',
        pret: 500,
        culoare: 'galben'
    },
    masca_de_scafadru = {
        id: 649,
        cod: 2,
        marime: ['s', 'm', 'l', 'xl'],
        culaore: 'alastru',
        pret: 50
    },
    termopan = {
        id: 274,
        cod: 3,
        straturi: 2,
        pret: 2000,
    },
    telefon = {
        id: 400,
        cod: 4,
        model: 'ultimul',
        pret: 10000,
        culoare: ['albastru', 'rosu','mov', 'galben'],
        ecran: 'ultraHD'
    }
]

let ok = 1;

function myFunction() {
    let x = document.getElementById("da");
    let y = document.getElementById("da1");
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
    let x = document.getElementById("da");
    let y = document.getElementById("da1");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

function adaugaElement() {
  let nume = document.getElementById("inputNume").value;
  let pret = document.getElementById("inputPret").value;
  let specs = document.getElementById("inputSpec").value;
document.getElementById("adauga").innerHTML += `
  <div class='conserva'>
    <h2>${nume}</h2>
    <h2>${pret}</h2>
    <h2><strong>${specs}</strong></h2>
  </div>
  `;
  if(ok === 0){
  $('.conserva').height(350);
  $('.conserva').width(200);
}
  if(ok === 2){
    $('.conserva').height(450);
    $('.conserva').width(300);
  }
const inputs = document.querySelectorAll('#inputNume, #inputPret, #inputSpec');

inputs.forEach(input => {
  input.value = '';
})
}

function schimbaL() {
  $('.conserva').height(450);
  $('.conserva').width(300);
  ok = 2;
}

function schimbaS() {
  $('.conserva').height(350);
  $('.conserva').width(200);
  ok = 0;
}

function schimbaM() {
  $('.conserva').height(400);
  $('.conserva').width(250);
  ok = 1;
}

function remove() {
  let x = document.getElementById('remove').value;
  console.log('x');
}
