const apiEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const submitButton = document.querySelector('#submit')
const input = document.querySelector('#search-input')

const fetchCocktails = (e) => {
    e.preventDefault()
    let query = input.value
    container.
    fetch(apiEndpoint + query)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        const drinks = data.drinks
        for (let index = 0; index < drinks.length; index++) {
            let singleDrink = drinks[index];
            console.log(singleDrink);
            const article = document.createElement('article')
            article.innerHTML = `
            <div class="image">
            ` 
            
            
        }
    })
}
