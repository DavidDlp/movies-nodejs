const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema(
    {
        name: {type: String, required:true, trim:true},
        location: {type: String, required:true, trim: true},
        movies: [{type:mongoose.Types.ObjectId, ref:'movies'}]
    },
    {
        timestamps:true
    }
);

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema
