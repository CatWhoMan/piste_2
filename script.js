document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
  
    categories.forEach(category => {
      category.addEventListener("click", () => {
        const targetPage = category.getAttribute("data-page");
  
        // Ajout dâ€™un effet avant la redirection
        category.style.opacity = "0.5";
        setTimeout(() => {
          window.location.href = targetPage;
        }, 200); // 200ms pour un petit effet de fluiditÃ©
      });
    });
  });
  