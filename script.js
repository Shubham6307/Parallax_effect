const text=document.querySelector("h1")
const bird=document.querySelector(".birds")
const land=document.querySelector(".land");

window.addEventListener("scroll", () => {
    let scroll=window.scrollY;
    text.style.marginTop = scroll*1.2+ "px";
    bird.style.left = scroll*1.1+ "px";
    land.style.top = scroll*1.2+ "px";

});