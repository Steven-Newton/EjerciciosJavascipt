
function getSmallest(numbers) {
    temp = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if ( temp > numbers[i]) {
            temp = numbers[i];
        }
    }
    return temp;
}
function getBiggest(numbers) {
    temp = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if ( temp<numbers[i] ) {
            temp = numbers[i];
        }
    }
    return temp;
}
function divisibleBy3(num) {
    if(num%3==0){
        
        return true;
    }
    else{
        return false;
    }
}
function checkSuma(num) {
    templog =""
    if(num[0]==(num[1]+num[2])){
        templog +=`${num[0]} es suma de ${num[1]} y ${num[2]}`;
    }else if (num[1]==(num[0]+num[2])){
        templog +=`${num[1]} es suma de ${num[0]} y ${num[2]}`;
    }else if (num[2]==(num[0]+num[1])){
        templog +=`${num[2]} es suma de ${num[1]} y ${num[0]}`;
    }else{
        templog+= `ningun numero es la suma de otros 2`;
    }
    return templog;
}

function checkPar(x) {
    if(x%2==0){
        
        return true;
    }
    else{
        return false;
    }
}

let btn = document.getElementById("btnMayor");
btn.addEventListener ("click", function (e){
    e.preventDefault ();
    num = new Array();
    num.push(parseInt(document.getElementById("Num1A").value))
    num.push(parseInt(document.getElementById("Num2A").value))
    num.push(parseInt(document.getElementById("Num3A").value))
    document.getElementById("txt1").innerHTML = getBiggest(num)

})

let btn2 = document.getElementById("btnMenor");
btn2.addEventListener ("click", function (e){
    e.preventDefault ();
    num = new Array();
    num.push(parseInt(document.getElementById("Num1B").value))
    num.push(parseInt(document.getElementById("Num2B").value))
    num.push(parseInt(document.getElementById("Num3B").value))
    document.getElementById("txt2").innerHTML = getSmallest(num)

})

let btn4 = document.getElementById("btnmultiplo3");
btn4.addEventListener ("click", function (e){
    e.preventDefault ();
    if(divisibleBy3(parseInt(document.getElementById("Num1D").value))){
        document.getElementById("txt4").innerHTML = ` ${(parseInt(document.getElementById("Num1D").value))} es divisible entre 3`;
    } else{
        document.getElementById("txt4").innerHTML = ` ${(parseInt(document.getElementById("Num1D").value))} no es divisible entre 3`;
    }

})
  

let btn5 = document.getElementById("btnSuma");
btn5.addEventListener("click", function (e){
    e.preventDefault ();
    num = new Array();
    num.push(parseInt(document.getElementById("Num1E").value))
    num.push(parseInt(document.getElementById("Num2E").value))
    num.push(parseInt(document.getElementById("Num3E").value))

    document.getElementById("txt5").innerHTML = checkSuma(num)
})
let btn6 = document.getElementById("btnPar");
btn6.addEventListener("click", function (e){
    e.preventDefault ();
    if(checkPar(parseInt(document.getElementById("Num1F").value))){
        document.getElementById("txt6").innerHTML = ` ${(parseInt(document.getElementById("Num1F").value))} es par`;
    } else{
        document.getElementById("txt6").innerHTML = ` ${(parseInt(document.getElementById("Num1F").value))} no es par`;
    }
})
  
  
  