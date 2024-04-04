const mongoose = require('mongoose');

const medicamentoEsquema = new mongoose.Schema({
    codMedicamento : String,
    nombreMedicamento : String,
    cantidad : Number,
    idPosicion: String,
    posicionX: Number,
    posicionY: Number,
    ancho: Number,
    disponible: String
})

const medicamentoModel = mongoose.model('Medicamento',medicamentoEsquema,'medicamento');
module.exports = medicamentoModel;