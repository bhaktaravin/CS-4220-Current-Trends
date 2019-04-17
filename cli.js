// CLI using yargs for search command
// ex: node cli.js search -k keyword

const
    yargs = require('yargs')
    chalk = require('chalk')
    app = require('./app')
   

const flags = yargs.usage('$0: Usage <cmd> [options]')
.command({
    command: 'search',
    desc: `Searchs for cat images`,
   builder: (yargs)=>{
       return yargs.options('b', {
        alias: 'breeds',
        describe: 'search by breed',
        nargs: 1
    })
      
   },
   handler: (argv => {
        if(argv.b != null){
            //console.log(argv.b)
            app.search(argv.b)
           
            
        }
   })
   
})


.help('help')
.argv

