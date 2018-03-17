
		// take random rgb to place background color of box 1
		var a = Math.round(Math.random() * 201 );
		var b = Math.round(Math.random() * 201 );
		var c = Math.round(Math.random() * 201 );
		$("#color-1").css({"opacity":"1",});
		document.getElementById("color-1").style.backgroundColor="rgb("+a+","+b+","+c+")";
		$("#color-1").show(500);
		var col = document.getElementById("color-1").style.backgroundColor;

		// take random rgb to place background color of box 2
		var x = Math.round(Math.random() * 256 );
		var y = Math.round(Math.random() * 255 );
		var z = Math.round(Math.random() * 255 );
		document.getElementById("color-2").style.backgroundColor="rgb("+x+","+y+","+z+")";
		$("#color-2").show(1000);
		var col1 = document.getElementById("color-2").style.backgroundColor;

		// take random rgb to place background color of box 3
		var p = Math.round(Math.random() * 210 );
		var q = Math.round(Math.random() * 210 );
		var r = Math.round(Math.random() * 20 );
		document.getElementById("color-3").style.backgroundColor="rgb("+p+","+q+","+r+")";
		$("#color-3").show(1500);
		var col2 = document.getElementById("color-3").style.backgroundColor;

		// getting random value between 0 to 3 for placing rgb to code innerhtml

		var def;
		var x = Math.floor(Math.random() * 3 );
		if(x == 0){
		document.getElementById("codeId").innerHTML = col+";";
		def = col;
		}

		else if(x == 1){
		document.getElementById("codeId").innerHTML = col1+";";
		def = col1;
		}

		else if(x == 2){
		document.getElementById("codeId").innerHTML = col2+";";
		def = col2;
		}


/* function to match box rgb with code tag rgb */

function checkColor(){
	if(def == col){
    	alert("Congratulation ! You WON !!!");
    	$(".display-color").css({"background-color":col,"transition":"all .8s ease"});
    	$("code").css({"color":"white"});
    	$("#color-2").css({"background-color":col,"transition":"all .6s ease"});
    	$("#color-3").css({"background-color":col,"transition":"all .7s ease"});
    	
    }
    else{
    	$("#color-1").css({"background":"transparent","transition":"background .8s ease"})
    }
}

function checkColor1(){
	if(def == col1){
    	alert("Congratulation ! You WON !!!");
    	$(".display-color").css({"background-color":col1,"transition":"all .8s ease","color":"white"});
    	$("code").css({"color":"white"});
    	$("#color-1").css({"background-color":col1,"transition":"all .6s ease"});
    	$("#color-3").css({"background-color":col1,"transition":"all .7s ease"});
    }
    else{
    	$("#color-2").css({"background":"transparent","transition":"background .8s ease"})
    }
    
}

function checkColor2(){
	if(def == col2){
    	alert("Congratulation ! You WON !!!");    	
    	$(".display-color").css({"background-color":col2,"transition":"all .8s ease","color":"white"});
    	$("code").css({"color":"white","transition":"color 2s ease"});
    	$("#color-1").css({"background-color":col2,"transition":"all .6s ease"});
    	$("#color-2").css({"background-color":col2,"transition":"all .7s ease"});
    }
    
    else{
    	$("#color-3").css({"background":"transparent","transition":"background .8s ease"})
    }
    
}
