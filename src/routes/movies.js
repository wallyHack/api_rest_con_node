
const { Router } = require('express');
const router = Router();

const movies = require('../../sample.json');
// console.log(movies);

router.get('/', (req, res) =>{
    res.json(movies);
});

module.exports = router;