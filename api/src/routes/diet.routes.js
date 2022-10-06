const { Router } = require('express');
const { diet } = require('../controllers/RecetasApi');
const { Diet } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
 await diet()
  try {
    const Alldiet = await Diet.findAll();
    console.log(Alldiet, 'diet')
    res.status(200).send(Alldiet);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;

