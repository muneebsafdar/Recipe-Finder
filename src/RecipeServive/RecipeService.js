class RecipeService {


    async getRecepies(SearcheText){
        try {
            const RecepieData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearcheText}`)
            const data=await RecepieData.json()
            return data
             

        } catch (error) {
            console.log("Getting recepir Error ", error);
        }
    }

    async getRecepiesById(id){
        try {
            const RecepieData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data=await RecepieData.json()
            return data
        } catch (error) {
            console.log("Getting recepie by id Error ", error);
        }
    }
}

const recipeService = new RecipeService()

export default recipeService