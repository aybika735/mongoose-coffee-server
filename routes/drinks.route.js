const {Router} = require('express');
const{drinkscontroller} =require('../controllers/drinks.controller')
const router = Router();


router.post('/drinks', drinkscontroller.createDrink);
router.delete('/drinks/:id', drinkscontroller.deleteDrinkById);
router.patch('/drinks/:id', drinkscontroller.changeDrinkById);
router.get('/drinks', drinkscontroller.getDrinks);
router.get('/drinks/:id',drinkscontroller.getDrinkById);
router.get('/drinksstock', drinkscontroller.getDrinkinStock);

module.exports=router;