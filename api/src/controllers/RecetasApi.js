const axios = require('axios');
const { Diet } = require('../db');
const { API_KEY } = process.env;
let y = 0;
module.exports = {
  diet: async () => {
    const lengthdata = await Diet.findAll();
    if (lengthdata.length === 0 ) {
      const dietApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
      );
     
      const diet = await dietApi.data.results.map((el) => {
        if(el.diets){
          const app= el.diets
          return app
        }
      });
      diet.flat()
      console.log(diet)
      const results = diet.filter(Boolean)
      let arrayDiet = [... new Set(Array.prototype.concat.apply([], results)
      )]
      var arrayDataDiet = arrayDiet.sort()
      const arrayObjDiet = arrayDataDiet.map((el) => {
        return { id: y++, name: el}
      
      })
      await Diet.bulkCreate(arrayObjDiet)
     
     
      // const typeDiet = [...new Set(data)];
      // const array = []
      //   typeDiet.forEach((el)=>{
      //   return array.push( el.diets.join(', '))
      //   })
      //   array.flat()
      //   const array1 = array.filter(Boolean)
      //   let diets = [...new Set(array1)];
      //   console.log(diets)
      // diets.forEach((el) => {
      //   Diet.create(
      //     { name: el, id: y++ },

      //   );
      // });
    
      // console.log('me ha ejecutado' + 1); 
      // const dietas = await Diet.findAll();
      // console.log(dietas)
    } else {
      console.log('los datos de dietas ya estan cargados');
    }
  },
  recipes: async () => {},
 };
