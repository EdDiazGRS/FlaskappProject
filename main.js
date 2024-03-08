document.addEventListener("DOMContentLoaded", function() {
  
    document.getElementById("sports-link").addEventListener("click", function(event) {
      event.preventDefault();
      
      // Make an AJAX request to the '/sports' route
      fetch('/sports')
        .then(response => response.text())
        .then(data => {
          // Replace the content of the main section with the response from the server
          document.getElementById("main-content").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    });
    
    document.getElementById("knicks-link").addEventListener("click", function(event) {
      event.preventDefault();
      
      // Make an AJAX request to the '/knicks' route
      fetch('/knicks')
        .then(response => response.text())
        .then(data => {
          document.getElementById("main-content").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    });
  
  });