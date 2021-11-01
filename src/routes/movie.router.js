const express = require('express');
const movieRoutes = express.Router();
const{
    getAllMovies, 
    getMovieById, 
    getMovieByTitle, 
    getMovieByGenre, 
    getMovieYears, 
    postMovie,
    putMovie,
    deleteMovie
} = require('../controller/movie.controller')

// GET------
movieRoutes.get('/', getAllMovies)
// 2. Crear un endpoint **get** que devuelva una película según su **_id**
movieRoutes.get('/:id', getMovieById)
// 3. Crear un endpoint **get** que devuelva un valor por su titulo.
movieRoutes.get('/title/:title', getMovieByTitle)
// 4. Crear un endpoint **get** que devuelva los documentos según su género.
movieRoutes.get('/genre/:genre', getMovieByGenre)
// 5. Crear un endpoint **get** que devuelva las películas que se han estrenado a partir de 2010.
movieRoutes.get('/year/:year', getMovieYears)

// POST------
movieRoutes.post('/',postMovie);
// PUT------
movieRoutes.put('/:id', putMovie);
// DELETE------
movieRoutes.delete('/:id', deleteMovie)

module.exports = movieRoutes