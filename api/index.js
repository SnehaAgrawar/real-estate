import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'; // Ensure the file path and extension are correct

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB:', err);
});

const app = express();

app.listen(3000, () => {
    console.log("App is listening on server 3000");
});

app.use('/api/user', userRouter);