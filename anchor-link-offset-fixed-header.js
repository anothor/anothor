// Offsetting an anchor to adjust for fixed header
//ref - https://www.geeksforgeeks.org/offsetting-an-anchor-to-adjust-for-fixed-header/

// Get the header element 
  var navbar = document.querySelector('nav'); 

  // Get the height of the navbar 
  var navbarHeight = navbar.offsetHeight; 
  document.querySelectorAll('a[href^="#"]') 
  .forEach(function (anchor) { 
    anchor.addEventListener('click',  
    function (event) { 
      event.preventDefault(); 

      // Get the target element that  
      // the anchor link points to 
      var target = document.querySelector( 
        this.getAttribute('href') 
      ); 
        
      var targetPosition = target 
        .getBoundingClientRect().top - navbarHeight; 

      window.scrollTo({ 
        top: targetPosition + window.pageYOffset, 
        behavior: 'auto' 
        // auto|smooth|initial|inherit
      }); 
    }); 
  });
