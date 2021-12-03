//import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    Name: String,
    book: String,
    date: String
});

module.exports = mongoose.model("firstmongoose", studentSchema, "Rhyt")