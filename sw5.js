var countBs = function(count, a){
	var countB = 0;
	for(var key in count){
	    if(count[key] == a){
	    countB += 1;
	    }
	}
	return(countB);
}

countBs("ASDASDASDBBBBB", "A");