var myObj = {
	obj1: 1,
	obj2: "aaa",
	obj3: true,
	setObj1:function(obj1){
		this.obj1 = obj1;
	},
	getObj1:function(){
		return this.obj1;
	}
};
//debugger;
for(var obj in myObj){
	document.writeln(""+obj);
}
myObj.setObj1(4);
document.writeln(myObj.getObj1());
var logo = document.body.querySelector(".icon");
logo.src = "knead.gif";

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.strokeRect(0,0,70,70);
var image = new Image();
image.src = "popcorn.gif";
//ctx.drawImage(image,100,0);
image.onload = function(){
ctx.drawImage(image, 0, 0);}

//reaction on change
'use strict'
var input1 = document.getElementById("input1");
var output1 = document.getElementById('output1');
function setDouble(input){
	return input * 2;
}
input1.value = 2;
output1.value = 2;
output1.value = setDouble(input1.value);
document.writeln(myObj.getObj1());
input1.onchange = function(){
	output1.value = setDouble(input1.value);
}
output1.value;