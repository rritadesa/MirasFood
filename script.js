const lugares = [
    {
        nome: "Restaurante MirasFood",
        categoria: "Restaurante",
        descricao: "Comida saborosa em Mirandiba - PE."
    },
    {
        nome: "Lanchonete Mirandiba",
        categoria: "Lanchonete",
        descricao: "Lanches, bebidas e opções rápidas."
    },
    {
        nome: "Padaria Central",
        categoria: "Padaria",
        descricao: "Pães, bolos, café e outros produtos."
    },
    {
        nome: "Pizzaria Mirandiba",
        categoria: "Pizzaria",
        descricao: "Pizzas e outros sabores."
    },
    {
        nome: "Sorveteria Mirandiba",
        categoria: "Sorveteria",
        descricao: "Sorvetes e sobremesas."
    }
];

const lista = document.getElementById("lugares-lista");
const busca = document.getElementById("search");
const botaoBuscar = document.getElementById("buscar");

function mostrarLugares(listaLugares) {
    lista.innerHTML = "";

    if (listaLugares.length === 0) {
        lista.innerHTML = `
            <div class="card">
                <h3>Nenhum lugar encontrado</h3>
                <p>Tente pesquisar outro nome ou categoria.</p>
            </div>
        `;
        return;
    }

    listaLugares.forEach(lugar => {
        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${lugar.nome}</h3>
            <p><strong>${lugar.categoria}</strong></p>
            <p>${lugar.descricao}</p>
        `;

        lista.appendChild(card);
    });
}

function pesquisar() {
    const termo = busca.value.toLowerCase().trim();

    const resultado = lugares.filter(lugar =>
        lugar.nome.toLowerCase().includes(termo) ||
        lugar.categoria.toLowerCase().includes(termo)
    );

    mostrarLugares(resultado);
}

botaoBuscar.addEventListener("click", pesquisar);

busca.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        pesquisar();
    }
});

document.querySelectorAll("[data-category]")
    .forEach(botao => {

        botao.addEventListener("click", () => {

            const categoria =
                botao.dataset.category;

            const resultado = lugares.filter(
                lugar =>
                    lugar.categoria === categoria
            );

            mostrarLugares(resultado);

            document
                .getElementById("lugares")
                .scrollIntoView({
                    behavior: "smooth"
                });
        });
    });

mostrarLugares(lugares);
