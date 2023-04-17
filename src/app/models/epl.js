const {default: mongoose} = require("mongoose");
const slug = require('mongoose-slug-generator');
const {TRUE} = require("node-sass");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const epl = new Schema({
    name :{ type : String},
    phara1:{type : String},
    phara2:{type : String},
    phara3:{type : String},
    summary:{type : String},
    img1 :{type: String},
    img2 :{type: String},
    img3 :{type: String},
    slug : {type : String, slug : 'name'},
},{
    timestamps: true,
})

module.exports = mongoose.model('epl',epl);