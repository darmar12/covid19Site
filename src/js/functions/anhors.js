(function(){
  const anchors = document.querySelectorAll('.header__link, .footer__link');
  const headerNav = document.querySelectorAll('.header__item');
  for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      if(anchor.classList.contains('header__link')) {
          headerNav.forEach(element => {
              element.classList.remove('active');
          });
          anchor.parentElement.classList.add('active');
      };
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
      if(goto !== '#') {
          document.querySelector(goto).scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      }
    });
  };
})();