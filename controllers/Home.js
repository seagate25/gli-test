const express       = require('express');
const bodyParser    = require('body-parser');
const router        = express.Router();
const pgsql         = require('../dbconfig').pool;

router.get('/', (req, res) => {
    res.render('default', {
        title: "Home Page"
    });
});

router.post("/", (req, res) => {
    var sql = "SELECT a.*, b.role_name FROM tb_master_user a JOIN tb_master_user_role b ON (a.role = b.id)";
    pgsql.query(sql, (e, r) => {
        if(e) {
            res.json({
                code: 500,
                msg: "Internal Server Error",
                data: null
            });
        } else {
            res.json({
                code: 500,
                msg: "Success",
                data: r.rows
            });
            // console.log(r);
        }
    });
})

module.exports = router;