// function Circle(radius, x, y) {
//   (this.radius = radius),
//     (this.location = {
//       x: x,
//       y: y,
//     }),
//     (this.draw = function () {
//       console.log(this.location);
//     }),
//     (this.move = function (nextx, nexty) {
//       this.location.x = nextx;
//       this.location.y = nexty;
//     });
// }
// const circleobj = new Circle(10, 0, 0);
// console.log(circleobj);
// for (let i = 0; i <= 10; i++) {
//   circleobj.move(i, i);
//   circleobj.draw();
// }

/**********using class ************************* */
// class carclass {
//   constructor(color, company, mileage) {
//     this.color = color;
//     this.company = company;
//     this.mileage = mileage;
//   }
//   drive() {
//     console.log("driving the car");
//   }
// }
// const carobj = new carclass("red", "Toyota", 15);
// console.log(carobj);
// carobj.drive();

/************examples*********** */
// function user(fullName) {
//   this.fullName = fullName;
//   this.friendList = [];
//   this.addFriend = function (friendName) {
//     this.friendList.push(friendName);
//   };
//   this.printFriendList = function () {
//     console.log(this.friendList);
//   };
//   this.findMutual = function (userObject) {
//     const mutualfriends = userObject.friendList.filter((name) => {
//       this.friendList.includes(name);
//     });
//     console.log(mutualfriends);
//   };
// }

// const Ashish = new user("Ashish Bhattarai");
// Ashish.addFriend("akash");
// Ashish.addFriend("Lisina");
// Ashish.addFriend("Lincy");
// Ashish.printFriendList();

// const Arjun = new user("Arjun kumar");
// Arjun.addFriend("Sahil");
// Arjun.addFriend("Lisina");
// Arjun.addFriend("Lincy");

// Arjun.printFriendList();

// Ashish.findMutual(Arjun);

/***object.entries and object.assign */

// const student = {
//   name: "Ashish",
//   roll: 7,
//   subject: "maths",
//   address: {
//     state: "Bihar",
//     pincode: 560062,
//   },
// };
// console.log(Object.entries(student));
// // const tempobject = student;
// const tempobject = {};
// Object.assign(tempobject, student);
// console.log(tempobject);
// student.name = "Lisina";
// console.log(student);
// console.log(tempobject);
// student.address.state = "karnataka";
// console.log(student);
// console.log(tempobject);

/*************object.values and object.keys *************/

// const Employeesdata = {
//   john: 100,
//   marry: 200,
//   peet: 300,
// };

// class Util {
//   constructor(Employeesdata) {
//     this.data = Employeesdata;
//   }
//   sumsalaries() {
//     const valarr = Object.values(this.data);

//     return valarr.reduce((a, b) => a + b, 0);
//   }
//   averagesalaries() {
//     const sumvalue = this.sumsalaries();
//     const noofpeople = Object.keys(this.data).length;
//     return Math.round(sumvalue / noofpeople);
//   }
//   findslaryrange() {
//     const maxsalary = Math.max(...Object.values(this.data));
//     const minsalary = Math.min(...Object.values(this.data));
//     return maxsalary - minsalary;
//   }
// }

// const utilobj = new Util(Employeesdata);
// console.log(utilobj.sumsalaries());
// console.log(utilobj.averagesalaries());
// console.log(utilobj.findslaryrange());

/***************Inheritance************************************** */

// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markpresent() {
//     console.log(this.name, "is present");
//   }
// }
// class Developer extends Employee {
//   submitcode() {
//     console.log("code submitted by", this.name, "from", this.department);
//   }
// }

// const div = new Developer("crio", "IT");
// div.submitcode();

/***********Method Overriding******************** */
// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markpresent() {
//     console.log(this.name, "is present");
//   }
// }
// class Developer extends Employee {
//   markpresent() {
//     console.log(this.name, "is here");
//   }
//   submitcode() {
//     console.log("code submitted by", this.name, "from", this.department);
//   }
// }

