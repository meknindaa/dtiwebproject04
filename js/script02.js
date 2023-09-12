//console.log('DTI.....');
//stament
console.log(111);
console.log(222);
console.log(333); console.log(444); console.log(555)
//vairable ตัวแปร
var a = 100
let b = 200
console.log(a+b);
console.log('...................');

//scope /block scopr --> มันคือ { ?????? } มันคือขอบเขตการทำงาน

{
    let e = 999
    {

    var c = 300;
    let d = 400;
    //console.log(a)
    //console.log(b)
    //console.log(c)
   console.log(e) //no error
    }
    //console.log(a);
    //console.log(b);
    //console.log(c);
    console.log(e); //no error
}
console.log(a);
console.log(b);
console.log(c);
//console.log(e); //no error
//constant ค่าคงที่ (มาตราฐานเขาให้เป็นตัวใหญ่หมด)
const DATA_A1 = 52
const INFO1 = "wow"
const INFO2 = 'woo'
INF01 = "wow"
// INF01 = "wee" error
console.log (INFO1 + ' @@@@ ' + INFO2)
console.log('SAU\nDTI\t\t20203')
console.log('I love "SAU"')
console.log('I love "SAU"')
console.log('สวัสดี %S %d', INFO1 , DATA_A1)

{
    {
        const INFO3 = 'wee';
        console.log(INFO3);
    }
    //console.log(INFO3); error
}
//console.log(INFO3); error

//logoeindow + alt + 96
console.log('welcome....')
let yourname = "สมชาย"
let year = 2000
let age = 15

//สวัสดีสมชาย คุณเกิดปี 2000 อายุ 15
console.log('สวัสดี' + yourname +'คุณเกิดปี' + year + 'อายุ' + age +'ปี')

console.log(`สวัสดี ${yourname} คุณเกิดปี ${year} อายุ ${age} ปี${20*5}`) 
//strong method
let data = ' southeast Aaia University '

console.log(data)
console.log(data.length)
console.log(data.trim)
console.log(data.trim().length)
console.log(data.toUpperCase())
console.log(data.toUpperCase())
console.log(data.substring(10)) //จะตัดข้อความตั้งอต่ index 10
let data2 = 'welcome to'
console.log(data2.substring(5))
console.log(data2.substring(3,9))
console.log(data2.repeat(5))
console.log(data2.replace('to','to thailand'))
console.log(data2.repeat('e','xxx'))
