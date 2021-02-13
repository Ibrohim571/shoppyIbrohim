
$(document).ready(function() {
     $('.ikonka').hover(function() {
          $(this).removeClass('qaytaradigan');
          $(this).addClass('aylanadigan');
     },
     function() {
          $(this).removeClass('aylanadigan');
          $(this).addClass('qaytaradigan');
     })

     $('#name').hover(function() {
          $('#ism-ul').removeClass('kurinmas-ul');
          setTimeout(function() {
               $('#ism-ul').slideDown();
               }, 50)
     },
     function() {
          setTimeout(function() {
               $('#ism-ul').slideUp();
               }, 2800)
     })

     $('#lastName').hover(function() {
          $('#familiya-ul').removeClass('kurinmas-ul');
          setTimeout(function() {
               $('#familiya-ul').slideDown();
               }, 50)
     },
     function() {
          setTimeout(function() {
               $('#familiya-ul').slideUp();
               }, 2800)
     })
     
     $('#Email').hover(function() {
          $('#email-ul').removeClass('kurinmas-ul');
          setTimeout(function() {
               $('#email-ul').slideDown();
               }, 50)
     },
     function() {
          setTimeout(function() {
               $('#email-ul').slideUp();
               }, 2800)
     })
     
     $('#password').hover(function() {
          $('#password-ul').removeClass('kurinmas-ul');
          setTimeout(function() {
               $('#password-ul').slideDown();
               }, 50)
     },
     function() {
          setTimeout(function() {
               $('#password-ul').slideUp();
               }, 2800)
     })

     $('#tell').hover(function() {
          $('#telefon-ul').removeClass('kurinmas-ul');
          setTimeout(function() {
               $('#telefon-ul').slideDown();
               }, 50)
     },
     function() {
          setTimeout(function() {
               $('#telefon-ul').slideUp();
               }, 2800)
     })
})



window.addEventListener("scroll", function() {
     var navScroll = document.querySelector(".logo");
     navScroll.classList.toggle("display-none", window.scrollY > 50);

     var navScroll = document.querySelector("#navbar");
     navScroll.classList.toggle("display-none", window.scrollY > 50);
})
