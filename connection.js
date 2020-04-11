const {Pool} =require("pg");

var db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tutorial",
  password: "jacksito",
  port: 5432,
})

db.connect((err)=>{
  if(!err){
    console.log("connected")
  }
  else{
    console.log("connection failed")
  }
})

module.exports = db;
