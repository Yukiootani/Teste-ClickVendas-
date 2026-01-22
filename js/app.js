// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    const dados = DB.get();
    
    // 1. Aplica a Personalização (Cor e Nome)
    document.getElementById('titulo-loja').innerText = dados.config.nome;
    document.documentElement.style.setProperty('--primary', dados.config.cor);

    // 2. Desenha os Produtos
    const container = document.getElementById('lista-produtos');
    container.innerHTML = '';

    dados.produtos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="img-box"><img src="${p.img}"></div>
            <div class="info">
                <div>${p.nome}</div>
                <div class="price">R$ ${p.preco.toFixed(2)}</div>
                <button class="btn">Comprar</button>
            </div>
        `;
        container.appendChild(div);
    });
});
