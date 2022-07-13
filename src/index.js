const express = require('express');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config();

// auth middlewares
require('./middlewares/google-auth');
require('./middlewares/verify-token');

// init conf express
const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(cors());

// basic routes
app.use('/', require('./routes/routes'));

// protected routes
app.use('/api', passport.authenticate('jwt', { session: false }), require('./routes/protected.routes'));

port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
});

