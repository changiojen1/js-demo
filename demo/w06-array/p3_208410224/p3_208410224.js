const btnC = document.querySelector('#btn-c')
const btnF = document.querySelector('#btn-f')
const input = document.querySelector('#input-number')
const currentCal = document.querySelector('#current-calculation')

btnC.addEventListener('click', () => {
    let c,f,output
    c = Number(input.value).toFixed(2)
    f = (c * 9/5 +32).toFixed(2)
    output = `${c} C = ${f} F`
    currentCal.textContent = output
})
btnF.addEventListener('click', () => {
    let c,f,output
    f = Number(input.value).toFixed(2)
    c = ((f - 32) / 9 * 5).toFixed(2)
    output = ` ${f} F = ${c} C `
    currentCal.textContent = output
})