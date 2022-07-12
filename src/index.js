const express = require('express');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(cors());

port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
});

