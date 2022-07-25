$(document).ready(function(){
    var typed = new Typed('.element', {
        strings: ['Grow Your Skills To Advance Your Career Path.'],
smartBackspeed:true,
        typeSpeed: 50,
    //    backSpeed:40,
       loop: true,
      });

      $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoplay:true,
        center:true,
        autoplayTimeout:2000,
     });

});
gsap.from(".navbar-brand", { opacity: 0, duration: 1, delay: 0.5, y: -30 });
gsap.from(".navbar-nav", { opacity: 0, duration: 1, delay: 0.8, x: 40 });
gsap.from(".element", { opacity: 0, duration: 1, delay: 1.4, y: -90 });
gsap.from(".grow h3", { opacity: 0, duration: 1, delay: 1.7, y: -75 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -60 });
gsap.from(".Ui", { opacity: 0, duration: 1, delay: 2.4, y: -100 });
gsap.from(".hash", { opacity: 0, duration: 8, delay: 1.4, x: -300 });
gsap.from(".plar", { opacity: 0, duration: 8, delay: 1.4, x: -300 });