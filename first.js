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

/*let p=prompt("hello");
console.log(p);
*/
let n=prompt("enter a number");
if(n%5==0)
{
    console.log("is a multiple");
}
else{
    console.log("not a multiple");
}






l






