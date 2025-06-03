const mongoose = require('mongoose');

const uri = 'mongodb+srv://<user>:<124-421>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
