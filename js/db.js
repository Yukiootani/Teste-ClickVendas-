// js/db.js - VERSÃO VAREJO JAPÃO
const DB_KEY = "clickvenda_teste_jp";

const DB = {
    get: () => {
        const data = localStorage.getItem(DB_KEY);
        if (data) return JSON.parse(data);
        return {
            config: { 
                nome: "Tokyo Gadgets Store", 
                cor: "#2c3e50", // Azul Escuro (Mais sério/Tecnológico)
                logo: "" 
            },
            produtos: [
                { 
                    id: 1, 
                    nome: "Sony WH-1000XM5 Noise Canceling", 
                    preco: 42000.00, 
                    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500" 
                },
                { 
                    id: 2, 
                    nome: "Nintendo Switch OLED - White", 
                    preco: 37980.00, 
                    img: "https://images.unsplash.com/photo-1629450346383-7c0a876a3f0f?w=500" 
                },
                { 
                    id: 3, 
                    nome: "Luffy Gear 5 Figure (Import)", 
                    preco: 8500.00, 
                    img: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=500" 
                },
                { 
                    id: 4, 
                    nome: "iPhone 15 Pro Max Case", 
                    preco: 2500.00, 
                    img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500" 
                }
            ]
        };
    },

    save: (data) => {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
    },

    adicionarProduto: (prod) => {
        const data = DB.get();
        data.produtos.push(prod);
        DB.save(data);
    },

    atualizarConfig: (novaConfig) => {
        const data = DB.get();
        data.config = { ...data.config, ...novaConfig };
        DB.save(data);
    }
};
