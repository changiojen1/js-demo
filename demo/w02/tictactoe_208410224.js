const resetBtn  = document.querySelector("#reset")
const liList = document.querySelectorAll("#board li")
const container = document.querySelector("#container")
// console.log(liList);
// console.log(reset);
let isPlayerOTurn = true
let GameOver = false
let steps = 0

reset = () =>{
    liList.forEach(item => {
        item.textContent = '+'
        item.classList = ''
    });
    isPlayerOTurn = true
    GameOver = false
    container.style.background = '#666'
    steps = 0
}

checkWin = (ox) => {
    oxList = []
    liList.forEach((item) => {
        oxList.push(item.classList.contains(ox))
    });
    const [l1,l2,l3,l4,l5,l6,l7,l8,l9] = oxList
    if(
        (l1&l2&l3) ||
        (l4&l5&l6) ||
        (l7&l8&l9) ||
        (l1&l4&l7) ||
        (l2&l5&l8) ||
        (l3&l6&l9) ||
        (l1&l5&l9) ||
        (l3&l5&l7)
    ){
        alert(`Winner is : ${ox.toUpperCase()}`)
        if (!isPlayerOTurn) container.style.background = 'rgba(144, 238, 144, 0.5)'
        else container.style.background = 'rgba(240, 118, 12, 0.762)'
        GameOver = true
        // console.log(oxList)
        // console.log(ox.toUpperCase() + ' :true');
    }
    if((steps > 8) & (!GameOver)){
        GameOver = true
        alert('Tie!')
    }
}

clickBoard = (li) =>{
    // console.log(li.target.classList);
    li = li.target
    if(!GameOver){
        if(!li.classList.contains('disabled')){
            if(isPlayerOTurn){
                li.classList.add('o','disabled')
                li.textContent = 'O'
                isPlayerOTurn = false
                steps++
                checkWin('o')
            }
            else{
                li.classList.add('x','disabled')
                li.textContent = 'X'
                isPlayerOTurn = true
                steps++
                checkWin('x')
            }
        }
        else alert("Already Filled!")
    }
    else alert('GamerOver!')
}

resetBtn.addEventListener("click",reset)

liList.forEach(li => {
    li.addEventListener('click',clickBoard)
});