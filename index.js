const app = require("express")();
const mysql = require("mysql");
const PORT = 8080;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "123",
  database: "donations",
});
app.listen(PORT, () => console.log("listen on 8080"));

app.get("/donations", (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;

//     connection.query("SELECT * from donate", (err, rows) => {
//       connection.release();
//       if (!err) {
//         res.send(rows);
//       } else {
//         console.log(err);
//       }
//     });
//   });
    res.status(200).send({
        _id:'001',
        
    })
});




