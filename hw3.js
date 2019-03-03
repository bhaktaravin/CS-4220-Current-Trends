const adder=(prev, next) => {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(prev + next)
       },10)
      
   })
   
    
}

async function iterateNumbers(numbers){
try{
    let result = 0
    let num = 0
    for(let i =0;i<numbers.length;i++){
        //num1 = numbers[i]
        num = numbers[i]
        result = await adder(result,num)
    }
    console.log("(1)")
    console.log("Total: " + result + '\n')
}catch(Error){
    console.log(Error)
}
    //console.log(sum)
}

iterateNumbers([1,2,3,5,8,13,21])




//2
const makePriorityList = todos => {
    const tmpLst = []
    const missing = []
    for(let i =0;i<todos.length;i++){
        checkPriority(todos[i], (error,result)=> {
            if(todos[i].priority != null){
                //todos[i].priority *= 10;
                tmpLst.push(result)
                
            }
            if(todos[i].priority === null){
                missing.push(result)
            }
            if(i === todos.length-1){
                tmpLst.sort(function(a,b){
                    return b.priority - a.priority
                })
                
                
            if(todos[i].priority ===error){
                console.log(error)
            }
                console.log('(2)')
                console.log("Priorities: ")
                console.log(tmpLst)
                console.log("No Priorities: ")
                console.log(missing)
                
            }
        })
       

    }
   
}
const checkPriority = (todo,callback) => {
    const {name,priority} = todo
    if(priority){
        setTimeout(()=>{
            callback(null,todo)
        }, 90)
    }
    else{
        callback("Missing priority for", name)
    }
}

const todos = [{
    name: 'get coffee',
    priority: 9
},
{
    name: 'clean room',
    priority: null
},
{
    name: 'go to CS4220',
    priority: 4
},
{
    name: 'do homework before due date',
    priority: 8
}]


makePriorityList(todos)

