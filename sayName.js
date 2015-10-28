//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

 var Person = function(name,age){
 	this.name = name;
 	this.age = age;
 }




//Now create three instances of Person with data you make up

var per1 = new Person('Bren', 23);
var per2 = new Person('Guy', 26);
var per3 = new Person('Conn', 20);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	console.loge(this.Person);
}
