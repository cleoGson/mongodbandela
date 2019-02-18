const express=require('express');
const router=express.Router();
const Recipe = require('../models/recipe');
const recipeCtrl=require('../controllers/recipesController');

router.get('/',recipeCtrl.getAllRecipes);
router.post('/',recipeCtrl.createRecipe );
router.get('/:id',recipeCtrl.getOneRecipe);
router.put('/:id',recipeCtrl.modifyRecipe);
router.delete('/:id', recipeCtrl.deleteRecipe);

module.exports=router;