function signupFunction() {
  alert("The form was submitted. Thanks for signing up!");
}

function userFunction() {
  document.getElementById("userDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function notiFunction() {
  document.getElementById("notiDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".noti-dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-noti");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
