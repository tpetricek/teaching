class Animal { name = "animal"; }
class Dog extends Animal { bark() { console.log("woof"); } }
class Cat extends Animal { meow() { console.log("meow"); } }

let dogs = [new Dog()];

// TODO: Demo array covariance

for(var i = 0; i < dogs.length; i++)
  dogs[i].bark();