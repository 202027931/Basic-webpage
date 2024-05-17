let p1Element = document.querySelectorAll("p")[0]

console.log(p1Element)

const myButton=document.createElement("button")
myButton.textContent="Click here"


function printMessage()
{
console.log("Hellow basic webpage")


}
myButton.onclick=printMessage
document.body.insertBefore(myButton,p1Element)