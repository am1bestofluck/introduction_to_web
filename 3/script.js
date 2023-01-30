// const a = parseInt(prompt('gimme a'));
// const b = parseInt(prompt('gimme b'));
const a = prompt('whole a?');
const b = prompt('whole b?');
const sum = +a + +b;
console.log(`Результат сложения чисел ${a} и ${b} равен ${sum}.`);

const c = prompt('fractured c?');
const d = prompt('fractured d?');
const sum_fr = parseFloat(c) + parseFloat(d);
console.log(`Результат сложения чисел ${c} и ${d} равен ${sum_fr}.`);

function sum_of_2(var_a, var_b){
    return `Результат сложения ${var_a} и ${var_b} = ${+var_a + +var_b}`;
}

console.log(sum_of_2(a,d)); 

function void_yn(){
    let bool_ = confirm("Всё тип-топ?");
    let msg;
    const why = (bool_ == true)? msg = "Мы скоро будем!": msg = "Быстро решай вопросы :).";
    console.log(msg);
}

void_yn();