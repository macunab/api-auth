const JWTstrategy = require('passport-jwt').Strategy;
const passport = require('passport');
const extractJWT = require('passport-jwt').ExtractJwt;

passport.use(new JWTstrategy({
    secretOrKey: 'secret pass para firmar nuestro JWT',
    jwtFromRequest: extractJWT.fromHeader('x-token')
}, (token, done) => {
    try {
        return done(null, token);
    } catch(err) {
        done(error);
    }
}));