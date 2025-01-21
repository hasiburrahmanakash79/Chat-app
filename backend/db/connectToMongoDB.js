import mongoose from "mongoose";

const connectToMongoDB = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xvcivem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectToMongoDB;