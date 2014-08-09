var countBs = function(count){
	var countB = 0;
	for(var key in count){
	    if(count[key] == "B"){
	    countB += 1;
	    }
	}
	return(countB);
}

countBs("ASDASDASDBBBBB");