const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

const db = require('./models/index')
const routes = require('./routes/index')
const { expressjwt: jwt } = require("express-jwt");
const userMiddleware = require('./middlewares/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",
    jwt({ secret: 'private_key', algorithms: ["HS256"] })
        .unless({ path: [/^\/api\/users\/signIn/, /^\/api\/users\/signup/] })
);
app.use("/api", userMiddleware.load_user)


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
