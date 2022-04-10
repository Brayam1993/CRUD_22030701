const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/node_mongodb_crud_users_db';

// Start code of Crud Mongodb DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('open', (_) => {
  console.log('Mongo Database is connected to', uri);
});
