"use strict";

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
];

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

let i = 0;

function adaugaElement() {
  let nume = document.getElementById("inputNume").value;
  let pret = document.getElementById("inputPret").value;
  let specs = document.getElementById("inputSpec").value;
  if (nume==""||pret==""||specs=="") {
    alert('produs incomplet');
    
    const inputs = document.querySelectorAll('#inputNume, #inputPret, #inputSpec');
    inputs.forEach(input => {
    input.value = '';
    })
  }
  else 
  {
    ++i;
    const produse = document.getElementById('adauga');
    const conserva = document.createElement('DIV');
    conserva.setAttribute("class", "conserva");
    produse.appendChild(conserva);
    
    const remove = document.createElement('BUTTON');
    remove.setAttribute("class", "remove-item");
    remove.setAttribute("onclick", "stergeProd(this)");

    const numeHead = document.createElement('H2');
    const numeVal = document.createTextNode(nume); 
    numeHead.appendChild(numeVal);

    const pretHead = document.createElement('H2');
    const pretVal = document.createTextNode(pret.toString());
    pretHead.appendChild(pretVal);

    const specsHead = document.createElement('H2');
    const strong = document.createElement('STRONG');
    const specsVal = document.createTextNode(specs);
    specsHead.appendChild(strong);
    strong.appendChild(specsVal);

    conserva.appendChild(remove);
    conserva.appendChild(numeHead);
    conserva.appendChild(pretHead);
    conserva.appendChild(specsHead);

    conserva.setAttribute("id", i.toString());

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
    });
  }
}

function stergeProd(ok) {
  ok.parentNode.remove();
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

function alerta() {
  confirm('Te vei deconecta!');
}

function cautaProd() {
  let input, filter, conserva, a, i, txtValue;
  input = document.getElementById('cauta');
  filter = input.value.toUpperCase();
  conserva = document.getElementsByClassName('conserva');
  for (i = 0; i < conserva.length; i++) {
    a = conserva[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      conserva[i].style.display = "";
    } else {
      conserva[i].style.display = "none";
    }
  }
}  

