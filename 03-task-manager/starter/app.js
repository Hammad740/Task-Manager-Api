require('./db/connect.js');
const connectDb = require('./db/connect.js');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/notfound.js');
// ? middlewares
app.use(express.json());

app.use(express.static('./public'));
////routes
app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

app.use('/api/v1/tasks', tasks);
app.use(notFound);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
