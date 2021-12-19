import query from "../index.js";


async function DropScoreAndUserTable(){
  await query(`DROP TABLE userscores;`)
  console.log("users and score table has been dropped")
}
DropScoreAndUserTable()