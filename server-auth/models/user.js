const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining the model
const userSchema = new Schema({
  email: {type:String,unique:true,lowercase:true},
  password: String,
});

//Create model class
const ModelClass = mongoose.model('user',userSchema);


module.exports = ModelClass;
