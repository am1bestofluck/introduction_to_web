const FIXES =["solution arrays",
    [   `&lt;user><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;name>"Иван"&lt;/name><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;surname>"Иванов"&lt;/surname><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;patronymic>"Иванович"&lt;/patronymic><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;age>"30"&lt;/age><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;phone><p class="semantic">"+7 926 766 48 48"</p>&lt;/phone><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;birthplace><p class="semantic">"Москва"</p>&lt;/birthplace><br>
        &lt;/user<p class="syntax">></p><br></p>
        `,
        "interactive1",
        "task1"]
    ,
    [
        `<p class = "syntax">{</p> <p class = "syntax">"</p>name    <p class = "syntax">"</p>: <p class = "syntax">"</p>Иван<p class = "syntax">"</p>,<br>
        <p class = "syntax">"</p>surname<p class = "syntax">"</p>: <p class = "syntax">"</p>Иванов<p class = "syntax">"</p>,<br>
        <p class = "syntax">"</p>patronymic<p class = "syntax">"</p>: <p class = "syntax">"</p>Иванович<p class = "syntax">"</p>,<br>
        <p class = "syntax">"</p>age<p class = "syntax">"</p>: <p class = "syntax">"</p>30<p class = "syntax">"</p>,<br>
        <p class = "syntax">"</p>birthplace<p class = "syntax">"</p>: <p class = "syntax">"</p>Москва<p class = "syntax">"</p>,<br>
        <p class = "syntax">"</p>phone<p class = "syntax">"</p>: <p class = "syntax">"</p>+7 926 766 48 48<p class = "syntax">"</p><p class = "syntax">}</p>`,
        "interactive2",
        "task2"]
    ];

function fixIt(todo){
    const fixFirst = document.getElementById(FIXES[todo][1]);
    fixFirst.innerHTML=FIXES[todo][0];
}

const but1 = document.getElementById(FIXES[1][2]);
but1.addEventListener("mouseup",function(){fixIt(1)});

but2 = document.getElementById(FIXES[2][2]);
but2.addEventListener("mouseup",function(){fixIt(2)});
