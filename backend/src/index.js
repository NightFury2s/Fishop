const cookieParser = require("cookie-parser");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes');

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);