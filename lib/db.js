import mysql from "mysql2/promise"

export async function db({query, values = []}) {

    const dbconnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    });

    try{

        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        
        return results;

    } catch (error) {
        throw Error(error.message);
    }

}
  