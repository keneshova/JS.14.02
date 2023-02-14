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

 let example2 = {}
 let nestan = {
  name:"Nestan",
  age:17,
  sureName: "Keneshova",
  weight: 52,
  height: 164,
}