let heading1 = document.querySelector("#heading-1");
let heading2 = document.querySelector("#heading-2");
let heading4 = document.querySelector("#heading-4");
let heading5 = document.querySelector("#heading-5");
let heading3 = document.querySelector("#heading-3");
let heading6 = document.querySelector("#heading-6");
let heading7 = document.querySelector("#heading-7");
let heading8 = document.querySelector("#heading-8");
let heading9 = document.querySelector("#heading-9");

function changeText(element, text, time, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.style.color = color;
        element.textContent = text;
        resolve("Resolved");
      }
      else{
        reject("Some Error Occured");
      }
    }, time);
  });
}

changeText(heading1,"One",1000,"red").
then(()=>changeText(heading2,"Two",2000,"grey"))
.then((data)=>changeText(heading3,"three",2000,"magenta"))
.then((data)=>changeText(heading4,"Four",1000,"blue"))
.then((data)=>changeText(heading5,"Five",2000,"lime"))
.then((data)=>changeText(heading6,"Six",1000,"orange"))
.then((data)=>changeText(heading7,"Seven",2000,"pink"))
.then((data)=>changeText(heading8,"Eight",1000,"cyan"))
.then((data)=>changeText(heading9,"Nine",2000,"seagreen"))
.catch((err)=> alert(err));
