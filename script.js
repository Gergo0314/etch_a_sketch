const grid = document.querySelector(".grid");

function createDivs(num) {
  for (let i = 0; i < num; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    grid.appendChild(cell);
  }
}
createDivs(16);
