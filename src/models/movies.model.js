const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {type:String, required:true, unique:true, trim:true},
        director: {type:String, required:true, trim:true},
        year: {type:Number, required:true, default:1985},
        genre: {type:String, trim:true, 
            enum:[
                'Accion', 
                'Animacion', 
                'Comedia romantica', 
                'Ciencia ficcion',
                'Drama',
                'Suspense',
                'Comedia'
            ],
            default: 'Desconocido'
        },
    },
    {
        timestamps:true
    }
);

const Movie = mongoose.model('movies', movieSchema)

module.exports = Movie