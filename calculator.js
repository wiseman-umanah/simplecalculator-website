let output = document.querySelector(".display")
let output1 = document.querySelector(".display2")

function cal(num){
    if (num === "^"){
        num = "**"
    }
    if (num === "%"){
        num = "/100"
    } 
    output.innerHTML += num
}

function evaluat(){
    if (output.innerHTML == " "){
        output1.innerHTML = 0
    }
    else{
    output1.innerHTML = eval(output.innerHTML)
    }
}

function clearDat(){
    output.innerHTML = output.innerHTML.slice(0,-1)
}

function cleared(){
    output.innerHTML = " "
}

function auto(){
evaluat()
}