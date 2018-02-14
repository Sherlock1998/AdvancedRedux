const passport = require('passport');
const User = require('../models/user');
const config  = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.js,
};

//create jwt strategies
const jwtLogin = new jwtStrategy(jwtOptions,function(payload,done) {


  User.findById(payload.sub, function(err,user) {
    if (err) {
      return done(err,false);
    }
    if(user) {
      return done(null,user);
    }
    else {
      return done(null,false);
    }
  })
});

//tell passport to use jwt strategies
passport.use(jwtLogin)
