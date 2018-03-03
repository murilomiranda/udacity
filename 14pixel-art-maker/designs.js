// When size is submitted by the user, call makeGrid()
function makeGrid(height, weight) {
  const table = document.getElementById("pixelCanvas");
  for(let i=0; i<height; i++){
    const row = table.insertRow(i);
    for(let j=0; j<weight; j++){
      row.insertCell(j).innerHTML = i+","+j;
    }
  }
}

// Select color input
let color = document.querySelector("#colorPicker").value;

// Select size input
function sizeInput() {
    const height = document.getElementById("inputHeight").value;
    const weight = document.getElementById("inputWeight").value;

    makeGrid(height, weight);
}
