function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}

var person = new Person("Leo");
console.log(person.greet("Jail"));
