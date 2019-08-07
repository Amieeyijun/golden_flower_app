const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    let sql = "select * from user where ";
	sql += ` username="${req.body.username}" `;
	mydb.query(sql, function (err, results) {
		if (results.length == 0) {
			res.json({
				msg: "none"
			})
		} else if (results.length == 1) {
			console.log(results)
			if (results[0].password == req.body.password) {
				res.json({
					msg: "same",
					userinfo: results[0]
				})
				
			} else {
				res.json({
					msg: "different"
				})
			}
		}


	})
});
router.post("/Registe", function (req, res) {
	console.log(req.body)
	var sql = "select * from user where 1 ";
	if (req.body.nickname) {
		sql += " AND username= '" + req.body.nickname + "'";
	}
	mydb.query(sql, function (err, results) {
		if (results.length > 0) {
			res.json({
				msg: "username_already_exist"
			})
		} else {
			let newsql = `insert into user(username,password,email,live,phonenumber) values ("${req.body.nickname}","${req.body.password}","${req.body.email}","${req.body.residence.join('/')}","+${req.body.prefix}${req.body.phone}")`;
			console.log(newsql)
			mydb.query(newsql, (err, results) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.json({
						msg: "reg_success"
					})
				}
			})
		}

	})
});
router.post('/userupdata', (req, res) => {
    console.log(req.body)
    var sql =
        `UPDATE user SET username="${req.body.nickname}",password="${req.body.password}",email="${req.body.email}",live="${req.body.residence.join('/')}",phonenumber="+${req.body.prefix}${req.body.phone}" WHERE id = ${req.body.id}`;
    mydb.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			return;
		} else {
			res.json({
				msg: 'updata-ok'
			})
		}
    })
})
module.exports = router;