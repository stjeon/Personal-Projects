var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema(//create a mongo schema model
    {
        firstName: {type: String, required:true},
        lastName: {type: String, required: true},
        password: {type: String, required: true},
        email:{type: String, required: true, unique: true},
        messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]//ref=reference to the message model
    }
);

schema.plugin(mongooseUniqueValidator);

module.exports= mongoose.model('User', schema); //creates collection named users