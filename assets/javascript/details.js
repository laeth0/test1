const getDetails = async () =>{
    try{
        const urlParam = new URLSearchParams(window.location.search);
        const id = urlParam.get("id");
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        
        return data;
    }catch(e){
        return [];
    }

}


const displayDetails = async () => {
    try{
        const details = await getDetails();
        const result =  
            `
                <h2>${details.title}</h2>
                <img src="${details.image}" alt="${details.title}">
                <p>${details.description}</p>
                <p>${details.price}</p>
            `

        document.querySelector(".product-details .row").innerHTML = result;

    }catch(e){
        document.querySelector(".product-details .row").innerHTML = "<p>can't load this page. try again later...</p>";
    }
    document.querySelector(".loading").classList.add("d-none");
    

}

displayDetails();