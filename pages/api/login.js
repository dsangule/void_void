import { db } from "@/lib/db";

async function handler(req, res) {

    if(req.method !== 'POST'){
        return;
    }

    const { username, password } = req.body

    const query = `SELECT * FROM users WHERE username = "${username}" and password = "${password}"`;
    const values = [ username, password ];

    const data = await db({query: query, values: values});
    const success = data.length ? '1' : '0';
    
    res.status(200).json({success: success});
}
  
export default handler;