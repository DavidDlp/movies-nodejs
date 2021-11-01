const mongoose = require('mongoose');
const Movie = require('../models/movies.model')

require('dotenv').config()

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Accion',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Accion',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animacion',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animacion',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficcion',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romantica',
  },
];

//   Primero, voy a ver si en la base de datos hay datos.
//   Segundo, si hay datos voy a borrar todos los datos de la coleccion.
//   Tercero,voy a insertar en la coleccion los datos de movies.

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Character.find() obtendremos un array con todos los personajes de la db
    const allMovies = await Movie.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allMovies.length) {
      await Movie.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array MovieDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Movie.insertMany(movies);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());