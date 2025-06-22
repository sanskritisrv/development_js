console.log("sans");
 fullname="tony stark";
console.log(fullname);
x=null;
y=undefined;
console.log(x);
let Name= "tony";  /* variables can be declared using let , var and const*/
                   /*refer to the notes for detailed explaination about them*/
console.log(Name);

/* 1.varibales

2. data types- 7 primitive data types
number(all numbers) , strings ,boolean, undefined, null,BigInt(stores big integer), symbol

3.objects- collection of variables/data types is objects
syntax= key: value*/

const student={
fullname: "tony",
age:20 ,
cgpa:9.8 ,
ispass:true ,
}

/* const variable cannot be updated but const obj ki key aka variable ko update kar sakte hai*/

/* practice q 2 of lec1 */
const profile={
     
    userName: "Sans_2408",
    isFollow:true,
    isMessage:false,
    followers:223,
    posts:12,
    following:23,

};
console.log(profile.userName);

//OPERATORS//
//Arithmetic operators//
let a=5;
let b=2;
console.log("a =", a, " & b",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a ** b);

//unary operator
a++
console.log(a);

//Assignment operators
let A=5;
let B=2;
A += 4;
console.log("A=", A);

//Logical operators
//&& ||
let c=6;
let d=5;
let cond1= c>d;
let cond2= c==6;
console.log("cond1 && cond2", cond1 && cond2);
console.log("!(6<5=)", !(c==6));

//Conditional Statements 
/*let age=23;
if(age>18)
{
    console.log("can vote");
}
else if{
    console.log("not vote");
}
else{
    console.log("dont know");
}*/

//ternary operators
//refer to mdn docs for more info about html, css and js

let p=prompt("hello");//prompt is a method to take input 
console.log(p);


//practice q 2 of lec2 
let n=prompt("enter a number");
if(n%5==0)
{
    console.log("is a multiple");
}
else{
    console.log("not a multiple");
}

//LOOPS//

for(let i=1;i<=3;i++)
{
    console.log("studying loops");//let is block scope so if we try to print i outside of this loop , it would give error
}

let j=1;
while(j<=8){
console.log("j",j);
i++;
}

let i=1;
do{
    console.log("i",i);
    i++
}while(i>=8);

/*there are two  more loops other than the 3 basic loops i.e 
1.for-of loop- helps us apply loops on strings and arrays
syntax- for(let val of str )

2.for-in loop-helps us get keys/variables of objects and also arrays
*/

let str="Apna College";
for(let i of str){
    console.log(i);
}

//template literals - enclosed in a backtick

let obj={
    item:"pen",
    price:10,
}
let output=`the cost of ${obj.item} is ${obj.price} ruppees`;
console.log(output);
// in template literals printing the string becomes very easy than normal string
//place where we put dollar sign and then we put the value which is outputed at the run time is called string interpolation.

/*String methods
1.str.toUpperCase()
2.str.toLowerCase()
3.str.trim()-removes whitespaces
the catch in all these is that these functions do not change the original string rather they create a new string with the updated value.
4.str.slice(start,end)- here the end value is not included in the string jo return hoti hai*/

/* ARRAYS- the typeof arrays is object
js ke andar strings are immutable , arrays are not tabhi koi bhi cheez string ki copy pe ho raha hoga na ki original string pe*/
let marks =[22,34,45,65];

//printing the individual element of arrays can be done either by applying loops for by usinf for-of(preferred)
//practice q1

let cl = [85,97,44,37,76,60];
let sum=0;
for(let marks of cl);{
sum=sum+marks;}
let avg=sum/cl.length;
console.log(avg);

/*Methods in arrays
PUSH()- add to end-----array.push("item1", "itme2" etc etc)
POP()-delete from end & return
toString()- cover arrays to string
Concat()-joins multiple arrays and returns result
unshift()-add to start
shift()-delete from start and return
Slice()-returns a piece of the arrar()
Splice()-change original array (start index, no of elememts to be deleted, numbers to be added on the deleted address)
*/ 

/*FUNCTION - DEFINITION saves the program from redundancy 
arrow functions -  function=(para1, para2)=>{//some work}

Methods - hote functions hi hai par we bind or when they are associated with some object or string, array , it becomes a method.
arr.forEach(callBackFunction) 
callback is a function that can be passed as an argument to another function.

Higher Order Function/Methods are functions that either take a function as a parameter or a return a function 
*/
let arr=[1,2,3,4]
arr.forEach((var)=> {
    console.log(var^2);
});
/* map- similar to forEach but just isme jo kaam hua hai uska ek naya array return karke de dega 
filter - creates a new array of elements that give true for a condition/filter.
*/
let arr=[1,2,3,4,5,6,7];
let evenArr=arr.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);










































