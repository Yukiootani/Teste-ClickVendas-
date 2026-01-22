// js/app.js - Versão PRO com Banners
document.addEventListener('DOMContentLoaded', () => {
    const dados = DB.get(); // Pega do mock DB

    // 1. Configurações Visuais
    document.getElementById('nome-loja').innerText = dados.config.nome;
    document.documentElement.style.setProperty('--primary', dados.config.cor);
    
    // 2. Renderizar BANNERS (Novidade!)
    const bannerWrapper = document.getElementById('banner-wrapper');
    const banners = [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800", // Comida
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", // Pizza
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"  // Hamburguer
    ];
    
    bannerWrapper.innerHTML = banners.map(url => `
        <div class="swiper-slide">
            <img src="${url}" class="banner-img">
        </div>
    `).join('');

    // Inicia o Swiper (Biblioteca Externa)
    new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.1, // Mostra um pedacinho do próximo
        spaceBetween: 10,
        autoplay: { delay: 3000 }
    });

    // 3. Renderizar PRODUTOS
    const container = document.getElementById('grid-produtos');
    container.innerHTML = ''; // Limpa

    dados.produtos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        // HTML Profissional com botão +
        div.innerHTML = `
            <div class="img-box">
                <img src="${p.img}" alt="${p.nome}">
                <div class="btn-plus" onclick="alert('Adicionado: ${p.nome}')">+</div>
            </div>
            <div class="info">
                <div class="name">${p.nome}</div>
                <span class="price">R$ ${p.preco.toFixed(2)}</span>
            </div>
        `;
        container.appendChild(div);
    });
});
