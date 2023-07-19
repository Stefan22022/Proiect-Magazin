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