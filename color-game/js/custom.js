
// Use to take random value for first color box
var a = Math.ceil(Math.random() * 256);
var b = Math.ceil(Math.random() * 10);
var c = Math.ceil(Math.random() * 100);
document.getElementById("color-1").style.backgroundColor="rgb("+a+","+b+","+c+")";
var col = document.getElementById("color-1").style.backgroundColor;


// Use to take random rgb to relevant box 
var x = Math.ceil(Math.random() * 0 );
var y = Math.ceil(Math.random() * 100 );
var z = Math.ceil(Math.random() * 256 );
document.getElementById("color-2").style.backgroundColor="rgb("+x+","+y+","+z+")";
var col1 = document.getElementById("color-2").style.backgroundColor;


// Use to take random rgb to relevant box 
var p = Math.ceil(Math.random() * 10 );
var q = Math.ceil(Math.random() * 256 );
var r = Math.ceil(Math.random() * 200 );
document.getElementById("color-3").style.backgroundColor="rgb("+p+","+q+","+r+")";
var col2 = document.getElementById("color-3").style.backgroundColor;


// Use to take random rgb to relevant box 
var a1 = Math.ceil(Math.random() * 100 );
var a2 = Math.ceil(Math.random() *150 );
var a3 = Math.ceil(Math.random() * 250 );
document.getElementById("color-4").style.backgroundColor="rgb("+a1+","+a2+","+a3+")";
var col3 = document.getElementById("color-4").style.backgroundColor;


// Use to take random rgb to relevant box 
var b1 = Math.ceil(Math.random() * 250 );
var b2 = Math.ceil(Math.random() * 150 );
var b3 = Math.ceil(Math.random() * 100 );
document.getElementById("color-5").style.backgroundColor="rgb("+b1+","+b2+","+b3+")";
var col4 = document.getElementById("color-5").style.backgroundColor;


// Use to take random rgb to relevant box 
var c1 = Math.ceil(Math.random() * 200 );
var c2 = Math.ceil(Math.random() * 30 );
var c3 = Math.ceil(Math.random() * 200 );
document.getElementById("color-6").style.backgroundColor="rgb("+c1+","+c2+","+c3+")";
var col5 = document.getElementById("color-6").style.backgroundColor;



/* taking random number between 0 to 6  */

var def;
var x = Math.floor(Math.random() * 6);

/* Comparing each value with color box rgb */

if(x==0){
document.getElementById("codeId").innerHTML = col+";";
def = col;
}

if(x==1){
document.getElementById("codeId").innerHTML = col1+";";
def = col1;
}

if(x==2){
document.getElementById("codeId").innerHTML = col2+";";
def = col2;
}

if(x==3){
document.getElementById("codeId").innerHTML = col3+";";
def = col3;
}

if(x==4){
document.getElementById("codeId").innerHTML = col4+";";
def = col4;
}

if(x==5){
document.getElementById("codeId").innerHTML = col5+";";
def = col5;
}

/* value compared  */

//alert(x);

/* function to check which box rgb match with code rgb */
function checkColor(){
	if(def == col){
    	alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-2").css({"background-color":col,"transition":"all .5s ease"});
        $("#color-3").css({"background-color":col,"transition":"all .6s ease"});
        $("#color-4").css({"background-color":col,"transition":"all .7s ease"});
        $("#color-5").css({"background-color":col,"transition":"all .8s ease"});
        $("#color-6").css({"background-color":col,"transition":"all .9s ease"});
    }
    else{
    	$("#color-1").css({"background":"transparent","transition":"background .5s ease"})
    }
}

function checkColor1(){
	if(def == col1){
    	alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col1,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-1").css({"background-color":col1,"transition":"all .5s ease"});
        $("#color-3").css({"background-color":col1,"transition":"all .6s ease"});
        $("#color-4").css({"background-color":col1,"transition":"all .7s ease"});
        $("#color-5").css({"background-color":col1,"transition":"all .8s ease"});
        $("#color-6").css({"background-color":col1,"transition":"all .9s ease"});
    }
    else{
    	$("#color-2").css({"background":"transparent","transition":"background .5s ease"})
    }    
}

function checkColor2(){
	if(def == col2){
    	alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col2,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-1").css({"background-color":col2,"transition":"all .5s ease"});
        $("#color-2").css({"background-color":col2,"transition":"all .6s ease"});
        $("#color-4").css({"background-color":col2,"transition":"all .7s ease"});
        $("#color-5").css({"background-color":col2,"transition":"all .8s ease"});
        $("#color-6").css({"background-color":col2,"transition":"all .9s ease"});
    }
    
    else{
    	$("#color-3").css({"background":"transparent","transition":"background .5s ease"})
    }
}

function checkColor3(){
    if(def == col3){
        alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col3,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-1").css({"background-color":col3,"transition":"all .5s ease"});
        $("#color-2").css({"background-color":col3,"transition":"all .6s ease"});
        $("#color-3").css({"background-color":col3,"transition":"all .7s ease"});
        $("#color-5").css({"background-color":col3,"transition":"all .8s ease"});
        $("#color-6").css({"background-color":col3,"transition":"all .9s ease"});
    }
    
    else{
        $("#color-4").css({"background":"transparent","transition":"background .5s ease"})
    }
}

function checkColor4(){
    if(def == col4){
        alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col4,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-1").css({"background-color":col4,"transition":"all .5s ease"});
        $("#color-2").css({"background-color":col4,"transition":"all .6s ease"});
        $("#color-3").css({"background-color":col4,"transition":"all .7s ease"});
        $("#color-4").css({"background-color":col4,"transition":"all .8s ease"});
        $("#color-6").css({"background-color":col4,"transition":"all .9s ease"});
    }
    
    else{
        $("#color-5").css({"background":"transparent","transition":"background .5s ease"})
    }
}

function checkColor5(){
    if(def == col5){
        alert("Congratulation ! You WON !!");
        $(".display-color").css({"background-color":col5,"transition":"all 1s ease"});
        $("code").css({"color":"white"});
        $("#color-1").css({"background-color":col5,"transition":"all .5s ease"});
        $("#color-2").css({"background-color":col5,"transition":"all .6s ease"});
        $("#color-3").css({"background-color":col5,"transition":"all .7s ease"});
        $("#color-4").css({"background-color":col5,"transition":"all .8s ease"});
        $("#color-5").css({"background-color":col5,"transition":"all .9s ease"});
    }
    
    else{
        $("#color-6").css({"background":"transparent","transition":"background .5s ease"})
    }
}

/* function to check which box rgb match with code rgb */
