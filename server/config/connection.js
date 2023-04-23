const mongoose = require('mongoose');


try{

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
} catch (err) {
  console.log(err);
}

module.exports = mongoose.connection;
