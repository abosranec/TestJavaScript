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