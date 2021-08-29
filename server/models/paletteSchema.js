const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        blockID: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ""
        },
        textures: {
            type: [String]
        }
    }
);

const paletteSchema = new mongoose.Schema(
    {
        paletteID:
        {
            type: Number,
            required: true
        },
        saved:
        {
            type: String, 
            default: false
        },
        blocks: [blockSchema]
    }
);

const PaletteDB = mongoose.model('Palette', paletteSchema);
module.exports = PaletteDB;
