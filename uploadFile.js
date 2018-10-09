let http = require('http');
let formidable = require('formidable');
let fs = require('fs');
var mysql      = require('mysql');
var array1 = [];
var connection = mysql.createConnection({
  host     : '188.40.110.12',
  user     : 'pkopy2_bootcamp',
  password : 'pkopy7603',
  database : 'pkopy2_bootcamp'
});
connection.connect();
 
connection.query('SELECT * FROM `citi` LIMIT 5,10', function (error, results, fields) {
  if (error) throw error;
  for(result of results){
      array1.push(result)
      
  }
  // console.log('The solution is: ', results[0]);
  
  function array(){
      return array1
  }
  // console.log(array1)
  return array1
});
connection.end();



http.createServer(function (req, res) {
  // console.log(array)
  if (req.url === '/fileupload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/8760/Desktop/NOde/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    //   fs.readFile(newpath, (err, data)=>{
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    //   })
 });
  } else {
    // console.log(array)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write(array1[0].name)
    return res.end();
  }
}).listen(8080);