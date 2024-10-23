// Asynchronous Javascript Callbacks

let heading1 = document.querySelector("#heading-1");
let heading2 = document.querySelector("#heading-2");
let heading4 = document.querySelector("#heading-4");
let heading5 = document.querySelector("#heading-5");
let heading3 = document.querySelector("#heading-3");
let heading6 = document.querySelector("#heading-6");
let heading7 = document.querySelector("#heading-7");
let heading8 = document.querySelector("#heading-8");
let heading9 = document.querySelector("#heading-9");

setTimeout(() => {
  heading1.textContent = "Heading 1";
  heading1.style.color = "red";
  setTimeout(() => {
    heading2.textContent = "Heading 2";
    heading2.style.color = "green";
    setTimeout(() => {
      heading3.textContent = "Heading 3";
      heading3.style.color = "purple";
      setTimeout(() => {
        heading4.textContent = "Heading 4";
        heading4.style.color = "lime";
        setTimeout(() => {
          heading5.textContent = "Heading 5";
          heading5.style.color = "cyan";
          setTimeout(() => {
            heading6.textContent = "Heading 6";
            heading6.style.color = "blue";
            setTimeout(() => {
              heading7.textContent = "Heading 7";
              heading7.style.color = "pink";
              setTimeout(() => {
                heading8.textContent = "Heading 8";
                heading8.style.color = "grey";
                setTimeout(() => {
                  heading9.textContent = "Heading 9";
                  heading9.style.color = "indigo";
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 2000);
}, 1000);
