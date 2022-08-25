const Drink = require('../models/Drink.model');

module.exports.drinkscontroller = {
   createDrink: async function(req, res) {
   try{
    await Drink.create({
   name: req.body.name, 
   price: req.body.price,
   inStock: req.body.inStock,
   koffeine: req.body.coffeine,
   volume:req.body.volume,
   description: req.body.description

    });
    res.json("Напиток добавлен");
   }catch(error){
    console.log("Ошибка при добавлении наптка");
   }
  
  },

  deleteDrinkById: async function(req,res){
    try{
          const drink = await Drink.findByIdAndRemove(req.params.id)
    res.json(`Напиток удален`);
    }catch(error){
        console.log('Ошибка при удалении напитка');
    }
  
},
 
changeDrinkById: async(req, res)=>{
    try{
          const drink = await Drink.findByIdAndUpdate(req.params.id,{
   name: req.body.name, 
   price: req.body.price,
   inStock: req.body.inStock,
   koffeine: req.body.coffeine,
   volume:req.body.volume,
   description: req.body.description
})
    res.json("Напиток изменен");
    }catch(error){
        console.log('Ошибка при изменении напитка');
    }
  
},
getDrinks: async function(req,res){
    try{
    const drink = await Drink.find({},["name","price"]);
    res.json(drink);
   
    }catch(error){
        console.log('Ошибка при получении всех напитков'); 
    }
   
},
getDrinkById: async function(req,res){
    try{
        const drink = await Drink.findById(req.params.id);
    res.json(drink);
    }catch(error){
        console.log(error); 
    }
   
},
getDrinkinStock:async function(req,res){
    try{
        const drink = await Drink.find({inStock: {$eq : true}}, ["name","price"]);
    res.json(drink);
   
    }catch(error){
        console.log('Ошибка при получении напитка'); 
    }
   
}

}