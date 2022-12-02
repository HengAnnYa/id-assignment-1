function validateSubmit() {
  alert("Your form has been submitted. Thanks for signing up!");
}

function postFunction() {
  alert("Post successful.");
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

function hamburgerFunction() {
  var x = document.getElementById("mySidebar");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}
