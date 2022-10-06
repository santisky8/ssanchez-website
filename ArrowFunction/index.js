var hello;

hello = () =>{
document.getElementById("demo").innerHTML += "Hello 1";
} 

var hello2 = function(){
    document.getElementById("btn1").innerHTML += "Hello 2";
    } 

document.getElementById("btn2").addEventListener("click",() => {
    document.getElementById("btn2").innerHTML += "Hello 1";
    } )

window.addEventListener("load", hello);

var numbers = [1,2,3,4,5];
const squares = numbers.map(n => n*n);
document.write(squares);

var evens = newArray();
numbers.forEach(n=>{
    if (n%2 ===0) {
        evens.push(n);
    }
});

document.write('<br>');
document.write(evens);