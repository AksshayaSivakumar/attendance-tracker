const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Attendance = sequelize.define("attendance", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateId: {
    type: Sequelize.INTEGER, 
    allowNull: false,
  },
});

module.exports = Attendance;