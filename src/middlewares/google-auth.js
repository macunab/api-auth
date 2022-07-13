const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const User = require("../models/user");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

// Google strategy
passport.use('sign-in-google', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/auth/google/callback',
    passReqToCallback : true
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findById(profile.id);
            if(user) {
                done(null, false);
            } else {
                let newUser = new User();
                newUser._id = profile._id;
                newUser.name = profile.displayName;
                newUser.avatar = profile.photos[0].value;
                await newUser.save();
                done(null, profile);
            }
        } catch(err) {
            console.log('Se ha producido un error');
            return done(null, false);
        }
    }));