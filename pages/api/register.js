import { db } from "@/lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { first_name, last_name, username, password } = req.body;

  // only insert the value if username doesn't already exist
  const query = `INSERT INTO users (first_name, last_name, username, password) SELECT * from ( SELECT "${first_name}" AS first_name , "${last_name}" AS last_name, "${username}" AS username, "${password}" AS password) AS temp WHERE NOT EXISTS (SELECT * FROM users WHERE username="${username}")`;

  const values = [first_name, last_name, username, password];
  const data = await db({ query: query, values: values });

  res.status(200).json({success: data.affectedRows});
}

export default handler;
