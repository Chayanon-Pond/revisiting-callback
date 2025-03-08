/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
function calculate (x,y,callback) {
    return callback(x,y)

}
function add(x,y) {
    return x+y
    
}
function subtract(x,y) {
    return x-y
    
}
function multiply(x,y) {
    return x*y
    
}
function divide(x,y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
    
}

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"