var button = document.querySelector(".button-dark-theme");
var bodyVar = document.querySelector("body");
var yearVal = document.getElementById("year");

// set year for footer text
var currentYear = new Date().getFullYear();
yearVal.innerHTML = currentYear;

function toggleDarkTheme() {
  if (bodyVar.style.color == "#9B9B9B") {
    bodyVar.style.color = "#F6F6F6 !important";
    bodyVar.style.backgroundColor = "#181818 !important";
  }
  else {
    bodyVar.style.color = "#9B9B9B !important";
    bodyVar.style.backgroundColor = "none";
  }
  console.log("success");
}

// button.addEventListener("click", toggleDarkTheme, false);
