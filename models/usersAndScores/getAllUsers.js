import query from "../../db/index.js";

 export async function getAllUsersAndScores(){
  console.log("hit")
  let results= await query(`SELECT * FROM userscores;`)
  console.log("hit again")
  return results.rows
}

