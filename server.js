"use strict";
var schedule = require('node-schedule');
const http = require('http');
const https = require('https');
var Stream = require('stream').Transform;
var express = require("express");
const exports_1 = require('nodedata/core/exports');
const config = require('./config');
const securityConfig = require('./security-config');
const fs = require("fs");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
config.passportSet.setPassport(passport);
var Main = require('nodedata/core');
var seqData = require("nodedata/sequelizeimp");
Main(config, securityConfig, __dirname, null, seqData.sequelizeService);
//data.connect();
//data.generateSchema();
seqData.sequelizeService.connect();
seqData.generateSchema();
require('reflect-metadata/Reflect');
var bodyParser = require("body-parser");
process.env.APP_ROOT = "hello";
var app = express();
Main.register(app);
var path = require('path');
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, dd, RequestVerificationToken,UserExecutionContext");
    res.header("Access-Control-Allow-Credentials", "true");
    res.removeHeader("x-powered-by");
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
app.get("/extract", function (req, res) {
    fs.readFile("./imageurls.json", function (err, data) {
        let dataStr = data.toString();
        let allImageUrls = JSON.parse(dataStr);
        allImageUrls = allImageUrls.imageurls;
        allImageUrls.forEach((url, index) => {
            https.request(url, function (response) {
                var data = new Stream();
                response.on('data', function (chunk) {
                    data.push(chunk);
                });
                response.on('end', function () {
                    var str = url;
                    var final = str.substr(str.lastIndexOf('/') + 1);
                    let filePath = './public/images/' + final;
                    fs.writeFileSync(filePath, data.read());
                });
            }).end();
        });
    });
});
// app.get('/auth/facebook', passport.authenticate('facebook', { 
//     scope : ['public_profile', 'email']
//   }));
passport.serializeUser((user, cb) => {
    cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
    this.userDetailService.loadUserById(id).
        then((user) => {
        cb(null, user.getUserObject());
    }, (err) => {
        return cb(err);
    });
});
app.use(passport.initialize());
app.use(passport.session());
app.use("/", exports_1.router);
app.use("/data", express.static(path.join(__dirname, 'public')));
/*Facebook Login Page */
app.get('/login/facebook', function (req, res) {
    res.render('fbLogin');
});
app.get('/data/response/payment', function (req, res) {
    console.log('payment page requested');
    res.render('payment');
});
app.post('/data/response/failure', function (req, res) {
    console.log('failure url payment page');
    res.render('payment');
});
app.post('/data/response/success', function (req, res) {
    console.log('succes url payment page');
    res.render('payment');
});
var server = http.createServer(app);
server.listen(9900);

//# sourceMappingURL=server.js.map
