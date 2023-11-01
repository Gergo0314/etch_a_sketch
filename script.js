const grid = document.querySelector(".grid");

let createDivs = (num) => {
  for (let i = 0; i < num; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  }
};
createDivs(16);
