
function toggleOperators(disabled){
    const operators = document.getElementsByClassName('operator');
    for (operator of operators){
        operator.disabled = disabled;
    }        
    btnEql.disabled = true;

}

const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
let operand= '';
let binaryExpression = '';

function clickOperand(event){
    const digit = event.target.innerHTML;
    res.innerHTML+= digit;
    operand += digit;
    console.log('operand:', operand);
    toggleOperators(false);
    btnEql.disabled = false;
}

function processOperands(){
    let operator = event.target.innerHTML;
    operator = (operator === '=') ? '' : operator;
    res.innerHTML += operator;
    binaryExpression += parseInt(operand, 2).toString() + operator;
    console.log('binaryExpression:', binaryExpression);
    operand = '';
}

function clickOperator(event) {
    processOperands();
    btnEql.disabled = true;
    toggleOperators(true);
}

function clickClear(event){
    res.innerHTML='';
    binaryExpression = '';
    toggleOperators(true);
}

function clickEql(event){
    processOperands();
    res.innerHTML = result();
    btnEql.disabled = true;
}

function result(){
    console.log(binaryExpression);
    let result = (binaryExpression !=='') ? eval(binaryExpression) : '';
    console.log(typeof result);
    return result.toString(2);
}

function clickEvents(){
    btn0.addEventListener('click', clickOperand);
    btn1.addEventListener('click', clickOperand);
    btnClr.addEventListener('click', clickClear);
    btnEql.addEventListener('click', clickEql);
    
    const operators = document.getElementsByClassName('operator');
    for (operator of operators) {
        operator.addEventListener('click', clickOperator);
    }    
    
}

toggleOperators(true);
clickEvents();
