const mongoose = require('mongoose');
require('dotenv').config()

const urlDb = process.env.MONGODBURL
// console.log(urlDB)

const connectWithDb = async() => {
    try{
        const db = await mongoose.connect(urlDb, {useNewUrlParser: true, useUnifiedTopology: true})
        const {name,host} = db.connection
        console.log(`Connecter with db name: ${name} in host: ${host}`)
    }catch(error){
        console.error('Error to connect with db');
    }
};

module.exports ={
    connectWithDb
}