

const gerarTabuada = () => {
    let numInput = document.querySelector('input#txtnum')
    let selTab = document.querySelector('select#selInput')

    // validando mensagem caso não digite nenhum dado 

    if (numInput.value.length == 0) {
        alert('[ERRO] Você tem que digitar um número! ')
    } else {

        let num = Number(numInput.value)
         
        selTab.innerHTML = ''


        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')

            item.text = `${num} x ${c} = ${num * c}` // cria um texto dentro do option do select
            item.value = `tab${c}`

            selTab.appendChild(item) // adiciona o item ao select
        }

    }
}