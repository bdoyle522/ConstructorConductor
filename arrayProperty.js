//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
String.prototype.reversed = function(){
	var ret = '';
    for(var i = str.length-1; i > -1; i--){
        ret += this[i];
    }
    return ret;
}
var str = 'hello';
var str1 = str.reversed();

console.log(str.reversed());