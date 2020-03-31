const express = require("express");
const bodyParser = require('body-parser');
const os = require("os");
var cors = require('cors');
const path = require('path');
const app = express();
app.use(express.static("build"));


app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.post("/login", (req, res, next) => {
  console.log('login', req.body);
  res.status(200).send({message: 'success'});
})
app.post('/api/addName', (req, res) => {
    console.log('product ', req.body);
    res.status(200).send({message: 'add'});
})
app.use("/", (req, res) =>{
  console.log('ss', path.resolve)
  res.sendFile(path.resolve('build/index.html'))}
);
app.use("/*", function (req, res, next) {
  console.log('404', path.root)
  res.sendFile(path.resolve('build/index.html'));
})
app.listen(8080, () => console.log("Listening on port 8080!"));