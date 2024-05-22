const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://quangkhaitk7:1life1532001@kolfinder.cv1zaky.mongodb.net/KOLFinder?retryWrites=true&w=majority&appName=KOLFinder');
        console.log('Connect successfully!');
    } catch (error) {
        console.error('Connect failure!', error);
    }
}

module.exports = { connect };

