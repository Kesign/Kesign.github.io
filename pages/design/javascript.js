//Navbar
  //Nav left
  function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //Navbar animation
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topnav").style.top = "0";
    } else {
      document.getElementById("topnav").style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;
  }
//View Count
  const countEl = document.getElementById('count');

  updateVisitCount();

  function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/kesign.github.io/visits')
    .then(res => res.json())
    .then(res => {
      countEl.innerHTML = res.value;
    })
  }