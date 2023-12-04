const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

console.log(loggedInLinks);
console.log(loggedOutLinks);

export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  }

};

export const loginCheckCart = (user) => {
  const btnAddToCart = document.querySelectorAll(".btn-add-cart");
  const cartContainers = document.querySelectorAll("#hide-cart");

  if (user) {
      btnAddToCart.forEach((btn) => {
          btn.style.display = "block"; // Mostrar el botón si el usuario está autenticado
      });

      cartContainers.forEach((container) => {
          container.style.display = "block"; // Mostrar el contenedor del icono del carrito si el usuario está autenticado
      });
  } else {
      btnAddToCart.forEach((btn) => {
          btn.style.display = "none"; // Ocultar el botón si el usuario no está autenticado
      });

      cartContainers.forEach((container) => {
          container.style.display = "none"; // Ocultar el contenedor del icono del carrito si el usuario no está autenticado
      });

      console.log("Icono del carrito oculto");
  }

  // Resto de tu código...
};

