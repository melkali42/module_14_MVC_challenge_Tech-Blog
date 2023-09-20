const { Post } = require("../models");

const postData = [
    {
        title: "Object-Relational Mapping",
        description: "It is a technique that lets a user query and manipulate data from a database using an object-oriented program",
        user_id: 1
    },
    {
        title: "Authentication vs. Authorization",
        description: "Authentication means to confirm your own identity, and Authorization is being allowed to access the sysetm", 
        user_id: 2
    },
    {
        title: "Why is MVC important?",
        description: "MVC is an architecture that allows different parts of a system to be coupled together or separated",
        user_id: 3
    }    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
