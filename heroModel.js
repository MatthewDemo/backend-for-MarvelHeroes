import mongoose from "mongoose";

const Hero = new mongoose.Schema(
    {
        nickname: String,
        real_name: String,
        origin_description: String,
        superpowers: String,
        catch_phrase: String,
        images: String,
    },
    {timestamps: true},
);

export default mongoose.model("hero", Hero);
