import { Sequelize } from "sequelize";

const db = new Sequelize("db_product", "root", "", {
  hodt: "localhost",
  dialect: "mysql",
});

export default db;
