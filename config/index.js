var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        // this string is come from your mLab mongoDB database, replace the whole string with yours
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds015849.mlab.com:15849/nodetodo';
    }
    
}