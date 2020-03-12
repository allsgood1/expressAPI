const express = require('express');
const chirpStore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', function(req, res) {
    //retrieve 1 if theres an id, none if no id is input
    //res.json(data); //this sends the resource
    let id = req.params.id;
    if (id) {
        res.send(chirpStore.GetChirp(id));
    }
    else {
        res.send(chirpStore.GetChirps());
    }
});

router.post('/', function(req, res) {
    //saves the resource
    //res.json(id); //or you could put sendStatus(200)
    let chirp = req.body;
    chirpStore.CreateChirp(chirp);
    res.send('Chirp added!');
});

router.put('/:id', function(req, res) {
    //update resource
    //res.sendStatus(200);
    let id = req.params.id;
    let editedChirps = req.body;
    chirpStore.UpdateChirp(id, editedChirp);
    res.send('Chirp edited successfully')
});

router.delete('/:id', function(req, res) {
    //delete resource
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.send('Chirp Deleted!');
});

module.exports = router;