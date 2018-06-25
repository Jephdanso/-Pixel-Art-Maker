//variable declarations
const table = document.getElementById("pixel_canvas");
const colorPicker = document.getElementById("colorPicker");
let gridHeight, gridWidth;

//draw the grid when submit button is clicked
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});


// functio to draws the grid based on the user input for grid height and width
 
function makeGrid() {

  //clear the existing table rows
  table.innerHTML = '';

  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;

  //draw table grid and add event listener for each cell
  let i = 0;
  while (i < gridHeight) {
    let row = table.insertRow(i);

    let j = 0; 
    while (j < gridWidth) {
      let cell = row.insertCell(j);

      //to change background color when user clicks
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });
	  
      j++; //increment
    }
    i++;  //increment
  }
}