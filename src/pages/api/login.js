import executeQuery from "../../lib/db"   // "../../lib/db";   // "@/lib/db"
import jwt from "jsonwebtoken"


const SECRET = "abcabc123123" // placera sedan i env-fil

// cors()

export default async function login(req, res) {

  if(req.method === "POST"){

    const userClient = req.body
    const { email, password } = userClient
    console.log("user-client: ", "email: ", email, "password: ", password)

    const sql = {
      query: "SELECT * FROM users WHERE email = ?",
      values: email
    };

    // query 
    const result = await executeQuery(sql);
    const userDb = result[0]

    console.log("RESULLLT", result)

    // if nothing comes from query
    if(result.length === 0) {
      res.status(500).json({message: "Couldn't find email!"})

    } else if (userDb.password === userClient.password){
      // create jwt token
      const token = jwt.sign(userDb.id, SECRET)
      res.status(200).json({token: token})                    
    } else {
      res.status(403).json({message: "password or email is not correct!"})
    }
  }
}