async function getProducts() {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json()
    let products = data.products
    console.log(products)
    let divContent = products.map(function (item) {
        return `
        <div class="grid-container , grid-item">
        <img src='${item.thumbnail}'>
        <h2 class="title">${item.title}</h2>
        <h4 class="price">price: ${item.price}</h4>
        <p class="description">${item.description}</p>
        
        </div>
        `

    }).join('')

    let divHTML = document.querySelector('div')
    divHTML.innerHTML = divContent
}
getProducts()