import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    // port: 3306, // default port == 3306
    // ssl: { rejectUnauthorized: true }, // Kommentera bort vid uppkoppling mot localhost
  },
});

export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.log("ERROR!", error);
    return { error };
  }
}
