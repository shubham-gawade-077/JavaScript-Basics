// functions
//ex -1
// function toFahreinhat(celsius){
// fah=(9/5)*celsius+32;
// return fah;
// }
// console.log(100+ "℃ ="+toFahreinhat(100)+"℉");

//......................................//

//ex-2
//formula: (s*(s-a)*(s-b)*(s-c))**0.5

// function areaofTriangle(a,b,c)
// {
//     let s=(a+b+c)/2;
//     let area =(s*(s-a)*(s-b)*(s-c))**0.5;
//     return area;
// }
//     let a=25;
//     let b=30;
//     let c=40;

// console.log(`${areaofTriangle(a,b,c)}`);
//...........................................................//
//ex-3

// let arr=[3,5,2,7,9,6]
// let doubleArr=[];
// let cubeArr=[];

// function double(){
//     for(let i=0;i<arr.length;i++)
//     {
//         doubleArr.push(arr[i]*2)
//     }
// }
//  function cube(){
//     for(let n of arr)
//     {
// cubeArr.push(n*n*n);
//     }
//  }
// console.log(doubleArr);
// double();
// console.log(doubleArr);

// console.log(cubeArr);
// cube();
// console.log(cubeArr);

//.......................................//

//ex-4

let newAddr=[]

function addToGreet(arr){
    for(let greet of arr)
    {
        if(greet.includes("o"))
        {
            newAddr.push(greet);
        }
    }
}
let greet =["hello","hey","namaste","bonjour"]
addToGreet(greet)
console.log(newAddr);




