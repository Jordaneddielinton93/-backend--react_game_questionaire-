import query from "../index.js";

let fakeUsers=[
  {username:"jordan1",score:0},
  {username:"jordan2",score:10},
  {username:"jordan3",score:20},
  {username:"jordan4",score:30},
  {username:"jordan5",score:30},
]
async function populateUserAndScore(username,user_score){
  
  await query(`INSERT INTO userscores (
    user_name,
    user_score
  ) VALUES($1,$2)`,[username,user_score])
  console.log("users and score table has been create")
}
fakeUsers.forEach(({username,score})=>populateUserAndScore(username,score))
