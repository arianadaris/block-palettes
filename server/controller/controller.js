var PaletteDB = require('../models/paletteSchema');

// Create and save new palette
exports.create = (req, res) =>
{
    // Validate request
    if(!req.body)
    {
        return res.status(400).send({message: "Content cannot be empty."});
    }

    // Create new palette
    const palette = new PaletteDB(
        {
            paletteID: req.body.paletteID,
            blocks: req.body.blocks
        });

    // Save palette to database
    palette
        .save(palette)
        .then(data =>
        {
            res.send(palette);
        })
        .catch(err =>
        {
            res.status(500).send({ message: err.message || "Some error occured while creating a create operation."});
        });
}

// Retrieve and return all palettes
exports.find = (req, res) =>
{
    if(req.query.search)
    {
        var search = toTitleCase(req.query.search);

        PaletteDB.find({$or: [
            {blocks: {$elemMatch: {color: search}}},
            {blocks: {$elemMatch: {name: search}}},
            {blocks: {$elemMatch: {textures: search}}},
            {saved: {$eq: search}}
        ]})
        .sort({_id: -1})
        .then(palettes =>
        {
            if(!palettes)
            {
                res.status(404).send({message: "Palette not found."});
            }
            else
            {
                res.send(palettes);
            }
        })
        .catch (err => 
        {
            res.status(500).send({message: "Error finding palette with search: " + search});
        });
    }
    else if (req.query.id)
    {
        const id = req.query.id

        PaletteDB.findById(id)
        .then(palette =>
        {
            if(!palette)
            {
                res.status(400).send({message: "Palette not found."});
            }
            else
            {
                res.send(palette);
            }
        })
        .catch(err =>
        {
            res.status(500).send({ message: err.message || "Error occured while retrieving palette."});
        });
    }
    else
    {
        PaletteDB.find()
        .sort({_id: -1})
        .then(palette =>
        {
            res.send(palette);
        })
        .catch(err =>
        {
            res.status(500).send({ message: err.message || "Error occured while retrieving palette."});
        });
    }
}

// Update a palette by palette id
exports.update = (req, res) =>
{
    if(!req.body)
    {
        return res.status(400).send({message: "Data cannot be empty."});
    }

    const id = req.params.id;
    PaletteDB.findByIdAndUpdate(id, req.body, { userFindAndModify: false, new: true} )
    .then(data =>
    {
        if(!data)
        {
            res.status(404).send({ message: `Cannot update palette: Palette may not have been found. `});
        }
        else
        {
            console.log(data.saved);
            res.send(data);
        }
    })
    .catch(err =>
    {
        res.status(500).send({message: "Error updating palette information."});
    });
}

// Delete palette with specified palette id in request
exports.delete = (req, res) =>
{
    const id = req.params.id;
    
    PaletteDB.findByIdAndDelete(id)
        .then(data => 
        {
            if(!data)
            {
                res.status(404).send({message: `Cannot delete with id ${id}.`});
            }
            else
            {
                res.send({message: "Palette was deleted successfully."});
            }
        })
        .catch (err =>
        {
            res.status(500).send({message: "Could not delete Pallete with id" + id});
        });
}

// Helper Function
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
