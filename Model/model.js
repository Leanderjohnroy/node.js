//Inbuilt modules
//User built modules
//3rd party modules

const mongoose = require('mongoose')
const {Schema, model} = mongoose

const sampleSchema = new Schema({
    name : {type: String},
    age : {type:Number}
})

module.exports = model('node', sampleSchema)