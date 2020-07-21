
const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../../sample.json');
// console.log(movies);

router.get('/', (req, res) =>{
    res.json(movies);
});

router.post('/', (req, res) =>{
    // console.log(req.body);
    // res.send('received');
    const { title, director, year, rating } = req.body;
    // validamos que recibimos los datos
    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
        // res.send('saved');
        // console.log(newMovie);
    
    }else{
        res.status(500).json({"error": "There was an error."});
    }    
});

router.delete('/:id', (req, res) =>{
    // console.log(req.params); //muestro en consola el id que paso atraves de la URL

    const { id } = req.params;
    _.each(movies, (movie, i) =>{
        // si el id existe, eliminamos todo el objeto
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
   
    res.json(movies);    
});

router.put('/:id', (req, res)=>{
    const { id } = req.params; // obtendo el id pasado atraves de la URL
    const { title, director, year, rating } = req.body; // parametros a actualizar

    // valido que existan los parametros
    if(title && director && year && rating){
        // si existe el id, actualizamos el objeto
        _.each(movies, (movie, i) =>{
            if(movie.id == id){
                // actualizamos los datos
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        res.json(movies);
    }else{
        res.status(500).json({"error": "There was an error."});
    }
});

module.exports = router;