const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  artist:{
      type:String,
      required:false
  },
  album:{
      type:String,
      required:false
  },
  genre:{
      type:String,
      required:false
  },


});

mongoose.model('Song', songSchema);
