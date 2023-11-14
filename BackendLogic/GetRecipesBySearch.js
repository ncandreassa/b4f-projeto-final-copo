import { GetRecipes } from "@/database/CRUD"
import { GetCreatedList } from "./GetCreatedList"

export async function GetRecipesBySearch(type,items, userId){
    let word = items 
    if(items.includes(',')) {
        word = items.replaceAll(',','').split(' ')
    } else {
        word = items.split(' ')
    }
    
    let typeDrink = type

    if(type === 'naoalcoolica') typeDrink = 'Não Alcoólico'
    if(type === 'alcoolico') typeDrink = 'Alcoólico'
    
    let recipes = ''
    if(userId === 'visitante') {
        recipes = await GetRecipes()
    } else {
        const userRecipes = await GetCreatedList(userId)
        const allRecipes= await GetRecipes()
        recipes = allRecipes.concat(userRecipes.createdRecipes)
    }
   
    const filterAlcOrNonAlcDrinks = recipes.filter(drink => 
        drink.type === typeDrink && drink || typeDrink === 'todas' && drink)

    if(word[0] === 'vazio') return filterAlcOrNonAlcDrinks

    const resultByName = filterAlcOrNonAlcDrinks.filter(drink => 
        drink.name.toLowerCase() === word.join(' ').toLowerCase() && drink)
    if(resultByName.length > 0) return resultByName

    const result = word.map(word => filterAlcOrNonAlcDrinks.filter(drink => drink.ingredients.reduce((acc, ingredient) => 
    ingredient.name.toLowerCase().includes(word.toLowerCase()) ? acc = drink : acc, 0))).flat()
        console.log(result.length)
    if (result.length > 0) return result
    
    const resultByFirstName = filterAlcOrNonAlcDrinks.filter(drink => 
        drink.name.toLowerCase().includes(word.join(' ').toLowerCase()) && drink
        )
    return resultByFirstName
}

