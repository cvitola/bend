const express = require('express');
const {hacerSuma} = require('../controller/Controller');
const router = express.Router();
router.get('/', (req,res,next) =>{
    res.status(200).json({"message": "Estoy en el router. Hiciste Get"})
})

//recibe un array e informara la suma de los numeros.
router.post('/', hacerSuma)


module.exports = router;