const labelname = document.querySelector("h1");
labelname.addEventListener("click", function() {
    const name = prompt("What is your name");
    labelname.textContent = `Hello ${name} !`;
});