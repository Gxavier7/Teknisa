const sequelize = require("sequelize");

const database = new sequelize({
	dialect: "sqlite3",
	storage: "./database/storage/database.sqlite",
});

module.exports = database;
