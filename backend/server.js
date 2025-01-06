import express from 'express';
import dotenv from 'dotenv';
import authRouters from './routes/auth.routes.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
})

app.use('/api/auth', authRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})