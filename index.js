var typed = new Typed('#element', {
    strings: ['I am a devloper', '&amp; I am a programmer.'],
    typeSpeed: 60,
  });

  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    navbar.classList.add("sticky")
  }