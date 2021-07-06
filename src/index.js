require('dotenv').config();

console.log(process.env.HELLO)

const app = require('./app')
require('./database');

app.listen(app.get('port'));
console.log('Server on port ', app.get('port'));