const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");

let createDivs = (num) => {
  for (let i = 0; i < num; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });

    reset.addEventListener("click", () => {
      cell.style.backgroundColor = "white";
    });
  }
};
createDivs(16);
