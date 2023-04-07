const { default: mongoose } = require("mongoose");
const slug = require('mongoose-slug-generator');
const { TRUE } = require("node-sass");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name :{type : String, minLength : 1},
    videoId :{type : String, minLength : 1},
    image : {type : String},
    phara : {type: String},
    summary : {type : String},
    slug : {type : String, slug:'name',},
    createdAt: {type: Date, default: Date.now},
    
},{
    timestamps : true,
});


module.exports = mongoose.model('Course',Course);