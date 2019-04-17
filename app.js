// application that allows uses the custom-module
// allows the user to search, select a result, fetch details and display details






const
  cats = require('thecatapi-commando'),
  inquirer=require('inquirer')
  tm = require('terminal-image')

  async function search() {
    let tmp = await cats.getBreeds()
    // let result = await cats.searchByBreed(tmp)
    // console.log(result)
    //console.log(tmp)
  
    const ans = tmp.map(breed => {
      return {
          name: `${breed.name}`,
          value: `${breed.id}`
      }
  })
  
  
  return inquirer.prompt([{
          type: 'list',
          message: 'Select a breed',
          name: 'tmp',
          choices: ans,
          validate: function(answer) {
              return `${answer.tmp}`
          }
      }])
  
      .then(answers => {
              console.info(JSON.stringify(answers.tmp, null, ' '))
          })
          
  
        



      }




   




  
module.exports = {
  search
}