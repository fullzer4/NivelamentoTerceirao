const start = () => {
    let curse = 20
    let trad = 10
    let cost = 50

    let decisionCurse = "S"
    let decisionTrad = "S"

    if(decisionCurse === "S" && decisionTrad === "S"){
        cost = cost + (curse + trad)
        console.log(`Valor da Inscrição: R$ ${cost}`)
    }else if(decisionCurse === "S"){
        cost = cost + curse
        console.log(`Valor da Inscrição: R$ ${cost}`)
    }else if(decisionTrad === "S"){
        cost = cost + trad
        console.log(`Valor da Inscrição: R$ ${cost}`)
    }else {
        return "error"
    }
}

start()