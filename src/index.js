const parser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const animalRoutes = require('./routes/animal')
const mongoose = require('mongoose')
require('dotenv').config()

//Formateando entrada
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
//Formateando salida
app.use('/api', animalRoutes)
app.use(express.json())

//Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conexión exitosa')).catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.send('Hola mundo soy Cecilia Avila')
})

app.listen(port, () => {
    console.log('HOLA La aplicación se está ejecutando por el puerto ' + `${port}`)
})

