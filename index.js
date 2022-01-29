
let first = document.querySelector(".class1"); 
let second = document.querySelector(".class2");
let third = document.querySelector(".class3");
let fourth=document.querySelector(".logo");
first.addEventListener("click", () => {
  first.style.borderBottom = "4px solid white";
  second.style.borderBottom = "";
  third.style.borderBottom = "";
  fourth.style.borderBottom="transparent";
});

second.addEventListener("click", () => {
  second.style.borderBottom = "3px solid white";
  first.style.borderBottom = "";
  third.style.borderBottom = "";
  fourth.style.borderBottom="transparent";
});

third.addEventListener("click", () => {
  third.style.borderBottom = "3px solid white";
  fourth.style.borderBottom="transparent";
  first.style.borderBottom = "";
  second.style.borderBottom = "";
});
fourth.addEventListener("click", () => {
    third.style.borderBottom = "";
    fourth.style.borderBottom="transparent";
    first.style.borderBottom = "";
    second.style.borderBottom = "";
  });
