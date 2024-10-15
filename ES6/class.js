Date: 10/14/2024
//Class - has been added in ES6 as a special and upgraded function to give us feature similar to
// other class based programming languages

//class keyword is used to create class and we can create associated methods 
//  as we did in cunstructor function <without using this>

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
console.log("---------------Practice---------------")
class Account {
    constructor(id, name, type){
        this.id = id;
        this.name = name;
        this.type = type;

    }

    Balance = function(debit=0, credit=0) {
        return debit-credit;
    }

    GetUserDetails = ()=>{
        console.log(`
                        ${this.id}
                        ${this.name}
                        ${this.type}
                     `)
    }

    AcctOffers = function(){
        if (this.type === "debit")
            return console.log("Saving account");

        else
            return console.log("Credit card");
    }
}

let acctObj = new Account(7968, "Lilly", "debit");
console.log(acctObj.Balance(50000,39500));
console.log(acctObj.GetUserDetails());
console.log("*****")
console.log(acctObj.AcctOffers());