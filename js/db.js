// js/db.js - SIMULA O FIREBASE NO SEU CELULAR
const DB_KEY = "clickvenda_teste_dados";

const DB = {
    // Carrega os dados ou cria padrão se estiver vazio
    get: () => {
        const data = localStorage.getItem(DB_KEY);
        if (data) return JSON.parse(data);
        return {
            config: { nome: "Minha Loja", cor: "#000000", logo: "" },
            produtos: [
                { id: 1, nome: "Produto Exemplo", preco: 50.00, img: "https://via.placeholder.com/150" }
            ]
        };
    },

    // Salva alterações (fingindo enviar pro servidor)
    save: (data) => {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
        console.log("Dados salvos no LocalStorage");
    },

    // Funções fáceis para o App usar
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
