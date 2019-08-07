const express = require('express');
const router = express.Router();
router.get('/getitems', (req, res) => {
    let sql = `SELECT * FROM goods`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })

})
module.exports = router;