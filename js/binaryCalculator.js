
function toggleOperators(disabled){
    const operators = document.getElementsByClassName('operator');
    for (operator of operators){
        operator.disabled = disabled;
    }        
}

const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');

function clickOperand(event){
    res.innerHTML+= event.target.innerHTML;
    toggleOperators(false);
}

function clickOperator(event) {
    res.innerHTML += event.target.innerHTML;
    toggleOperators(true);
}

function clickClear(event){
    res.innerHTML='';
    toggleOperators(true);
}

function clickEvents(){
    btn0.addEventListener('click', clickOperand);
    btn1.addEventListener('click', clickOperand);
    btnClr.addEventListener('click', clickClear);
    
    const operators = document.getElementsByClassName('operator');
    for (operator of operators) {
        operator.addEventListener('click', clickOperator);
    }    
    
}



toggleOperators(true);
clickEvents();
