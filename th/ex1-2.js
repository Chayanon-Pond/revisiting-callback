/* 
- เรากำลังสร้างเกมอยู่ ตัวละครในเกมของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. โจมตีผู้เล่นอื่น
    2. วิ่งหนีผู้เล่นอื่น
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

let damage = 30;
// Start Coding Here
function attack (damage) {
    damage = 30
    return `โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`
}

function runAway(damage) {
    return damage === 0 ? "😨 หนีสำเร็จ! รอดตายหวุดหวิด!" : "หนีไม่สำเร็จ"
}

function playerAction (call,damage) {
    return call(damage)
}


// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(playerAction(attack));  // 💥 โจมตีสำเร็จ! สร้างความเสียหาย 30 แต้ม
console.log(playerAction(runAway)); // 😨 หนีสำเร็จ! รอดตายหวุดหวิด!