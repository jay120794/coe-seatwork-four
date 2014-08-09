var coe = function(){
	for (var a = 1; a <= 100; a++){
		if(a%3 == 0 && a%5 == 0){
			console.log("ComputerEngineering");
		}else if(a%5 == 0){
			console.log("Engineering"); 
		}else if (a%3==0){
			console.log("Computer");
		}else{
			console.log(a);
		}
	}
}
coe();	