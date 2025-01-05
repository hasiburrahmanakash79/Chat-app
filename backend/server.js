// const express = require('express');
// const dotenv = require('dotenv');
import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})