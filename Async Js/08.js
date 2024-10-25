// Creating a Promise

const pannerButterMasala = new Promise((resolve,reject)=>{
    let busket = ["paneer"," ","vegetables","Tea","sugar"];

    if(busket.includes("paneer") && busket.includes("salt") && busket.includes("vegetables")){
        resolve("Let's Eat Now");
    }
    else{
        reject("Can't do it");
    }
}) 


// Method - 1 (Consume Promise)
// pannerButterMasala.then((value)=>{
//     console.log(value);
// },(value)=>{
//     console.log(value);
// })

// Method - 2 (Consume Promise).then().catch()
pannerButterMasala.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})



// Promise are Asynchronous Task that are performed with the help of Browser WebApis