function sum2(num1,num2)
{
    let a;
    let b;
    alert("We will add next 2 numbers!");
    num1 == undefined ? a = prompt("a?"): a = num1; 
    num2 == undefined ? b = prompt("b?"): b = num2;
    return `Sum of ${a} and ${b} equals ${+a + +b}`; 
}

function uOk()
{
    const condition = confirm("u Ok?");
    condition? console.log("cool!") : console.log("keep up!");
}

function returnPrice(product)
{
    let price = null;
    switch (product.toLowerCase()){
        case "бананы":
            price = 100;
            break;
        case "апельсины":
            price = 90;
            break;
        case "киви":
        case "яблоки":
            price = 110;
            break;
        default:
            break;
        }
    return price;
    }

function greet(){
    // name_ = prompt("Who're You?");
    // console.log(`Hello ${name_}!`);
    console.log(`Hello ${prompt("Who're You?")}`)
}
// uOk();
// console.log(sum2());
// console.log(sum2(2,5));
// console.log(sum2(num2 = 50));
// console.log(sum2(num1 = 50));
// console.log(returnPrice("киви"));
// console.log(returnPrice("дыня"));
// console.log(returnPrice("яблоки"));
// greet();
console.log(sum2(undefined,10));
console.log(sum2(1,10));
console.log(sum2(num2 = 10));