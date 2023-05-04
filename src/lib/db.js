import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost", // env.process.DB_HOST
    database: "toys_project", // env.process.DB_DATABASE
    user: "root", // env.process.DB_USER
    password: "", // env.process.DB_PASSWORD
    port: 3306 // default port == 3306
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
