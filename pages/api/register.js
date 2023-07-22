import { db } from "@/lib/db";

async function handler(req, res) {

    if(req.method !== 'POST'){
        return;
    }

    const { first_name, last_name, username, password } = req.body

    const query = `INSERT INTO users (first_name, last_name, username, password) VALUES ("${first_name}", "${last_name}", "${username}", "${password}")`;
    const values = [ first_name, last_name, username, password ];

    const data = await db({query: query, values: values});
    
    res.status(200).json({success: "1"});
}
  
export default handler;