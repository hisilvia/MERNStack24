Date: 10/14/2024
//1.Map : is the data structure created to store data in the form of key value pair
//  Strong Map - when our keys are of string type or alphanumeric type
//  Weak Map - this allows us to create keys such as numbers, functions, objects etc
//  There are several methods, properties attached to map to validate and access the values present against key

//[{key : "value"}]
let myMap = new Map();

myMap.set("UserName", "Anthony")
console.log(myMap.size)
//The entries() method returns an iterator object with the [key,values] in a map.
console.log(myMap.entries()) //==>[Map Entries] {['UserName','Anthony']}



//creating a weak map
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "String is key for this!!")
myMap.set(keyObj, "Object is key for this!!")
myMap.set(keyFunc, "Function is key for this!!")  
myMap.set(keyNum, "Number is key for this!!")


console.log(myMap.size)         //5
console.log(myMap.entries())    //4#==>[[Function: keyFunc],'Function is key for this!!']

//The get(key) method gets the value of a key in a map
console.log(myMap.get(2000))    //==>Number is key for this!!
console.log(myMap.get({}))      //==>undefined : object is refered by reference variable not a value type, for each object a separate memory allocated on heap
console.log(myMap.get(keyObj))  //==>Object is key for this!!  (cause it can only access via same reference variable)


// let newObject = {};
// console.log(myMap.get(newObject))
// console.log(myMap.get(keyObj))

myMap.delete(keyNum)
console.log(myMap.entries())

console.log(myMap.has(keyString))      //==>true
console.log(myMap.has("random key"))   //==>false
console.log(myMap.keys())              //list of all keys

myMap.clear(); //removes all data
console.log(myMap.entries()) 
console.log("------------------------------")

//2. Set : is the data structure which helps us create unique data without many comparisons
//   Now wanna display one name at a time
// let TraineeList = []
// TraineeList.push("Duncan")
//before adding - Same user name we need to check for each time if its already present or not

let TraineeList = new Set(["Silvia", "Afroj", "Yao", "Mark", "Nilay"])

TraineeList.add("Yao")                //==>no error, but it isnt added into the list

console.log(TraineeList.entries())

TraineeList.add("Sierra")
console.log(TraineeList.entries())
console.log(TraineeList.size)

TraineeList.add("Ben")
console.log(TraineeList.values())
console.log(TraineeList.size)

//Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favrourite country you wish to visit on world tour
console.log("---------------Practice Part---------------")
let myWishList = new Map();
myWishList.set("first","Xi'an");
myWishList.set("second","Shijiazhuang");
myWishList.set("third","Guilin");
myWishList.set("forth","Xiamen");
myWishList.set("fifth","Qindao");

//a weak map
let strKey = "Egypt",  objKey = {}, funcKey = function() {}, numKey = 9;
myWishList.set(strKey, "pyramid");
myWishList.set(objKey, "Lhasa");
myWishList.set(funcKey, "HongKong");
myWishList.set(numKey, "Paris");
myWishList.set("Forest", "Norway");

console.log(myWishList.entries());