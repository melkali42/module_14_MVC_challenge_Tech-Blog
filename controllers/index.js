const router = require("express").Router();
const sequelize = require("../connection/connection");
// const apiRoutes = require(");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);

module.exports = router;