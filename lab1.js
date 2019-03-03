function reverseNumber(number){
    console.log(number)
    number =number + " "
    let tmp= number.split("").reverse().join("")
    console.log(tmp)
}

reverseNumber(123)