const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/db_spaces', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log(`Database is connect to ${db.connection.host}`))
    .catch(err => console.log(err))