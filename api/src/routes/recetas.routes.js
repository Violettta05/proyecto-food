const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const axios = require('axios');
//const { API_KEY } = process.env;
const router = Router();
const {getApiInfo, getDbinfo}= require('../controllers/ControllerRecipe');
const { diet } = require('../controllers/RecetasApi');
// const {diet} =require('./src/controllers/RecetasApi');
// const {getApiInfo} =require('./src/controllers/ControllerRecipe');
//  diet();
//  getApiInfo({});

//  getApiInfo()

// / listar todas las dietas y buscar por name /
router.get('/all', async (req, res) => {
  await getApiInfo() 
  const name = req.query.name;
  // let recipeTotal = await model.getDbinfo(); 
  const recipeTotal= await Recipe.findAll()
  
  console.log('getApiInfo');
  if (name) {
    let recipeName = await recipeTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toString().toLowerCase())
    );
    recipeName.length
      ? res.status(200).send(recipeName)
      : res
          .status(404)
          .send(
            'No existe Receta que contenga ese Nombre: ' + name.toLowerCase()
          );
  } else {
    console.log('entro al else')
    res.status(200).send(recipeTotal);
  }
});

// / --------Busco mis Recetas por Id----------- /

 router.get('/:id', async (req, res) => {
  await  getApiInfo()
  const { id } = req.params;
  await getDbinfo();
   const recipeTotal = await Recipe.findByPk(id)
   return res.json(recipeTotal)


});

// / eliminar un recipe /

/*-------Agrega un Receta y tipos de Dietas------*/
router.post('/', async (req, res) => {
  const { name, summary, healthScore, stepbyStep, image, createIndb, diet } =
    req.body;
    console.log('name', name)
    console.log('summary', summary)

    console.log('healthScore', healthScore)
    console.log('stepbyStep', stepbyStep)
    console.log('image', image)
    console.log('createIndb', createIndb)
    console.log('diet', diet)
    

  if (!name || !summary) {
    res.status(404).send('los Datos name y summary son requeridos');
  } else {
    try {
      let recipeCreated = await Recipe.create({
        ID,
        name,
        summary,
        healthScore,
        stepbyStep,
        image,
        dieta:diet.join(', '),
        createIndb,
      });
      // let dietDb = await Diet.findAll({
      //   where: {
      //     name: diet,
      //   },
      // });
      // recipeCreated.addDiet(dietDb); // agrego la dieta al modelo Recipe
      res.send('Receta Creada con exito');
    } catch (error) {
      res.status(404).send(error + 'Error al crear la Receta');
    }
  }
});



module.exports = router;
