
document.getElementById("botao").addEventListener("click", function() {
    const paginas = ["natureza.html", "tecnologia.html", "esportes.html"];
    const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
    window.location.href = paginaAleatoria;
});
