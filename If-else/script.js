
//ex 1
var num=Number(prompt("Enter yout number"));
if(num>0)
{
    console.log(num + " is positive");
}
else{
    console.log(num + " is negative");
}
    
   /*
   //ex 2
   var num1=Number(prompt("enter number"));
   var num1=Number(prompt("enter number"));
   if(num1>num2)
   {
    console.log(num1 + "is grater ")
   }
   else if(num1<num2)
   {
    console.log(num1 +" is small");
   }
   else {
    console.log(num1 +" is equal to "+ num2);
   }
    */
/*
   //ex 3
   var num =Number(prompt("enter number"));
   if(num%2===0)
   {
    console.log(num + "is even");
   }
   
   else
   {
console.log(num + " is odd");
   }
*/
/*
//ex 4
var a=Number(prompt("enter number a"));
var b=Number(prompt("enter number b"));
var c=Number(promt("enter number c"));
if(a>b)
{
    if(a>c)
    {
    console.log(a +"is grater than" + b + " and" + c);
    }
    else{
        console.log(c +"is grater than" + a + " and" + b);
    }
}
    else{
        if(b>c)
        {
console.log(b +"is grater than" + a + " and" + c);
        }
        else{
console.log(c +"is grater than" + a + " and" + b);
        }
    }
//template literal  `${c} is grater than ${a} and ${b}`
*/
/*
//ex 5
var a=Number(prompt("enter number a"));
var b=Number(prompt("enter number b"));
var c=Number(promt("enter number c"));
if(a>b && a>c)
{
console.log(`${a} is grater than ${b} and ${c}`);
}
else if(b>a && b>c)
{
console.log(`${b} is grater than ${a} and ${c}`);
}
else{
console.log(`${c} is grater than ${a} and ${b}`);
}
*/
//ex 6 short if else
//alert("hii");
//var a=Number(prompt("enter number a"));
//var b=Number(prompt("enter number b"));
//console.log(a>b ?`${a} is grater than ${b} and ${b}`:`${b} is grater than ${a}`);
var a=Number(prompt("Enter the number"));
console.log(a==0 ? "zero" :a > 0 ?"+ve":"-ve");


