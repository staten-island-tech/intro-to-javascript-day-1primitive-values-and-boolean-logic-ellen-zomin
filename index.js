let string = "string";
const edis = "Edis";
let sentence = "Hello " + "Vicky";
let sentence2 = " and also Angel";
//let combine = sentence + sentence2;
combine = `$(sentence)$(sentence2)`; //ES2015

let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP CSP";
let teacherName = "Whalen";
/*const longerSentence =
    student1 +
    " and " +
    student2 +
    " are amazing and will be taking " +
    courseName +
    " next year with " +
    teacherName;

    console/log(longerSentence);*/
    /*let longSentence = `${student1} and ${student2} will be taking ${courseName} with ${teacherName} next year`
    console/log(longSentence);
*/

////////////////////////////////
//Numbers Integers
/*let year = 2020;
let nextYear= 2020 + 1;
let past = year - 1;
let lastYear = year - 1;
let farFuture = year * 100; */
////////////////////////////////////
//Booleans, null, undefined
/*let trueStatement = true;
let falseStatement = false;

let undefinedVar; */
//console.log(undefinedVar); //do this a lot
//console.log(nonExistent); //null never declared
//console.log(truuStatement);

///if/ else if statements
//let student = "Karen";
//let age = 17;
// console.log(student === "Karen"); /// true
// console.log(student === "karen"); ///false
// console.log(student == "karen"); ///false
//console.log(age === "17"); ///false
//console.log(age == "17"); ///true

//let age = 16;
//let name = "Kristy";
/*console.log(age < 17);
console.log(age <= 17);
console.log(age >= 17);*/
//console.log(age == 16 || age == 17); // if age equals 16 OR age ==17 then true
//console.log(age == 16 && name=== "Angel"); 
//console.log(age !== 1); 

/////////////if statements
/*let age = 18;
if (age < 18){
    console.log("You are a child");
} else if(age >= 18){
    console.log("you are an adult now");
}
    */
/*let school = "";
if(school == "elementary"){
    console.log("you are in elementary school");
}else if(school == "middle"){
    console.log("you are in middle school");
}else {
    console.log("you are in high school");
} */

////////////////////functions
/*function test(){
    console.log("I am a function");
}
test(); */
/*function argument(argument){
   console.log(argument); 
}
//argument("Edis");
function add(x, y){
    return x + y; //return ends the function
}
//console.log(add(2, 7));
let z = function add(x, y){
    return x + y; //return ends the function
};
z(1, 11);
console.log(z(1, 11)); */
//////////////////////////////////Scoping
//let x = "x";
//const z = "z";  //99% of the time
/*const hello = function() {
    alert("hello");
    alert("hello");
    alert("hello");
    alert("hello");
    alert("hello");
    alert("hello");
    alert("hello");
}
const bye = function() {
    alert("bye");
};

function beatles{
    hello();
    bye();
    hello();
    bye();
}
beatles();*/

//global or window scope

/*function hello(){
    const name = "Jaiyu";
    console.log(name);
} */
/*hello();
makeFunc();
*/

/*function makeFunc() {
    //function scope
    const name = "Sun"
    function displayName(){
        alert(name); //still has access to outer variable name
    }
    return displayName; //returning the inner function
}

const myFunc = makeFunc(); 
myFunc();
*/

//////Arrays
/*const names = ["Michelle", "Edis", "Richard", "Vincent", "Gisele"];

names.forEach(name => console.log(name)); */
//arrow function 1) Always returned 2) this is changed
const students = [
    "Riya", 
    "Omar", 
    "Alan", 
    "Jaiyu", 
    "Michael", 
    "Lisa", 
    "Richard"
];

//Filter above array for all students whose name contains less than 5 characters
const result = students.filter(student => student.length < 5);
console.log(result);

///challenge 2
//1) does it "include" "Junshen"
console.log(arr.includes("Junshen"));
//2) check for "alan" or "sava" "some"
students.some(name => ["alan", "sava"].includes(name));