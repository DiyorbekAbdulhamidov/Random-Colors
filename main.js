const boxes = document.querySelectorAll(".cboxes");
const yozuv = document.querySelector("h1");
const btn = document.querySelector("button");
const sec = document.querySelector("section");


function randomHex() {
    return '#' + Math.random().toString(16).substring(2, 8);
}

boxes.forEach(box => {
    let colors = box.style.background = randomHex();
    box.addEventListener("click", () => {
        setTimeout(() => {document.body.style.background = colors;}, 50);
        yozuv.innerText = `Siz tanlagan rang: ${colors}`;
        yozuv.style.color = "white";
    });
});

btn.addEventListener("click", () => {
    location.reload();
});

