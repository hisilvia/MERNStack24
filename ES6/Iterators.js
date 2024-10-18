//Date:10/16/2024
//Due to increase in the work load at front end or at backend while consuming data like array of object
// or object of objects the operations using normal for loops becomes very slow and it also doesnt allow
// us to do any manipulation in the existing data array
//Four New Iteratiors are added to ES6 for different purposes and give us optimized solution
//Filter, Map, Some and Reduce

let personsList = [
    {id:1, name: "John", savedby: "CaptainAmerica"},
    {id:2, name: "Alice", savedby: "IronMan"},
    {id:3, name: "Roger", savedby: "CaptainAmerica"},
    {id:4, name: "Adam", savedby: "IronMan"},
    {id:5, name: "Alex", savedby: "SpiderMan"},
    {id:6, name: "Robin", savedby: "Batman"},
];
/*
//Filter: helps us to iterate but can't manipulate the list, we can only get the same data based on given condition
//1.List the Persons saved by CA
let personSaveByCA = personsList.filter((person)=>person.savedby == "CaptainAmerica")
console.log(personSaveByCA);
//==>two lists
console.log(personsList) //preserves the immutability

//Map: helps us to iterate as well as manipulate the list on the fly, means we chan 
//     change the structure of data object pre
//2.List the name of the Persons saved by IronMan
let nameOfpersonSavedByIronMan = personsList.map((person)=>person.savedby == "IronMan" ? person.name : "").filter((name)=>name !="")
console.log(nameOfpersonSavedByIronMan)

//3.Append Lucky before the name of each person saved
let luckyNames = personsList.map((person)=>"Lucky"+person.name)
console.log(luckyNames)

let luckyNamesPersonList = personsList.map((person)=>{
                    if (person) {
                        return {
                            id: person.id,
                            "New Name":  "Lucky" + person.name
                        }
                    }
                           
})
console.log(luckyNames)
console.log(personsList)
//4.Short circuit - if we have condition present then true else false
let personSavedByHulk = personsList.some((person)=>person.savedby == "Hulk")
console.log(personSavedByHulk)  //==>false

let personSavedBySpiderMan = personsList.some((person)=>person.savedby == "SpiderMan")
console.log(personSavedBySpiderMan)  //==>true
*/

//5.Get the count of each person saved by every super hero of Marvel
let eachSavedPersonCount = personsList.reduce((prevObject, currObject, index,list)=>{
    console.log("prevObject: ")
    console.log(prevObject)
    console.log("currObject: ")
    console.log(currObject)
    console.log("index: ")
    console.log(index)
    //console.log(list)
    prevObject[currObject.savedby] = prevObject[currObject.savedby]? prevObject[currObject.savedby]+1 : 1
    return prevObject;
},new Set())
console.log("outside of reduce")
//Here new set() could be replaced into object '{}' as well
console.log(eachSavedPersonCount);
console.log(personsList)


//Question :
console.log("--------------------------------------Practice part-------------------------------")

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];
/*
//1. List the person with javascript tag
let jsTag = persons.filter((person)=>person.tags === "javascript")
console.log(jsTag)
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//Method 1:
let javaTag = persons.filter((person)=>person.tags === "java")
console.log(javaTag);
let modifyName = javaTag.map((person)=>person.name = person.name + "programmer")
console.log(javaTag);
console.log(modifyName);

//Method 2:
console.log("----method 2 by map---")
let modifyNameByJavaTag = persons.map((person1)=>{
    if (person1.tags == "java")
        return person1.name + "programmer";
    else 
        return person1.name;
})
console.log(modifyNameByJavaTag)

//Method 3-short 
console.log("----method 3 short--")
let mdName = persons.map((person)=>person.tags === "java" ? person.name+"programmer" : person.name)
console.log(mdName)

//3. If we have anyone with tag python
let isPythonTag = persons.some((person)=>person.tags == "python")
console.log(isPythonTag)
*/
//4. Find the number of unique tags and their count present in list
let countUniqueTags = persons.reduce((prevObject,currObject,index,list)=>{
    
    prevObject[currObject.tags] = prevObject[currObject.tags] ? prevObject[currObject.tags]+1 : 1
    return prevObject;

},new Set())
console.log(countUniqueTags)