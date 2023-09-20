const User = require("../models");

const userData = [
    {
        "username": "HarryPotter",
        "email": "harryp@gmail.com",
        "password": "password1234"
    },
    {
        "username": "RonWeas",
        "email": "ginger6@gmail.com",
        "password": "Password4321"
    },
    {
        "username": "Granger_Hermonine",
        "email": "toosmart4you@gmail.com",
        "password": "password@12345"
    },
    {
        "username": "NLongbottom",
        "email": "whatsthepasswordagain@gmail.com",
        "password": "password"
    }
];

const userSeeds = () => userSeeds.bulkCreate(userData);

module.exports = userSeeds;