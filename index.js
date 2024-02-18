import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

try {
    await mongoose.connect('mongodb://localhost:27017/test');
} catch (error) {
    handleError(error);
}

app.listen(8800, () => {
    console.log("Connected to Backend");
});