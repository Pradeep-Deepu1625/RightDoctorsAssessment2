const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
    Name :{
        type:String
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String
    },
    Mobile:{
        type:String
    }
},{
    timestamps:true
})
module.exports = mongoose.model('persons',personSchema)