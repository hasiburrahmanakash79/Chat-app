import express from 'express';
import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

import authRouters from './routes/auth.routes.js';
import messageRouters from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRouters);
app.use('/api/message', messageRouters);

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
})

console.log("MongoDB URI:", process.env.MONGO_DB_URI);
console.log("DB Name:", process.env.DB_NAME);

app.listen(PORT, () => {
    connectToMongoDB();  // Ensure MongoDB connection function works with URI
    console.log(`Server is running on port ${PORT}`);
});
