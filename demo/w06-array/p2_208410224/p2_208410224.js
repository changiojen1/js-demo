import { students, sdata } from './data_208410224.js'

console.log("students",students);
console.log("sdata",sdata);

sdata.sort((a,b) => a-b)
console.log("sdata",sdata);
console.log(`The highest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);

const students2 = students.map((student) => {
    return {...student,role:'student'}
})
console.log("students2 original",students2);
students2.sort((a,b) => a.score - b.score)
console.log("students2 sorted",students2);
console.log(`The highest score: ${students2[0].score}`);
console.log(`The lowest score: ${students2[students2.length-1].score}`);
