const express = require('express')
const router = express.Router()
const animalSchema = require('../models/animal')

//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema({
        nombre:req.body.nombre,
        edad:req.body.edad,
        tipo:req.body.tipo,
        fecha:new Date(req.body.fecha)
    })
    animal.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({ message: error })
    })
})
module.exports = router;