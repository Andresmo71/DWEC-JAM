const lista=document.querySelector('ul')

fetch('products.json')
.then(response =>{
    if(!response.ok){
        throw new Error('Error al cargar los productos')

    }
    return response.json()

})

.then(data =>{
    data.products.forEach(product => {
        const elemento=document.createElement("li");

        elemento.innerHTML=<strong>${product.Name}</strong> can be found in ${product.Location}.
              Cost: <strong>${product.Price}</strong>

        lista.appendChild(elemento)
        
    });
})