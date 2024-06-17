
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err));

const {Schema , model} = mongoose;


const userSchema = new Schema({
  name: String,
  surname: String,
});

const User = model('User', userSchema);

