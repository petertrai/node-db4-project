const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
    .rightJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)

    return recipeRows
}

module.exports = {
    getRecipeById
}