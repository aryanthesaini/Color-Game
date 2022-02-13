var colors= generateRandomColors(12);
var h1= document.querySelector("h1");
var squares= document.getElementsByClassName("square");
var pickedcolor = pickcolor();
var colordisplay= document.getElementById("colordisplay");
var messagedisplay= document.getElementById("message");
var resetButton= document.querySelector("#reset");
var easybtn= document.querySelector("#easyBtn");
var hardbtn= document.querySelector("#hardBtn");
var numsquares=6;
let triesCount=0;
easybtn.addEventListener("click",function()
{  
   numsquares=6;
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");
   colors= generateRandomColors(numsquares);
   pickedcolor= pickcolor();
   colordisplay.textContent=pickedcolor;
   for(var i =0; i<squares.length;i++)
   {
   	if(colors[i])
   	{
   		squares[i].style.backgroundColor=colors[i];
   	}
   	else
   	{
   		squares[i].style.display="none";
   	}
   }

});


hardbtn.addEventListener("click", function(){
	numsquares=12;
	  hardbtn.classList.add("selected");
      easybtn.classList.remove("selected");
       colors= generateRandomColors(numsquares);
      pickedcolor= pickcolor();
     colordisplay.textContent=pickedcolor;
	//  console.log(squares.length)
   for(var i =0; i<squares.length;i++)
   {
	//    console.log(colors[i])
   		squares[i].style.backgroundColor=colors[i];
   		squares[i].style.display="block";
   	
   }

})
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(numsquares);
	//pick a new random color
	pickedcolor=pickcolor();
	colordisplay.textContent= pickedcolor;
	//change colours
	for( var i=0; i<squares.length;i++ )
	{
       squares[i].style.backgroundColor= colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messagedisplay.textContent="";
})



colordisplay.textContent = pickedcolor;
for (var i=0; i<squares.length; i++)
{   //add initial colors
	squares[i].style.backgroundColor= colors[i];
	// add click listeners
	squares[i].addEventListener("click", function(){
		//grab color of picked square
       var clickedcolor = this.style.backgroundColor;
        //compare with the right color
        if (clickedcolor === pickedcolor)
        {
        	messagedisplay.textContent=`${triesCount} attempts`
        	changeColors(clickedcolor);
        	h1.style.backgroundColor= clickedcolor;
        	resetButton.textContent="Play again?"

        }
        else{
        this.style.backgroundColor="#232323";
		triesCount++;
        messagedisplay.textContent="Try again"; 
        }
	});
} 





function changeColors(color){

	//loop through all squares
	for( var i =0; i< colors.length; i++)
	{
		console.log(squares[i].style.backgroundColor)
		if(squares[i].style.backgroundColor!='rgb(35, 35, 35)')
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){

	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num){

	//make an array
	var arr= [];
	//add num random colors
	for(var i =0; i< num; i++)
	{
      arr.push(randomcolor());
	}
	//retun the array
	return arr;
}

function randomcolor(){
	//pick a red, green and blue from 0 to 255
     var r= Math.floor(Math.random()*256);
     var g= Math.floor(Math.random()*256);
     var b= Math.floor(Math.random()*256);
     return "rgb("+ r +", "+ g + ", " + b +")";
}
