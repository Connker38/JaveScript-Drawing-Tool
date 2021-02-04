const clearButton = document.querySelector('.clear');                //variable to clear the canvas
const stroke_weight = document.querySelector('.stroke-weight');        //selects .stroke_weight from html
const color_picker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');                     //grabs the canvas tag from the HTML
const ctx = canvas.getContext('2d');
let isDrawing = false;                                               //set to false because we're not drawing straigt away. Going to use when start drawing

canvas.addEventListener('mousedown', start);                        // when we click inside the canvas going to call start function
canvas.addEventListener('mousemove', draw);                         // as soon as we start moving going to call draw function
canvas.addEventListener('mouseup', stop);                           // as soon as we stop clicking it will stop drawing.

clearButton.addEventListener('click', clearCanvas);                 //Clears canvas when clicking on clearButton        

function start (e) {                                                // e = the event we're going to pass through.
  isDrawing = true;                                                     
  draw(e);                                                          //this enables to draw as soon as you click to create dots.
}

function draw ({clientX: x, clientY: y}) {                           // destructure of the event to only get to stuff we want in the event.                
  if (!isDrawing) return;                                           // return to not do anything else
  ctx.lineWidth = stroke_weight.value;                              // whatever we change stroke-weight to on HTML will change here for now it's 3
  ctx.lineCap = "round";                                            // How the end of the line is going to look.
  ctx.strokeStyle = color_picker.value;                             // colour to set to - dark for now.

  ctx.lineTo(x, y);                                                  // x and y from the destructure
  ctx.stroke();                                                            
  ctx.beginPath();                                                  //create new path
  ctx.moveTo(x, y);                                                 //move to x and y position 
}

function stop () {                                          
  isDrawing = false;                                                // Can leave it as only this line if you want to make straight line join up in the future
  ctx.beginPath();                                                  //Creates new path so it does not continue from previous.
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);                 //this will clear the screen starting from 0 0 at the top left for the whole
}                                                                   //..canvas height and width

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;                               //This function will resize the canvas for any sized window.
}
resizeCanvas();