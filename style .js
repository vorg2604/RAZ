// Add event listener to hero button
document.querySelector('.hero button').addEventListener('click', function() {
    alert('Button clicked!');
  });
  
  // Add event listener to navigation links
  document.querySelectorAll('header nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });