

const app = require('./app.js'); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI
// 'mongodb://localhost:27017/mydatabase';

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`MongoDB connected to ${MONGO_URI}`);
});

 
