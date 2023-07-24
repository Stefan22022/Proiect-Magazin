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

function schimbaL() {
  $('.conserva').height(450);
  $('.conserva').width(300);
}

function schimbaS() {
  $('.conserva').height(350);
  $('.conserva').width(200);
}

function schimbaM() {
  $('.conserva').height(400);
  $('.conserva').width(250);
}

const administatori = {
  username: 'username',
  password: 'password'
};

function dispare() {
document.getElementById("login").style.display ="none";
}

function verifica() {
  if(administatori.username === document.getElementById('username').value && administatori.password === document.getElementById('password').value){
    let element = document.getElementById("login");
    element.style.display ="block";}
    const inputs = document.querySelectorAll('#username, #password');
    
    inputs.forEach(input => {
      input.value = '';
    });
    
}

window.onload = function(){
  let id_ = produse[0].id;
  document.getElementById('1').textContent = id_;
};