//objeto// // pres f8 para run//


let amigo = {nome:`Erick`, sexo:`m`, peso: `58`,engordar(p=0){
    console.log("engordou")
    this.peso += p
}

}


console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
