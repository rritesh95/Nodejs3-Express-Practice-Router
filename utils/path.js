const path = require("path");

//module.exports = path.dirname(process.mainModule.filename);//deprecated
module.exports = path.dirname(require.main.filename); //path to the root directory can be
//defined like this which we can use commonly across files.