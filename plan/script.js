document.getElementById("menu-btn").addEventListener("click", function() {
    var dropdown = document.getElementById("menu-dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });
  
  // Fermer le menu si l'utilisateur clique en dehors du menu
  window.addEventListener("click", function(event) {
    if (!event.target.matches('#menu-btn')) {
      var dropdown = document.getElementById("menu-dropdown");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  });
  