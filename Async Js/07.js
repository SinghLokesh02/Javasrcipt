// Callback Hell and Pyramid of Doom


let heading1 = document.querySelector("#heading-1");
let heading2 = document.querySelector("#heading-2");
let heading4 = document.querySelector("#heading-4");
let heading5 = document.querySelector("#heading-5");
let heading3 = document.querySelector("#heading-3");
let heading6 = document.querySelector("#heading-6");
let heading7 = document.querySelector("#heading-7");
let heading8 = document.querySelector("#heading-8");
let heading9 = document.querySelector("#heading-9");


function changeHeadingColor(element, color,text,time,onSuccess,onFailure) {
  setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }
        else{
            if(onFailure){
                onFailure();
            }
        }
  }, time);
}

changeHeadingColor(heading1,"red","Heading-1",2000,()=>{
    changeHeadingColor(heading2,"lime","Heading-2",2000,()=>{
        changeHeadingColor(heading3,"cyan","Heading-3",1000,()=>{
            changeHeadingColor(heading4,"grey","Heading-4",3000,()=>{
                changeHeadingColor(heading5,"orange","Heading-5",2000,()=>{
                    changeHeadingColor(heading6,"seagreen","Heading-6",1000,()=>{
                        changeHeadingColor(heading7,"magenta","Heading-7",2000,()=>{
                            changeHeadingColor(heading8,"blue","Heading-8",2000,()=>{
                                changeHeadingColor(heading9,"purple","Heading-9",1000,()=>{
                            
                                },()=>{console.log("Element Does Not Exists");})
                            },()=>{console.log("Element Does Not Exists");})
                        },()=>{console.log("Element Does Not Exists");})
                    },()=>{console.log("Element Does Not Exists");})
                },()=>{console.log("Element Does Not Exists");})
            },()=>{console.log("Element Does Not Exists");})
        },()=>{console.log("Element Does Not Exists");})
    },()=>{console.log("Element Does Not Exists");})
},()=>{console.log("Element 1 Does Not Exists");})