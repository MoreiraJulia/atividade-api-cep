function BuscarCEP(){
    let cep = document.getElementById("cep").value

    $.ajax({
        type: "GET",
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: (function(endereco){
            let bairro = endereco.bairro
            let rua = endereco.logradouro
            let cidade = endereco.localidade
            let uf = endereco.uf
            document.getElementById("endereco-completo").innerHTML = `Rua/Avenida: ${rua} <br> Bairro: ${bairro} <br> CIdade: ${cidade} - ${uf}`
        })
    })
}
document.getElementById("pesquisar").addEventListener("click", function() {
    BuscarCEP();
})