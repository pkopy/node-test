const readline = require('readline');
let objHelp = {host:'', user:'', database: '', password:''};
let arr = Object.keys(objHelp);
const fs = require('fs')



// console.log(arr)
const makeConfig = () => {
  if(!fs.existsSync('./config.js')) {


    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    
    
    let count = 0;
    console.log(`Write ${Object.keys(objHelp)[count]}`)
    rl.on('line', (data) => {
      // TODO: Log the answer in a database
      console.log(count)
      if(count === 3) {
        objHelp[arr[count]] = data
        count = 0;
        
        rl.close()
        
        console.log(objHelp)
        
        
        let configString =`const connParams = {
            host     : '${objHelp.host}',
            user     : '${objHelp.user}',
            password : '${objHelp.password}',
            database : '${objHelp.database}'
          }
        
          const get = () => connParams
        
        module.exports = {
            get
        }`
          fs.writeFile('config.js', configString, (err) => {
            if (err) throw err;
            console.log('Saved')
          } )
        
      }else {
        console.log(`Write ${Object.keys(objHelp)[count+1]}`)
        objHelp[arr[count]] = data
        
        count++;
      }
      
      
      
    });
  }else{
    console.log('File --config.js-- already exist')
  }
}

makeConfig();

  
  
    