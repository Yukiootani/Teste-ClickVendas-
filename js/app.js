// js/app.js - Com Lógica de Carrinho Visual
document.addEventListener('DOMContentLoaded', () => {
    const dados = DB.get(); 

    // 1. Configurações Visuais
    document.getElementById('nome-loja').innerText = dados.config.nome;
    document.documentElement.style.setProperty('--primary', dados.config.cor);
    
    // 2. Banners
    const bannerWrapper = document.getElementById('banner-wrapper');
    const banners = [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", 
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
    ];
    bannerWrapper.innerHTML = banners.map(url => `<div class="swiper-slide"><img src="${url}" class="banner-img"></div>`).join('');
    new Swiper('.swiper', { loop: true, centeredSlides: true, slidesPerView: 1.1, spaceBetween: 10 });

    // 3. Produtos
    const container = document.getElementById('grid-produtos');
    container.innerHTML = '';
    dados.produtos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="img-box">
                <img src="${p.img}" alt="${p.nome}">
                <div class="btn-plus" onclick="adicionarAoCarrinho('${p.nome}')">+</div>
            </div>
            <div class="info">
                <div class="name">${p.nome}</div>
                <span class="price">R$ ${p.preco.toFixed(2)}</span>
            </div>
        `;
        container.appendChild(div);
    });
});

// FUNÇÕES DE CARRINHO (VISUAL)
function toggleCart() {
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    
    if (overlay.classList.contains('open')) {
        overlay.classList.remove('open');
        drawer.classList.remove('open');
    } else {
        overlay.classList.add('open');
        drawer.classList.add('open');
    }
}

function adicionarAoCarrinho(nome) {
    // Simula adição visual
    const count = document.getElementById('cart-count');
    count.innerText = parseInt(count.innerText) + 1;
    
    const totalDiv = document.getElementById('cart-total-display');
    totalDiv.innerText = "R$ 45,90"; // Valor fictício só pra mudar
    
    // Animaçãozinha
    const floatBtn = document.querySelector('.float-cart');
    floatBtn.style.transform = "scale(1.1)";
    setTimeout(() => floatBtn.style.transform = "scale(1)", 200);
}
