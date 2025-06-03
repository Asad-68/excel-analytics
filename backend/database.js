const mongoose = require('mongoose');

const uri = 'mongodb+srv://<asad12e12akhtar>:<gxiVkTJe0fmLcxNQ>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
