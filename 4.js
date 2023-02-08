const start = () => {
    let mulheres = 0
    let vfilmes = 0
    let vezes = 50

    for(let i = 0; i <= vezes; i++){
        let sexo = Math.floor(Math.random()*2)
        let filmes = Math.floor(Math.random() * 10 + 5)

        if(sexo === 1 && filmes >= 10){
            vfilmes++
            mulheres++
        }else if(sexo === 1){
            mulheres++
        }else if(filmes >= 10){
            vfilmes++
        }

    }

    console.log(`Quantidade de mulheres: ${mulheres}`)
    console.log(`Quantidade de pessoas assistiram mais que 10 filmes: ${vfilmes}`)
    console.log(`Percentual de mulhers: ${( mulheres / vezes ) * 100}`)
}

start()