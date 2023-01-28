function convert(){
    const grab = document.getElementById("input_cel").value;
    const calculated = Math.round((+grab *9/5) +32); 
    console.log(calculated);
    document.getElementById("output").innerHTML = `${calculated} &#8457; 	
    &#128155;`;
}