const start = () =>{
    let salario = 3000
    let ajuste1 = 0.15
    let ajuste2 = 0.12
    let ajuste3 = 0.10

    if(salario <= 2000){
        console.log(`Novo Salário: ${salario + (salario * ajuste1)}`)
        console.log(`Valor reajustado: ${salario * ajuste1}`)
        console.log(`Índice Reajustado: 15%`)
    }else if(salario > 2000 && salario <= 4000){
        console.log(`Novo Salário: ${salario + (salario * ajuste2)}`)
        console.log(`Valor reajustado: ${salario * ajuste2}`)
        console.log(`Índice Reajustado: 12%`)
    }else if(salario > 4000){
        console.log(`Novo Salário: ${salario + (salario * ajuste3)}`)
        console.log(`Valor reajustado: ${salario * ajuste3}`)
        console.log(`Índice Reajustado: 10%`)
    }else{
        return "error"
    }
}

start()