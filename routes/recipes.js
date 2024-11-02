// routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Get all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.render('viewRecipes', { recipes });
});

// Add new recipe form
router.get('/add', (req, res) => {
    res.render('addRecipe');
});

// Add new recipe submission
router.post('/add', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const recipe = new Recipe({ title, ingredients, instructions });
    await recipe.save();
    res.redirect('/recipes');
});

// Edit recipe form
router.get('/edit/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.render('editRecipe', { recipe });
});

// Update recipe
router.post('/edit/:id', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    await Recipe.findByIdAndUpdate(req.params.id, { title, ingredients, instructions });
    res.redirect('/recipes');
});

// Delete recipe
router.post('/delete/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/recipes');
});

module.exports = router;
