var Person = function(){};

Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
 }
  
var Teacher = function(){};

Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
 
var him = new Teacher();
him.initialize("Adam",45);
var p = him.teach("Inheritance");