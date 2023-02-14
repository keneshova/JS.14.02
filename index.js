function sum(a, b, c){
  console.log(a + b + c);
}
sum(3, 4, 5);



//обьем триугольника

//считает от 1 до 10
for (let v = 1; v <= 10; v++){
  console.log(v); 
}

//массив из 10 чисел
let example = [5, 7, 5, 2, 9, 3];

console.log(example);
let result = 0;
for (let i = 0; i < example.length; i++){
  result = result + example[i];
}
console.log(result);


//ОБЪЕКТЫ
let example1 = {}
let kesha = { name: "Kesha",
 age: 22,
 isEmployed: false
 };//свойстве может бфть что угодно

 let nestan = {
  name:"Nestan",
  age:17,
  sureName: "Keneshova",
  weight: 52,
  height: 164,
 
}

//View, edit, add
console.log(nestan.name);
console.log(nestan.age);
console.log(nestan.weight);

nestan.weight = 50;
console.log(nestan.weight);
nestan.favouriteBooks = ["Harry Potter","Harry Pottrer 2"];

//МЕТОД
let joldosh = {
  name: "Joldosh",
  age:22,
  isEmployed: false,
  sayHello: function() {
    console.log("Hello, I'm " + this.name);//this name доб имя jildosh
  },
  sayBye: function() {
    console.log("Bye");
  }
};
joldosh.sayHello();
joldosh.sayBye();