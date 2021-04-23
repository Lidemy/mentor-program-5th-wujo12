function join(arr, concatStr) {
var a=[]
  if (arr.length === 1){
    return arr
  }
  else  {
    for(i=0;i<arr.length;i++)
      if (i ===arr.length-1){
      a+=arr[i]
      }
      else{
      a+=arr[i]+concatStr
      } 
    } 
   return a 
} 


function repeat(str, times) {
  var word=''
    for(i=1;i<times;i++){    
      word+=str
    }return word
}


console.log(join(['a','b'], '!'));
console.log(repeat('a', 5));