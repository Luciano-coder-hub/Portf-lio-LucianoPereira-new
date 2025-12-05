document.addEventListener('DOMContentLoaded', function() {
    //A parte mais demorada e complicada do trabalho foi zerar os erros no javascript
    //Abaixo tem a lógica por trás do botão alternar TEMA CLARO/ESCURO 
    const temaBotao = document.getElementById('alternarTema');
    const corpo = document.body;
    if (temaBotao) {
        const temaS = localStorage.getItem('tema');
    // Aplica o tema salvo ao carregar a página
        if (temaS=== 'claro') {
            corpo.classList.add('tema-claro');
            temaBotao.textContent = 'Alternar para Tema Escuro';
        } else {
            temaBotao.textContent = 'Alternar para Tema Claro';
        }
        temaBotao.addEventListener('click', function() {
            
            corpo.classList.toggle('tema-claro');
            
            const temaAtual = corpo.classList.contains('tema-claro') ? 'claro' : 'escuro';
    // Salva a nova preferência para ser mantida ao navegar
            localStorage.setItem('tema', temaAtual);
            if (temaAtual === 'claro') {
                temaBotao.textContent = 'Alternar para Tema Escuro';
            } else {
                temaBotao.textContent = 'Alternar para Tema Claro';
            }
        });
    }
    //Abaixo tem o uso da variavel "feedback" para comunicar o resultado da interação ao usuário
    //A função If e o Return garantem que os campos nome, email e mensagem sejam preenchidos)
    const form = document.getElementById('formularioContato');
    const feedback = document.getElementById('mensagemFeedback'); 
    if (form && feedback) {
        form.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
            event.preventDefault(); 
            feedback.textContent = ''; 
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim(); 
    //Verifica se algum campo está vazio
            if (nome === '' || email === '' || mensagem === '') {
                feedback.textContent = 'ERRO: Por favor, preencha todos os campos obrigatórios.';
                feedback.style.color = 'red'; 
                return; 
            }
            // abaixo a confirmação do envio com o uso do "feedback"
            feedback.textContent = 'Mensagem enviada!';
            feedback.style.color = 'lightgreen'; 
            form.reset(); 
            setTimeout(function() {
                feedback.textContent = '';
            }, 6000); 
        });
    }
});