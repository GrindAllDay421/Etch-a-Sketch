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

const getRandNum = function() {
  let randNumRGB = Math.floor(Math.random() * 255);
  return randNumRGB;
}

const makeNewGrid = function() {
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  for(let gridItems = 0; gridItems < gridSize ** 2; gridItems++) {
    const makeDiv = document.createElement("div");
    const getColor = function() {
      makeDiv.style.backgroundColor = `rgb(${getRandNum()}, ${getRandNum()}, ${getRandNum()})`;
      makeDiv.removeEventListener("mouseover", getColor);
    }
    makeDiv.addEventListener("mouseover", getColor);
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