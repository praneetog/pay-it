const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://praneetog:77818@cluster0.gufva.mongodb.net/pay-it")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};