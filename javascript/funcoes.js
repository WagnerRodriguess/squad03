
    document.addEventListener('DOMContentLoaded', function () {
      
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const termoPesquisa = urlParams.get('termo');


        document.querySelector('.principal__lista__titulo__pesquisa').textContent = `Você pesquisou por: ${termoPesquisa}`;

     
        const jogosPesquisa = document.querySelectorAll('.principal__lista__jogos__poster__pesquisa');

        let jogoEncontrado = false;

        jogosPesquisa.forEach(function (jogo) {
            const nomeJogo = jogo.nextElementSibling.textContent.toLowerCase();

       
            if (nomeJogo.includes(termoPesquisa)) {
        
                jogo.style.display = 'block';
                jogo.nextElementSibling.style.display = 'block';
                jogoEncontrado = true;
            } else {
         
                jogo.style.display = 'none';
                jogo.nextElementSibling.style.display = 'none';
            }
        });
so
        if (!jogoEncontrado) {
            const mensagemNenhumJogo = document.createElement('p');
            mensagemNenhumJogo.textContent = 'Nenhum jogo encontrado.';
            document.querySelector('.principal__jogos__pesquisa').appendChild(mensagemNenhumJogo);
        }
    });



function realizarPesquisa(event) {

    if (event.key === 'Enter') {

        const termoPesquisa = document.getElementById('campoPesquisa').value.toLowerCase();

        if (termoPesquisa.trim() !== '') {
            window.location.href = `pesquisa.html?termo=${encodeURIComponent(termoPesquisa)}`;
        }
    }
}
