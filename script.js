
const buttons = document.querySelectorAll("button");
const bg = document.getElementById("bg");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const color = e.target.id;
        bg.style.backgroundColor = color;
    });
});


