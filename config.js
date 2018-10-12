"use strict";
const security_const_1 = require('./security.const');
class Config {
}
Config.DbConnection = "mongodb://localhost:27017/userDatabase";
Config.basePath = "data";
Config.apiversion = "v1";
Config.ElasticSearchConnection = "http://localhost:9200";
Config.ApplyElasticSearch = false;
exports.Config = Config;
class SqlConfig {
}
SqlConfig.isSqlEnabled = true;
SqlConfig.database = "cicerotal2";
SqlConfig.username = "sa";
SqlConfig.password = "Aug@2018";
SqlConfig.sequlizeSetting = {
    host: "172.19.101.120",
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    port: 57005,
    dialectOptions: {
        encrypt: true
    }
};
exports.SqlConfig = SqlConfig;
class Security {
}
Security.isAutheticationEnabled = "disabled"; //allowed values: "disabled","enabledWithoutAuthorization","enabledWithAuthorization"
Security.authenticationType = security_const_1.SecurityConstant.TokenBased; //allowed values: "passwordBased","TokenBased"
Security.overrideLogin = false;
Security.defaultNetSession = "master";
Security.useFaceBookAuth = false;
exports.Security = Security;
class facebookAuth {
}
facebookAuth.clientID = '11'; // your App ID
facebookAuth.clientSecret = 'aa'; // your App Secret
facebookAuth.callbackURL = 'http://localhost:23548/auth/facebook/callback';
exports.facebookAuth = facebookAuth;
class passportSet {
    static setPassport(pasportInstance) {
        passportSet.passport = pasportInstance;
    }
    static getPassport() {
        return passportSet.passport;
    }
}
exports.passportSet = passportSet;

//# sourceMappingURL=config.js.map
