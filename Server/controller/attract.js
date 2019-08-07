const express = require('express');
const router = express.Router();
router.get('/get', (req, res) => {

    let sql1 = 'SELECT * FROM attractions'
    mydb.query(sql1, req.query.regin1, (err, results) => {
        console.log(sql1)
        if (err) {
            console.log(err)
        }
        res.send(results)
    })

})
router.get('/gettravels', (req, res) => {

    let sql = 'SELECT * FROM travels limit 1,6'
    mydb.query(sql, req.query.regin1, (err, results) => {
        console.log(sql)
        if (err) {
            console.log(err)
        }
        res.send(results)
    })

})

module.exports = router;