let usage = prompt("How many litres of water have you used?")
let usageKl = usage / 1000

let s1 = 15.73
//max 94.38
let s2 = 22.38
//max 195.08999999999997
let s3 = 31.77
//max 973.4549999999999
let s4 = 69.76

if (usageKl <= 6 ) {
    pay = s1 * usageKl
    console.log(pay)
} 
else if (usageKl > 6 && usageKl <= 10.5) {
    pay = (s1 * 6) + (s2 * (usageKl - 6))
    console.log(pay)
} 
else if (usageKl > 10.5 && usageKl <= 35) {
    pay = (s1 * 6) + (s2 * 4.5 ) + (s3 * (usageKl - 10.5))
    console.log(pay)
}
else {
    pay = (s1 * 6) + (s2 * 4.5 ) + (s3 * 24.5 ) + (s4 * (usageKl - 35))
    console.log(pay)
}