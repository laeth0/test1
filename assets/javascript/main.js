const  getCategories = async () => {
    try{
        const {data} = await axios.get("https://fakestoreapi.com/products/categories");
        return data;
    }catch(e){
        return [];
    }
}


const displayCategories = async () => {
    try{
        const categories = await getCategories();
        const result = categories.map(category =>
            `
                <div class="category">
                    <h2>${category}</h2>
                    <a href="./products.html?category=${category}">Show products</a>
                </div>
            `
        ).join("");
        document.querySelector(".categories .row").innerHTML = result;
    }catch(e){
        document.querySelector(".categories .row").innerHTML = "<p>can't load this page. try again later...</p>";
    }
    document.querySelector(".loading").classList.add("d-none");
}


displayCategories();
