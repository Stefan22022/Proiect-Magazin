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
  console.log(pret);
  if (nume==""||pret==""||specs=="") {
    alert('produs incomplet');
    const inputs = document.querySelectorAll('#inputNume, #inputPret, #inputSpec');
  inputs.forEach(input => {
    input.value = '';
  })
  }
  else 
  {
  const produse = document.getElementById('adauga');
  const conserva = document.createElement('DIV');
  conserva.setAttribute("class", "conserva");
  produse.appendChild(conserva);
  
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

  conserva.appendChild(numeHead);
  conserva.appendChild(pretHead);
  conserva.appendChild(specsHead);

  if(ok === 0){
  $('.conserva').height(350);
  $('.conserva').width(200);
}
const inputs = document.querySelectorAll('#inputNume, #inputPret, #inputSpec');

inputs.forEach(input => {
  input.value = '';
})
}
}

function schimbaM() {
  $('.conserva').height(450);
  $('.conserva').width(300);
  ok = 1;
}

function schimbaS() {
  $('.conserva').height(350);
  $('.conserva').width(200);
  ok = 0;
}

function remove() {
  let x = document.getElementById('remove').value;
  console.log('x');
}
