const btnContainer = document.createElement("div");
const resetBtn = document.createElement("button");
const btnText = document.createTextNode("Reset");
const container = document.getElementById('container');
let gridSize = 16;
let numberOfColumns;

resetBtn.appendChild(btnText);
resetBtn.classList.add("resetBtnStyle");
btnContainer.appendChild(resetBtn);
btnContainer.classList.add("resetBtnContainer");
document.body.prepend(btnContainer);

const makeNewGrid = function() {
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  for(let gridItems = 0; gridItems < gridSize ** 2; gridItems++) {
    const makeDiv = document.createElement("div");
    makeDiv.onmouseover = function() {
      makeDiv.classList.add("hover");
    }
    container.appendChild(makeDiv);
  }
}

makeNewGrid();

const resetGrid = function() {
  container.replaceChildren();
  gridSize = 0;
  do {
    gridSize = window.prompt("Enter new grid size from 1-100: ");
  } while (gridSize < 1 || gridSize > 100);
  makeNewGrid();
}
resetBtn.addEventListener('click', resetGrid);