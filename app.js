const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();
const port              = 2525;
const swig              = require('swig');
const logger            = require("morgan")
const methodOverride    = require("method-override")
const cors              = require("cors")

const swigEngine    = new swig.Swig();
app.engine('html', swigEngine.renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(methodOverride())
app.use(cors())

app.use("/", require("./controllers/Home"));

app.listen(port);