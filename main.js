const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

const userController = require('./user_ctrl');
const maillingController = require('./mailing_address_ctrl');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const errorHandler = (err, req, res, next) => {
  const { status = 500, message = 'Something went wrong!' } = err;
  
  res.status(status).json({ error: message });
};
app.use(errorHandler);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});
app.get('/api/users', userController.userCtrl.get_all);
app.get('/api/users/:user_id', userController.userCtrl.get);
app.post('/api/users', userController.userCtrl.create);
app.put('/api/users/:user_id', userController.userCtrl.update);
app.delete('/api/users/:user_id', userController.userCtrl.delete);

app.get('/api/users/:user_id/mailAddress', maillingController.mailingCtrl.get_all);
app.get('/api/users/:user_id/mailAddress/:mailing_address_id', maillingController.mailingCtrl.get);
app.post('/api/users/:user_id/mailAddress',maillingController.mailingCtrl.create)
app.put('/api/users/:user_id/mailAddress/:mailing_address_id',maillingController.mailingCtrl.update)
app.delete('/api/users/:user_id/mailAddress/:mailing_address_id',maillingController.mailingCtrl.delete)

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
