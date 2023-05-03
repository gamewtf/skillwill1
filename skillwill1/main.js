function numbs(a,b){
    if(a===b){
        return 'tolia'
    }
    else{
        return 'ar aris toli'
    }
}

console.log(numbs(10,"10"))
console.log(numbs(10,10))

function FtoC(F){
    if(typeof F === 'number'){
        return (F-32)*0.5556
    }else{
        return false
    }
}
console.log(FtoC(10))
console.log(FtoC('10'))

function calculation(a,b,operation){
    if(typeof a,b === 'number', operation == '+'){
        return a + b
    }
    else if(typeof a,b === 'number', operation == '-'){
        return a - b
    }
    else if(typeof a,b === 'number', operation == '*'){
        return a * b
    }
    else if(typeof a,b === 'number', operation == '/'){
        return a / b
    }
    else{
        return false
    }
}
console.log(calculation(12,6,'+'))
console.log(calculation(12,6,'-'))
console.log(calculation(12,6,'/'))
console.log(calculation(12,6,'*'))
console.log(calculation("12",6,'x'))