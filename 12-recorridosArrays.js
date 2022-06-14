var articulos = [
    {nombre: "compu", costo: 200},
    {nombre: "TV", costo: 500},
    {nombre: "bici", costo: 1000}
];

var artFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Imprimir, se llama a artFiltrados

artFiltrados