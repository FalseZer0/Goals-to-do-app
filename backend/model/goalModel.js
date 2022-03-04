const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: 'string',
        required: [true,'Please add a text field']
    }
}, {
    timestamps: true,
})
module.exports =mongoose.model('Goal',goalSchema);