const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const bodyParser = require('body-parser');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '-' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop())
    }
});
const upload = multer({ storage: storage })
const app = express();
const host = 'http://localhost:8080/';
// 接受post过来的额数据

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 数据库连接
global.mydb = mysql.createConnection({   
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'golden-flowers',
    port: 3306,
    multipleStatements: true
});
mydb.connect();

// 跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
// 启用cookie
let secret = 'app.h5190304.com';
app.use(cookieParser(secret));
// 启用session
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))
app.get('/', (req, res) => {
    res.send('首页');
});

//登录注册  子路由
app.use('/login', require('./controller/login'))
//旅游攻略子路由
app.use('/travels', require('./controller/travels'))
    // 旅游景点子路由
app.use('/attract', require('./controller/attract'))
    // 旅游产品子路由
app.use('/goods', require('./controller/goods'))



// 接受上传的图片
app.post('/uploads', upload.single('images'), function(req, res, next) {
    // console.log(req.file);
    res.json({ imgsrc: host + 'uploads/' + req.file.filename });
});



// 对图片进行静态资源托管
app.use('/uploads', express.static('uploads'));

app.listen(8080, () => {
    console.log(`Server started on 8080`);
});
