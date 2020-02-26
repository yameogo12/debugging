// my first javascript  

 A = "Always ";
	   B = "remenber: ";
	   document.write(A + B);
	   
	   X = "you ";
	   Y = "are ";
	   document.write(X + B);
	   
	   M = "unique, ";
	   N = "just like everyone else.";
	   document.write(N + M);
	   
function count_to_ten() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("counting_to_ten").innerHTML = Digit;
}


// still struggling with loops
function call_loop(){
		var str = "Happy Birthday";
	    var n= str.length;
		Text="";
		X=0;
	    while (X < 11) {
		     Text += "<br>" +X+": "+ str;
		     X++;
	}
	document.getElementById("loop").innerHTML = Text;
}

// all about loops

	var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
	var Content = "";
	var Y;
function for_loop(){
	for (Y = 0; Y < Instruments.length; Y++) {
		Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}
	
// all about Cats
function cat_pics(){
     var Cat_Picture = [];
     Cat_Picture[0] = "sleeping";
     Cat_Picture[1] = "playing";
     Cat_Picture[2] = "eating";	 
	 Cat_Picture[3] = "purring";
	 document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
     Cat_Picture[2] + ".";
}

// all about fruits and glowing stuff
function myFunction() {
  var text;
  var fruits = document.getElementById("myInput").value;

  switch(fruits) {
    case "Banana":
      text = "Banana is good!";
    break;
	case "Mango":
	  text = "Mangoes are tastfull!";
	break;
    case "Orange":
    text = "I am not a fan of orange.";
    break;
    case "Apple":
    text = "How you like them apples?";
    break;
    default:
    text = "I have never heard of that fruit...";
  }
  document.getElementById("demo").innerHTML = text;
}

 
// all about javascript and CANVAS  
function myFunction() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 80);
}

