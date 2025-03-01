// Arrays

// let array=[2,4,6,8,10,12]

// Standard for loop

// for(let i=0;i<array.length;i++)
// {
//     console.log(i , " : ", array[i]);
// }

//  for of loop----commonly used

// for(let n of array)
// {
//     console.log("n :",n);
// }

// for in loop

// for(let i in array)
// {
//     console.log("i:",array[i]);
//     console.log("i:",array.at(i));
// }

//...................................//

// Object

// let obj={
//     Name:"Shubham",
//     age:23,
//     city:"pune"
// }

// standard for loop

// for(let i=0;i<Object.keys(obj).length;i++)
// {
//     console.log(Object.keys(obj)[i] , " : " , obj[Object.keys(obj)[i]]);
// }

// for in loop---commonly used

// for(let keys in obj)
// {
//     console.log(keys," :",obj[keys]);
// }

// for of loop

// for(let value of Object.values(obj))
// {
//     console.log("value : ",value);
// }

//.........................................//

//Arguments object

function add()
{
    let sum=0;
    for(let val of arguments)
    {
        sum=sum+val;
    }
    console.log("sum :",sum);
}
add(2,5,7,9,1)









