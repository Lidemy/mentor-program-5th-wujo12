function capitalize(str) {

 var newstr=''
  var gg=''
    if (str>='a' && str<='z'){ 
      gg= String.fromCharCode(str.charCodeAt(0)-32)
      for(i=1;i<str.length;i++){ 
			newstr+= str[i]	
		} return gg + newstr
	} 
}

console.log(capitalize('hello'));
