let place = {
    "placeName":"office",
    "behaviour":"professional",
    "room": function(){
        console.log(this)
        var meetingRoom = {
            "placeName2":"meetingRoom",
            "behaviour2":"casual",
            "friendRoom": function(){
                console.log(this)
            },
            "clientRoom" : ()=>{
               console.log(this)
            }

        }
        meetingRoom.friendRoom()
    }
}


//place.room();

// function CreateBook(name, author , chapter){
//     this.name=name;
//     this.author=author;
//     this.chapter = chapter;
//     this.getInfo=function(){
//         console.log(`Book Name is ${this.name} and it's author name is ${this.author} and contain total ${this.chapter} chapters`);
//     }
// }

// let book = new CreateBook("geeta","lord ganesha",18);
// let book2 = new CreateBook("Harry potter","JK Rowling",23);
// book2.getInfo()


function MakeStudents(fname,lname,contact,isVerified){
    this.fname=fname;
    this.lname=lname;
    this.contact=contact;
    this.isVerified=isVerified;
}

showProfile = function(){
        if(this.isVerified){
            console.log(`Student name is : ${this.fname} ${this.lname} and his/her contact ${this.contact}`)
        }else{
            console.log(`Student is not verified`)
        }
    }

MakeStudents.prototype.showProfile = showProfile;
MakeStudents.prototype.company = "Sheriyans"

let student1 = new MakeStudents("Pawan","kumar","9898989899",true);
let student2 = new MakeStudents("Manish","Gautam","8989898989",true);
let student3 = new MakeStudents("Robin","Sharma","78789898978",false);



console.log(student1.company)


// class MakeStudents{
//     constructor(fname,lname,contact,isverified){
//         this.fname=fname;
//         this.lname=lname;
//         this.contact=contact;
//         this.isverified=isverified;
//     }

//     showProfile= function(){
//         if(this.isverified){
//         console.log(`Student name : ${this.fname} and his/her contact is ${this.contact}`)
//         }else{
//             console.log(`Student is not verified`)
//         }
//     }
// }

// let  student1 = new MakeStudents("Pawan","kumar","9898989899",true);
// let student2 = new MakeStudents("Manish","Gautam","8989898989",true);
// let student3 = new MakeStudents("Robin","Sharma","78789898978",false);

// student3.showProfile();

// let arr = [1,2,3,4,5,6,7]
// //console.log(arr);

// let obj = {
//     "name":"hello",
//     "lname":"hi"
// }
// let fun = function(){
//     console.log("this is function")
// }

// console.log(arr.__proto__);
// console.log(obj.__proto__);
// console.log(fun.__proto__);


let dada = {
    "fname": "dada",
    "land":"100acre"
}


let papa = {
    "fname":"papa",
    "property":"100cr",
    "shop":"shop"
}


let beta = {
    "fname":"beta",
    "age":12
}
papa.__proto__ = dada;
beta.__proto__ = papa;
//console.log(beta.land);
// beta.prototype = papa;

// console.log(beta.property);
// console.log(beta.prototype.property);



class User {
    constructor(fname,lname,contact){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
    }
    greet(){
        console.log("you are welcome "+ this.fname);
    }
}

class Admin extends User{
    constructor(fname,lname,contact){
        super(fname,lname,contact);
        this.access=true;
    }

    addCourse(){
     console.log("Course added");
    } 
    removeCourse(){
        console.log("course removed")
    }
     greet(){
        console.log("you are welcome Admin"+ this.fname);
    }
    
}

let user = new User("chetan","kumar","78787878787878")
user.greet();


let user2 = new Admin("kumar","admin","5656565656");
user2.addCourse()
user2.greet();


console.log(typeof Admin)