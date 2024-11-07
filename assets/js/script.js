document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector('.progress-bar');
  
  // Target width and animation duration
  const targetWidth = 40; // Target percentage
  const animationDuration = 1500; // Animation duration in milliseconds
  
  // Start the animation
  progressBar.style.width = targetWidth + '%';
  
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,             // Enables looping of slides
    margin: false,             // Space between slides
    nav: true,              // Shows navigation arrows
    dots: false,             // Shows pagination dots
    responsive: {
      0: {
        items: 1            // 1 item for screens 0px and up
      },
      600: {
        items: 2            // 2 items for screens 600px and up
      },
      1000: {
        items: 4            // 3 items for screens 1000px and up
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.content');

  tabLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove active class from all links and contents
          tabLinks.forEach(item => item.classList.remove('active'));
          contents.forEach(content => content.classList.remove('active'));

          // Add active class to the clicked link and corresponding content
          this.classList.add('active');
          const target = document.querySelector(this.getAttribute('data-target'));
          target.classList.add('active');
      });
  });
});

