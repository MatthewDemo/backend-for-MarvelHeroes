import mongoose from "mongoose";

export default async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (e) {
        console.error(e);
    }
};