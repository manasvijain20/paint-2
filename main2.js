//var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
var width = screen.width;
var height = screen.height;
new_width = screen.width-70;
new_height = screen.height-300;
if (width<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas = document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
color = "black"; line_of_width = 1;
/*canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    line_of_width=document.getElementById("width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mousex = e.clientX-canvas.offsetLeft;

current_position_of_mousey = e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_of_width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mousex, current_position_of_mousey);
    ctx.stroke();
}
last_position_of_x=current_position_of_mousex;
last_position_of_y=current_position_of_mousey;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
  mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}*/
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
 console.log("mytouchstart");
 color=document.getElementById("color").value;
 line_of_width=document.getElementById("width").value;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    console.log("touchmove");
    ctx.strokeStyle=color;
    ctx.lineWidth=line_of_width;
    console.log("last position of x"+last_position_of_x);
    console.log("last position of y"+last_position_of_y);
    console.log("current position of y"+current_position_of_touch_y);
    console.log("current position of x"+ current_position_of_touch_x)
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke(); 
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);}