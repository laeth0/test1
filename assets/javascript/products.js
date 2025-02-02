const getProducts= async ()=>{
    try{
        const urlParam = new URLSearchParams(window.location.search);
        const category = urlParam.get("category");
        const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        
        return data;
    }catch(e){
        return [];
    }
    
}

const displayProducts = async () => {
    try{
        const products = await getProducts();
        const result = products.map(product =>
            `
                <div class="product">
                    <h3>${product.title}</h3>
                    <img src="${product.image}" alt="${product.title}">
                    <p>${product.price}</p>
                    <a href="./details.html?id=${product.id}">read more</a>
                    <button>Add to Cart</button>
                </div>
            `
        ).join("");

        document.querySelector(".products .row").innerHTML = result;
    }catch(e){
        document.querySelector(".products .row").innerHTML = "<p>can't load this page. try again later...</p>";
    }
    document.querySelector(".loading").classList.add("d-none");

}

displayProducts();