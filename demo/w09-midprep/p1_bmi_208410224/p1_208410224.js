// let height = Number(prompt('輸入你的身高，以公分計算')) / 100;
// let weight = Number(prompt('輸入你的體種，以公斤計算'));
function bmiCalc_208410224(height, weight) {
    return weight / (height*height)
}

function bmiCalcResult_208410224(height, weight) {
    let bmi = bmiCalc_208410224(height,weight).toFixed(2)
    console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}`)
}


function bmiCalcSuggest_208410224(height, weight) {
    let bmi = bmiCalc_208410224(height,weight).toFixed(2)
    if (bmi < 18.5){
        let normal_low = bmi_normal_low(height)
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(normal_low - weight).toFixed(2)} kg lower than normal`);
    } else if(bmi <= 24){
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is normal`);
    } else{
        let normal_high = bmi_normal_high(height)
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(weight - normal_high).toFixed(2)} kg higher than normal`);
    }
}

function bmi_normal_low(height){
    return 18.5 * height * height
}
function bmi_normal_high(height){
    return 24 * height * height
}

// bmiCalcResult_208410224(1.75, 55)
// bmiCalcResult_208410224(1.75, 70)
// bmiCalcResult_208410224(1.75, 85)

// bmiCalcSuggest_208410224(1.75, 55);
// bmiCalcSuggest_208410224(1.75, 70);
// bmiCalcSuggest_208410224(1.75, 85);

const bmi_data_208410224 = [
    {height: 1.75, weight: 55, },
    {height: 1.75, weight: 70, },
    {height: 1.75, weight: 75, },
    {height: 1.75, weight: 77, },
    {height: 1.75, weight: 70, },
    {height: 1.65, weight: 75, },
    {height: 1.75, weight: 68, },
    {height: 1.63, weight: 70, },
    {height: 1.66, weight: 75, },
    {height: 1.67, weight: 75, },
];

bmi_data_208410224.forEach((item) => {
    bmiCalcSuggest_208410224(item.height,item.weight);
})

let lowerCount = 0
let normalCount = 0
let higherCount = 0

bmi_data_208410224.forEach((item) => {
    const bmi = bmiCalc_208410224(item.height,item.weight)
    if (bmi < 18.5){
        lowerCount++
    } else if(bmi <= 24){
        normalCount++
    } else{
        higherCount++
    }
})

console.log(`
bmi summary:
  lower: ${lowerCount}
  normal: ${normalCount}
  higher: ${higherCount}
`);
