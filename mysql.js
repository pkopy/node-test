const mysql = require('mysql');
const cors = require('cors');
const express = require('express')

let array1 = [];
let citiesJSON;
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('public'))

const connection = mysql.createConnection({
  host     : '188.40.110.12',
  user     : 'pkopy2_bootcamp',
  password : 'pkopy7603',
  database : 'pkopy2_bootcamp'
});
connection.connect();

connection.query('SELECT * FROM `citi` LIMIT 10',  (error, results, fields) => {
  if (error) throw error;
  for(result of results){
    array1.push(result)
    console.log(result.name)
  }
  
  citiesJSON = JSON.stringify(array1)
  
});

connection.end()



app.post('/', (req, res) => {
  if(req.headers.jaja){
    res.send('xxx')
  }else{
    
    res.json(citiesJSON)
    // console.log(req.headers)
  }
})

app.get('/add', (req, res) => {
  const connection = mysql.createConnection({
    host     : '188.40.110.12',
    user     : 'pkopy2_bootcamp',
    password : 'pkopy7603',
    database : 'pkopy2_bootcamp'
  });
  connection.connect()
  
  connection.query("INSERT INTO test (user, age, weight) VALUES ('adam', '10', '50')", (error, result) => {
    if(error) {
      console.log("nie dodano")
      res.send('Nie dodano')
    }else{
      res.send('Dodano rekord')
      
    }
    //   console.log('add')
    // try {
      //   console.log('dodano')
      // }catch(error){
        //   console.log(error)
        // }
        
      })
      
      
      
      connection.end()
    })
    app.use(function (req, res, next) {
      res.send('Podana strona nie istnieje')
      next();
    });
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    
    
    