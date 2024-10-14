Date: 10/14/2024
//Class -

class Area {

    //constructor is used to initialized the properties
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth
    }

    AreaOfCircle = function (radius=0) {
        return 3.14 * radius * radius
    }

    Squrea = ()=>this.length * this.length;

    Rectangle = ()=>{
        return this.length * this.breadth;
    }
}

let areaObj = new Area(6, 9)    //instantiation of area class
console.log(areaObj.AreaOfCircle(12))
console.log(areaObj.Squrea())
console.log(areaObj.Rectangle())

//Task - create a class named as account accepting 3 or more params like name, acct type etc and
//       has three methods to show balance, user details, and account offers