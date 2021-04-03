const mysql = require("mysql2");
const dbconfig = { host: "freedb.tech", user: "freedbtech_KetakiBorole", password: "magicbox@sql", database: "freedbtech_youframe" };

const execute = (query, params) => {
    const con = mysql.createConnection(dbconfig);
    console.log('params    ',params)
     return con.promise().query(query,params)
        .then( ([rows,fields]) => {
          con.end()
          return rows;
        })
        .catch(console.log)

};

module.exports = {execute};
