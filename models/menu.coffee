mongoose = require 'mongoose'
mongoose.connect 'mongodb://localhost/archie'

menuSchema = mongoose.Schema
  name:
    type: String
    require: true
    unique: true

menuSchema.methods.lal = ()->
  greeting =  if this.name then "Meow name is " + this.name else "I don't have a name"
  console.log greeting

menuSchema.methods.addItem = ()->
  console.log 'addItem'

Menu = mongoose.model 'menu', menuSchema
module.exports = Menu