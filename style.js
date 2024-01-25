//1 ixtiyoriy sonning kubini topuvchi funksiya

// function kub(age1) {
//     result = age1 * age1 * age1
//     return result
// }
// console.log(kub(3));



// const kub = function(age1) {
//     result = age1 * age1 * age1
//     return result
// }
// console.log(kub(3));


// const kub = (age1) => {
//     result = age1 * age1 * age1
//     return result
// }

// console.log(kub(3));


//ixtiyoriy ikkita sondan kattasini kvadratini topuvchi funksiya yozing

// function kattason(katta1 , katta2) {
    // if (katta1 >= katta2) {
    //     result = katta1 * katta1
        
    // }else{
    //     result = katta2 * katta2
    // }
    // return result
    
// }

// console.log(kattason(12, 8));

// const kattason = function (katta1, katta2) {
//     if (katta1 >= katta2) {
//         result = katta1 * katta1
        
//     }else{
//         result = katta2 * katta2
//     }
//     return result
    
// }

// console.log(kattason(12,8)); 
// const kattason = (katta1,katta2) =>{
//     if (katta1 >= katta2) {
//         result = katta1 * katta1
        
//     }else{
//         result = katta2 * katta2
//     }
//     return result
    
// }
// console.log(kattason (12,8));


//uch xonali sonning raqamlari yigindisini topuvchi funksiya yozing


// function number(son1) {
//     a = Math.floor (son1 / 100)
//     b = Math.floor (son1 / 10 % 10)
//     c = Math.floor (son1 % 10 )
//     result = a + b + c
//     return result
// }
// console.log(number(123));


// const number = function(son1) {
//     a = Math.floor (son1 / 100)
//     b = Math.floor (son1 / 10 % 10)
//     c = Math.floor (son1 % 10 )
//     result = a + b + c
//     return result
    
// }
// console.log(number(123));


// const number = (son1) =>{
//     a = Math.floor (son1 / 100)
//     b = Math.floor (son1 / 10 % 10)
//     c = Math.floor (son1 % 10 )
//     result = a + b + c
//     return result
// }
// console.log(number(123));


//ixtiyoriy sonning boluvchilarini topuvchi funksiya yozing

// function num(son) {
//     let smd = 1
//     for (let i = 1; i < son; i++) {
//         if (son % i == 0) {
//             smd = (i)
//             smd ++
//         }
        
//     }
    
//     return smd 
// }
// console.log(num (1));

// const num = function (son) {
//     let smd = 1
//     for (let i = 1; i < son; i++) {
//         if (son % i == 0) {
//             smd = (i)
//         }
        
//     }
    
//     return smd 
// }
// console.log(8);
// const num = (son) => {
//     let smd = 1
//     for (let i = 1; i < son; i++) {
//         if (son % i == 0) {
//             smd = (i)
//             smd ++
//         }
        
//     }
    
//     return smd 
// }
// console.log(num(5));



//1 dan n gacha barcha toq sonlar yigindisini topuvchi funksiya yozing

// function num5(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i+=2) {
//         sum += i;
//     }
//     return sum;
    
// }
// console.log(num5 (456));




// a dan b gacha barcha 3ga hamda 5ga karrali sonlar kopaymasini topuvchi funksiya yozing

// function num6(a,b) {
//     let ozgaruvchi = 0
//     for (let i = a; i <=b; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             ozgaruvchi = i;
//         }
//     }
//     return ozgaruvchi
    
// }
// let a = 1
// let b = 50
// console.log(num6 (22, 10));


//berilgan son tub yoki tub emasligini aniqlovchi funksiya
// function tub(red) {
//     if (red % 1 == 0 || red % red == 0) {
//         result = "tub son emas "
//     }else{
//         result = "tub son"
//     }
//     return result
    
// }
// console.log(tub (28));

// const tub = function (red) {
//     if (red % 1 == 0 || red % red == 0) {
//         result = "tub son emas "
//     }else{
//         result = "tub son"
//     }
//     return result    
// }
// console.log(tub (28));

// const tub = (red) =>{
//     if (red % 1 == 0 || red % red == 0) {
//         result = "tub son emas "
//     }else{
//         result = "tub son"
//     }
//     return result
// }
// console.log(tub(28));