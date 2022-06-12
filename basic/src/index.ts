import logoImg from "./content/samurai-logo.jpg";
import "./styles.scss";

const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = logoImg;
imgElement.alt = "Cyberpunk 2077 Samurai Logo";
imgElement.classList.add("logo");

document.querySelector("#img-container").appendChild(imgElement);