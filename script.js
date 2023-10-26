function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    } 
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebeM.jpg')
            res.innerHTML = `Calculamos um bebê com ${idade} anos.`

        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemM.jpg')
            res.innerHTML = `Calculamos que você é um jovem  com ${idade} anos.`

        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adultoM.jpg')
            res.innerHTML = `Calculamos que você é um adulto  com ${idade} anos.`

        } else {
            //idoso
            img.setAttribute('src', 'idosoM.jpg')
            res.innerHTML = `Calculamos que você é um Idoso  com ${idade} anos.`
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebef.jpg')
            res.innerHTML = `Calculamos um bebê com ${idade} anos.`
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemF.jpg')
            res.innerHTML = `Calculamos que você é um jovem  com ${idade} anos.`
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adultoF.jpg')
            res.innerHTML = `Calculamos que você é um adulto  com ${idade} anos.`
        } else {
            //idoso
            img.setAttribute('src', 'idosoF.jpg')
            res.innerHTML = `Calculamos que você é um Idoso  com ${idade} anos.`
        }
    }
    res.style.textAlign = 'center'
    // res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}