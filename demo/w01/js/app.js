const input = document.querySelector('#input-number')
const calculation = document.querySelector('#current-calculation')
const result = document.querySelector('#current-result')
const addBtn = document.querySelector('#btn-add')
const subtractBtn = document.querySelector('#btn-subtract')
const multiplyBtn = document.querySelector('#btn-multiply')
const divideBtn = document.querySelector('#btn-divide')

const defaultRes = 0
let resultVal = defaultRes

let operators = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => a/b
}
const outputResult = (res,text) => {
    result.textContent = res
    calculation.textContent = text
}
const calculate = (operator) => {
    operator = operator.target.innerHTML
    operand1 = resultVal
    operand2 = parseInt(input.value)
    resultVal = operators[operator](operand1,operand2)
    calText = `${operand1} ${operator} ${operand2}`
    outputResult(resultVal,calText)
}

const BtnListenList = [addBtn,subtractBtn,multiplyBtn,divideBtn]
for(i=0;i<BtnListenList.length;i++){
    BtnListenList[i].addEventListener('click',calculate)
}