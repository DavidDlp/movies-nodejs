const express = require('express');
const cinemaRoutes = express.Router();
const {
    getCinema,
    getCinemaById,
    postCinema,
    putCinema,
    deleteCinema
} = require('../controller/cinema.controller')

// GET------
// Para comprobar la ruta--> cinemaRoutes.get('/',(req,res) =>{ res.send('Que cinema buscas?')} )
cinemaRoutes.get('/', getCinema);
cinemaRoutes.get('/:id', getCinemaById);
// POST------
cinemaRoutes.post('/', postCinema);
// PUT------
cinemaRoutes.put('/:id', putCinema);
// DELETE------
cinemaRoutes.delete('/:id', deleteCinema);


module.exports = cinemaRoutes