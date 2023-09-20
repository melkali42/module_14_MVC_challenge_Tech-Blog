const userSeeds = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../connection/connection");

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await userSeeds();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
