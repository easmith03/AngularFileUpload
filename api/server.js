let express = require('express');
let multer  = require('multer');
let bodyParser = require('body-parser');

//let upload = multer({ dest: './uploads/' })

let app = express();
//app.use(bodyParser.json());
app.post('/imageUpload', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
   res.send('Hello World');
})

console.log(`dir: ${__dirname}`);

let uploadFile = multer({
    dest: './uploads/',
  })
  
app.post('/imageUpload', uploadFile.array('image', 1), function(req, res, next) {
  
  console.log(req.files[0]);
  console.log(req.body);
  next();
  //res.send('success');
});
  
app.post('/imageUpload', function(req, res) {
  
  console.log("Next");
  console.log(req.body);
  console.log("End");
  res.status(200);
  res.send({success: 'Yeah Baby'});
});

/*
app.post('/imageUpload', multer({}).fields('fname'), function(req, res) {
  
  console.log("Next");
  console.log(req.body);
  console.log("End");
  res.send('success');
});

/*
let uploading = multer({
    dest: __dirname + './uploads/',
    limits: {fileSize: 100000, files:1},
});

  // console.log(`uploading ${uploading.dest}`);

  //app.post('/upload', cpUpload, function (req, res, next) {
app.post('/upload', uploading, function (req, res, next) {
        // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any

  //console.log(req);
  //res.send('uploader');
});
*/
app.use(express.static('./public'))

let server = app.listen(8081, function () {
   console.log(`Example app listening at http://${server.address().address}:${server.address().port}`)
})

