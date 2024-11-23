import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userroutes from "./Routes/Userroutes.js"

dotenv.config();

const port = 4001;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected'))
.catch((err) => {
  console.log("Connection error:", err);
});

const app = express();
app.use(express.json());
app.use(cors());


app.use('/emp',userroutes);
app.get('/', (req, res) => {
  res.send('Hello, welcome!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
