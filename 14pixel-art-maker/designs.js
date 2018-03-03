// When size is submitted by the user, call makeGrid()
function makeGrid(height, weight) {
  const table = document.getElementById("pixelCanvas");
  for(let i=0; i<height; i++){
    const row = table.insertRow(i);
    for(let j=0; j<weight; j++){
      row.insertCell(j);  //.innerHTML = i+","+j;
    }
  }

  // var tbody = '';
  // for(let i=0; i<height; i++){
  //   tbody += '<tr>';
  //   for(let j=0; j<weight; j++){
  //     tbody += '<td>';
  //     tbody += 'Cell ' + i + ',' + j;
  //     tbody += '</td>'
  //   }
  //   tbody += '</tr>\n';
  // }
  // document.getElementById("pixelCanvas").innerHTML = tbody;
}

// Select color input
let color = document.querySelector("#colorPicker").value;

// Select size input
var btn = document.querySelector('#submit');

btn.addEventListener('click', sizeInput);

function sizeInput() {
    const height = document.getElementById("inputHeight").value;
    const weight = document.getElementById("inputWeight").value;
    // alert(height +","+ weight);
    makeGrid(height, weight);
}
