var convertFirstletter = function(input){
	{
    var pieces = input.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
	}
}
convertFirstletter("hello world hello universe");
