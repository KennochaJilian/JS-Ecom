const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

const db = require('./models/index')
const routes = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app)
const errorHandler = (err, req, res, next) => {
  const { status = 500, message = 'Something went wrong!' } = err;
  
  res.status(status).json({ error: message });
};
app.use(errorHandler);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
