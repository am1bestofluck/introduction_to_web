function whyHello(name_i){
    let name_m;
    name_i == undefined ? name_m = prompt("Who're You?") :name_m =name_i;
    console.log(`Hello ${name_m}!`)
}
whyHello();
whyHello("User");