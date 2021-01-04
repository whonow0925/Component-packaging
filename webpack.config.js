'use strict';

const path =require('./path');

module.exports={
  entry:'./src/webpack/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  },
  //开发环境还是各种其他环境
  mode:'production'
};