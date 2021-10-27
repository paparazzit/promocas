let burger = document.querySelector("#burger");
let links = document.querySelector(".links");

burger.addEventListener("click", showMenu);

function showMenu() {
	links.classList.toggle("show");
}
