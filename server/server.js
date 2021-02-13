require('./config/config')

const express = require('express')
const app = express()
// npm i body-parser  --save  : usaremo body parse para serialzar los parametros que enviarmos en el post 
const bodyParser = require('body-parser')
const { json } = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//las dos app nos permite obtenet los datos en req cuando se ejecutne la funciones 


//get para obtener datos
app.get('/usuario', function (req, res) {
    // para pbtener la infromacion en json se pone json en vez de send
//   res.send('Hello World')
        res.json('Get Usuario')
})

//post para crear datos
app.post('/usuario', function (req, res) {
    let body=req.body;
    if(body.nombre===undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesario'
        })
    }else {
        res.json({persona:body})
    }
        

})

 //put para actualizar registep
 // con :id podemos recibir como parametro el id del usuario
 app.put('/usuario/:id', function (req, res) {
    let id=req.params.id;
    res.json({
        id,

    })
})

//delete para borrar , ya no se aconseja borrar, si no cambiar el estado de algo para desahabilitarlo
app.delete('/usuario', function (req, res) {
    
    res.json('Delete Usuario')
})

app.listen(process.env.PORT,()=>{console.log('Escuchando puerto 3000')})