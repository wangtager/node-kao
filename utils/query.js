var mysql      = require('mysql');
var connection = require('../config')

connection.connect();

function updatePV(type, value) {
  return new Promise((resolve, reject) => {
      // console.log(`UPDATE pv SET pv=${value} WHERE type=${type}`, '==========')
      let updateSql = `UPDATE pv SET pv=${value} WHERE type=${type}`
      connection.query(updateSql, function (error, results, fields) {
      if (error) throw error;
      // console.log('The solution is: ', results, fields);
      resolve(results.affectedRows)
    })
});
}
function queryPV(type){
  let querySQL = `SELECT * FROM pv WHERE type=${type}`
  return new Promise((resolve, reject) => {
    connection.query(querySQL, function (error, results, fields) {
      if (error) throw error;
      // console.log('The solution is: ', results[0].pv, fields);
      let newValue = results[0].pv+1
      updatePV(type, newValue).then((res)=>{
        if(res) {
          resolve(results[0].pv+1)
        } else {
          resolve(results[0].pv)
        }
        // connection.end();
      })
    })
  })
}

module.exports = {
  queryPV
}



