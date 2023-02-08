const start = () => {
    let nota1 = []
    let nota2 = []
    let valorTotal = 0
    let conceitoA = 0

    for(let i = 0; i <= 10; i++){
        let vnota1 = Math.floor(Math.random() * 20 - 1)
        let vnota2 = Math.floor(Math.random() * 20 - 1)

        nota1.push(vnota1)
        nota2.push(vnota2)
    }

    let alunos = [nota1, nota2]
    
    for(let i = 0; i < 10; i++){
        let vmedia = (alunos[0][i] + alunos[1][i]) / 2
        console.log(vmedia)
        if(vmedia >= 9){
            conceitoA++
        }

        valorTotal = valorTotal + vmedia
    }

    console.log(`Quantidade de alunos conceito A: ${conceitoA}`)
    console.log(`Média geral da turma: ${valorTotal / 10}`)
}

start()