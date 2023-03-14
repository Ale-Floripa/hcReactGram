const mongoose = require("mongoose");
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const conn = async () => {
    try {
        
        mongoose.set('strictQuery', true);
        const dbConn = await mongoose.connect(
            `mongodb://${dbHost}/${dbName}`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        console.log("Conectou ao banco de dados!");

        return dbConn;
        
    } catch (error) {
        console.log(error);
    }
};

conn();

module.exports = conn;