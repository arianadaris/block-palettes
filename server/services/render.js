const axios = require('axios');

exports.indexRoute = (req, res) =>
{
    // Make GET request to /api/palettes
    axios.get('http://localhost:3000/api/palettes')
    .then(function(response)
    {
        res.render('index', {palettesList: response.data.splice(0, 12)});
    });
}

exports.palettesRoute = (req, res) =>
{
    if(req.query.search)
    {
        axios.get('http://localhost:3000/api/palettes', { params: { search: req.query.search }})
        .then(function(response)
        {
            res.render('palettes', {palettesList: response.data});
        })
        .catch(err => 
        {
            res.send(err);
        })
    }
    else
    {
        // Make GET request to /api/palettes
        axios.get('http://localhost:3000/api/palettes')
        .then(function(response)
        {
            res.render('palettes', {palettesList: response.data.splice(0, 50)});
        });
    }
}

exports.generateRoute = (req, res) =>
{
    res.render('generate');
}

exports.savedRoute = (req, res) =>
{
    var search = true;
    axios.get('http://localhost:3000/api/palettes', { params: { search: search }})
    .then(function(response)
    {
        if(response.data.length > 0)
        {
            res.render('saved', {palettesList: response.data, noSaves: false});
        }
        else
        {
            axios.get('http://localhost:3000/api/palettes')
            .then(function(response)
            {
                res.render('saved', {palettesList: response.data.splice(0, 5), noSaves: true});
            })
            .catch(err => 
            {
                res.send(err);
            })
        }
    })
    .catch(err => 
    {
        res.send(err);
    })
}

exports.aboutRoute = (req, res) =>
{
    // Make GET request to /api/palettes
    axios.get('http://localhost:3000/api/palettes')
    .then(function(response)
    {
        const numResults = response.data.length;

        res.render('about', {number: numResults});
    });
}