// const div = new Developer("crio", "IT");
// div.markpresent();

/****************************************Using Super******************************** */

// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markpresent() {
//     console.log(this.name, "is present");
//   }
// }
// class Developer extends Employee {
//   markpresent() {
//     console.log(this.name, "is here");
//   }
//   submitcode() {
//     super.markpresent();
//     console.log("code submitted by", this.name, "from", this.department);
//   }
// }

// const div = new Developer("crio", "IT");
// div.submitcode();

//we can notice that when we use super, it looks for parent

/*****constructor cannot be formed in child class derived from parent, rather we shall use super to get all properties of parent */

// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markpresent() {
//     console.log(this.name, "is present");
//   }
// }
// class Developer extends Employee {
//   constructor(name, department, preferredlanguage) {
//     super(name, department);
//     this.preferredlanguage = preferredlanguage;
//   }
//   markpresent() {
//     console.log(this.name, "is here");
//   }
//   submitcode() {
//     super.markpresent();
//     console.log("code submitted by", this.name, "from", this.department);
//   }
// }

// const div = new Developer("crio", "IT");
// div.submitcode();

// class Combinatorics {
//   constructor(N, R) {
//     this.N = N;
//     this.R = R;
//   }
//   factorial(num) {
//     if (num === 0) {
//       return 1;
//     } else {
//       return num * this.factorial(num - 1);
//     }
//   }

//   findCombinations(N, R) {
//     if (R >= N) {
//       return (
//         this.factorial(N) /
//         (this.factorial(R) * this.factorial(Math.abs(N - R)))
//       );
//     } else {
//       return 0;
//     }
//   }
//   findPermutations(N, R) {
//     if (R >= N) {
//       return this.factorial(N) / this.factorial(Math.abs(N - R));
//     } else {
//       return 0;
//     }
//   }
// }

// let result = new Combinatorics(6, 5);
// console.log(result);
// let result1 = result.factorial(5);
// console.log(result1);
// let result2 = result.findCombinations(6, 5);
// console.log(result2);
// let result3 = result.findPermutations(6, 5);
// console.log(result3);

/************************** */
// class Length {
//   constructor(ft, inch) {
//     this.ft = ft;
//     this.inch = inch;
//   }
//   isValidObject() {
//     if (this.ft >= 0 && this.inch >= 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   addLength(lengthObj) {
//     if (this.isValidObject() && lengthObj.isValidObject()) {
//       let totalInches = this.inch + lengthObj.inch;
//       let additionalfit = Math.floor(totalInches % 12);
//       let totalFt = this.ft + lengthObj.ft + additionalfit;
//       totalInches = totalInches % 12;
//       return [totalFt, totalInches];
//     }
//     return [0, 0];
//   }
// }

// const length1 = new Length(5, 11); //corresponding to 5 ft 11 inches

// const length2 = new Length(2, 8); // corresponding to 2 ft 8 inches.

// const sum = length1.addLength(length2); // the sum will be an array containing `[8, 7]`

// class WordKit {
//   constructor(str) {
//     this.str = str;
//   }
//   reverse(str) {
//     let newstring = "";
//     for (let i = this.str.length - 1; i >= 0; i--) {
//       newstring += this.str[i];
//     }
//     return newstring;
//   }
//   isPalindrome(str) {
//     if (this.str === this.reverse()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   makePalindrome(str) {
//     let canbePalindrome = this.str + this.reverse(this.str);
//     return canbePalindrome;
//   }
// }

// let result = new WordKit("alpha");
// console.log(result.isPalindrome());
// console.log(result.makePalindrome());

// function addProperty(obj, property, value) {
//   const test = { ...obj };
//   test[property] = value;
//   return test;
// }

// let object = {
//   name: "Ashish",
//   job: "Full-stack devrloper",
// };
// console.log(addProperty(object, "job", "Back-end Developer"));
// console.log(object);
