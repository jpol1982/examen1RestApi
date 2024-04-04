const express = require('express');
const rutas = express.Router();
const medicamentoModel = require('../models/medicamento');


//endpoint 1 : GET /listado -> lista de todos los medicamentos y su posicion
rutas.get('/listado', async (req, res) =>{
    try {
        const medicamento = await medicamentoModel.find();
        console.log(medicamento);
        res.json(medicamento);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

//endpoint 2 : GET /buscar/:codMedicamento -> busca el medicamento mediante su codigo en el listado
rutas.get('/buscar/:codMedicamento', async (req, res) =>{
    try {
        var codMedicamento= req.params.codMedicamento;
        const medicamento = await medicamentoModel.findOne({codMedicamento:codMedicamento});
        console.log(medicamento);
        res.json(medicamento);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

//endpoint 3 : GET /ordenarPorNombreMedicamento -> ordena ascendentemente los medicamentos por nombre dentro del listado 
rutas.get('/ordenarPorNombreMedicamento', async (req, res) =>{
    try {
        var codMedicamento= req.params.codMedicamento;
        const medicamento = await medicamentoModel.find().sort({nombreMedicamento:1});
        console.log(medicamento);
        res.json(medicamento);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});


//endpoint 4 : POST /agregar -> agrega dentro del listado de medicamentos
rutas.post('/agregar', async (req, res) =>{
    // console.log(req.body);
    const nuevaMedicamento = new medicamentoModel({
        codMedicamento: req.body.codMedicamento,
        nombreMedicamento: req.body.nombreMedicamento,
        cantidad: req.body.cantidad,
        idPosicion: req.body.idPosicion,
        posicionX: req.body.posicionX,
        posicionY: req.body.posicionY,
        ancho: req.body.ancho,
        disponible: req.body.disponible
    });
    try {
        const guardarMedicamento = await nuevaMedicamento.save();
        res.status(201).json(guardarMedicamento);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

//endpoint 5 : PUT /editar/:codMedicamento -> edita las variables de los medicamentos mediante el codigo del medicamento
rutas.put('/editar/:codMedicamento', async (req, res) =>{
    try {
        var codMedicamento= req.params.codMedicamento;
        const actualizarMedicamento = await medicamentoModel.findOneAndUpdate({codMedicamento:codMedicamento}, req.body, { new: true});
        res.status(201).json(actualizarMedicamento);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

//endpoint 6 : PUT /incrementarCantidad/:codMedicamento/:cantidad -> modifica la cantidad que se tiene de un medicamento mediante su codigo de medicamento
rutas.put('/incrementarCantidad/:codMedicamento/:cantidad', async (req, res) =>{
    try {
        var codMedicamento= req.params.codMedicamento;
        var cantidad= req.params.cantidad;
        const actualizarMedicamento = await medicamentoModel.updateOne({codMedicamento:codMedicamento},  { $inc: { cantidad: cantidad } } );
        res.status(201).json({mensaje: 'la cantidad se actualizo correctamente'});
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

//endpoint 7 : DELETE /:codMedicamento -> elimina del listado el medicamento mediante su codigo de medicamento
rutas.delete('/eliminar/:codMedicamento', async (req, res) =>{
    try {
        var codMedicamento= req.params.codMedicamento;
        const eliminarMedicamento = await medicamentoModel.deleteOne({codMedicamento:codMedicamento});
        res.json({mensaje: 'medicamento eliminado correctamente'});
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});
module.exports = rutas; 
