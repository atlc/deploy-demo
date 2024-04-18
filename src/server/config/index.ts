import dotenv from "dotenv";

dotenv.config();

const mysql = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: Number(process.env.PORT || 3306),
};

export default {
    mysql,
};
