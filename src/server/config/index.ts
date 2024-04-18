import dotenv from "dotenv";

dotenv.config();

const mysql = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_USER,
    database: process.env.DB_NAME,
};

export default {
    mysql,
};
