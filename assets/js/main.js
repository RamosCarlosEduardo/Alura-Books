let menuIcon = document.querySelector(".cabecalho__menu-hamburguer")
let menu = document.querySelector(".cabecalho__menu")

menuIcon.addEventListener("click", () => {
	menu.classList.toggle("cabecalho__menu--active")
	menuIcon.classList.toggle("cabecalho__container__menu-icon--active")

})