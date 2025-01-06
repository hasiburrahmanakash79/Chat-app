import express from 'express';
import dotenv from 'dotenv';
import authRouters from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use('/api/auth', authRouters);

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
})


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`);
})