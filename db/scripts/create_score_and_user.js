import query from "../index.js";


async function createScoreAndUserTable(){
  await query(`CREATE TABLE IF NOT EXISTS userscores (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(20),
    user_score INT
  )`)
  console.log("users and score table has been create")
}
createScoreAndUserTable()