import query from "../../db/index.js";

 export async function getAllUsersAndScores(){
  console.log("hit")
  let results= await query(`SELECT * FROM userscores;`)
  console.log(results)
  return results.rows
}

export async function updateUsersAndScores(user_name,user_score,user_id){
  console.log("hit")
  let results= await query(`UPDATE userscores SET user_name=$1,user_score=$2 WHERE user_id=$3 RETURNING *;`,[user_name,user_score,user_id])
  console.log(results)
  return results.rows
}

