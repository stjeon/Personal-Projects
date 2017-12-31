var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema(//create a mongo schema model
    {
        content: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'} //scehma types object id stores the id relating to the data model in mongo
    }
);

module.exports= mongoose.model('Message', schema);