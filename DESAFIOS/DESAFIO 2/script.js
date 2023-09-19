function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`Verifique a idade e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 10){
             //crianca
             img.setAttribute(`src`,`imagens/crianca.png`)
            }else if(idade < 21){
                img.setAttribute(`src`,`imagens/jovem.png`)
            }else if(idade < 50){
                img.setAttribute(`src`,`imagens/adulto.png`)
            }else{
                img.setAttribute(`src`,`imagens/idoso.png`)
            }
        }else{
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute(`src`,`imagens/crianca2.png`)
               }else if(idade < 21){
                img.setAttribute(`src`,`imagens/jovam.png`)
               }else if(idade < 50){
                img.setAttribute(`src`,`imagens/adulta.png`)
               }else{
                img.setAttribute(`src`,`imagens/idosa.png`)
               }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 