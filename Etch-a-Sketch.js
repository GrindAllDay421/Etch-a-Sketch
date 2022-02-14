for(let i = 0; i < (16 * 16); i++) {
  const makeDiv = document.createElement('div');
  const hello = document.createTextNode('Hello World!');
  const container = document.getElementById('container');

  makeDiv.appendChild(hello);
  container.appendChild(makeDiv);
}