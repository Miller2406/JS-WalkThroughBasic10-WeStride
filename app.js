//จงเขียน Function เข้ารหัสตัวอักษร โดยที่มีหลักการเข้ารหัสคือ ค่าที่รับเข้ามาจะเป็นค่าที่ยังไม่ได้เข้ารหัส ถ้าต้องการเข้ารหัสต้องเอาตัวอักษรนั้นๆ ไปลบ 5 ตำแหน่งก่อนหน้า ผลลัพธ์จะไดข้อความที่ถูกเข้ารหัสแล้ว ** หาก 5 ตัวอักษรก่อนหน้าไม่มี คือสิ้นสุดที่ a แล้ว ให้นับต่อเนื่องที่ z ย้อนไปเรื่อยๆจนกว่าจะครบ 5 ตัวอักษร

// #alphabet lowwerCase
const alphabetB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabet = alphabetB.map(element => {
    return element.toLocaleLowerCase();
})


//
function hackPass(password) {
    let targetResult = [];
    for (const s of password) {

        if (s !== ' ') { //ส่วนนี้ตรวจสอบช่องว่าง ถ้ามีให้ข้ามไป ถ้าเป็นอักษร ให้ทำในนี้
            let sIndex = alphabet.indexOf(s); // หาลำดับมันก่อน
            let targetIndex = sIndex - 5; // เคลื่อนลดไป 5 นั่นหละค่าที่เราต้องการแก้รหัส

            if (targetIndex >= 0) { // ตรวจสอบว่า ตำแหน่งที่จะไป มันเกิดกว่า 0-25 26 ตัวไหม
                targetValue = alphabet[targetIndex]; // 0-25 ดูว่าจะตรงกับตัวอะไร
                targetResult.push(targetValue); // อัดมันเข้าไปในผลลัพธ์
            } else {
                let subIndex = ((alphabet.length) + targetIndex) // พวกค่าติดลบ เอามันไปบวก
                let subValue = alphabet[subIndex]; // หาดูดิ๊ว่าตรงกับตัวไหน พวกที่เกิน a มา
                targetResult.push(subValue); // อัดมันเข้าไปในผลลัพธ์
            }
        } else { // ส่วนนี้ข้ามมาจากตรวจช่องว่างพบ
            targetResult.push(' ') // push ช่องว่างเข้าไป
        }

    }
    return targetResult.join(''); // join ซะหน่อย แปลง array เป็นข้อความต่อเนื่องที่ตัวติดๆกัน

}

const tR = hackPass('n qtaj dtz ytt rzhm') // คัดลอก เข้าไปเป็นตัวแปร tR จะได้เรียกดูบน console ได้
console.log(tR);
console.log(hackPass('nopqrstuvwxyz')); // พวกนี้มันพวกผี แสดงให้เห็นแต่จับต้องไม่ได้
console.log(hackPass('abcdefghijklm'));
console.log(hackPass('e'));
