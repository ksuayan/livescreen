const path = require('path');

const serverConfig = {
  entry: './src/index.js',  
  target: 'node',
  output: {
    filename: 'lib.node.js',    
    path: path.resolve(__dirname, 'dist')

  }
};

const clientConfig = {
  entry: './src/index.js',  
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = [ serverConfig, clientConfig ];