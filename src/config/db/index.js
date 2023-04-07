const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1/nam_dev',{
            useNewUrlParser : true,
        });
        console.log("YES");
    } catch(error){
        console.log("NO");
    }
}

module.exports = { connect };