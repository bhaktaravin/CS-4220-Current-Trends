
/* 1 */
function replaceLetters(str, array) {
    let tmp = ''
    for(const i in array){
        if(str.includes(array[i])){
            tmp = array[i]
            str = str.replace(tmp, '-')
        }   
    }
console.log(str)

}
const arr1 = ['a','e','i','o','u']
replaceLetters("node.js", arr1)


/* 2 */ 
function sumArray(arr){         
var total =  0;
    for(const i in arr)
    {                  
        if(!isNaN(arr[i]) && arr[i] != false && arr[i] != true){
            total = total + parseInt(arr[i]);
        }
    }
        console.log(total);
}


const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false]
sumArray(arr2)


/* 3 */ 

function countingWords(array){
    let occur = {};
    for(let i = 0; i < array.length; i++){
        occur[array[i]] = (occur[array[i]] || 0) + 1;
        
    }
    console.log(occur)
}


const arr3 = ['hi', 'hi', 'hello', 'world','hello','hi','greetings']
countingWords(arr3)  

/* 4 */
function createAnimals(arr){
    let tmpObj1 = {};
    let animals ={}
    for(let i = 0;i < arr.length;i++){
        let jLength = arr[i]
        for(let j = 0;j < jLength.length;j++){
            let t1 = arr[i][j].property
            let t2 = arr[i][j].assign
            tmpObj1[t1] = t2
    }
    animals[i] = Object.assign({},tmpObj1)
}
console.log(animals)

}

const arr4 =
       [
           [
               { property: 'name', assign: 'Garfield'},
               { property: 'owner', assign: 'Jon Arbuckle'},
               { property: 'type', assign: 'cat' }
           ],
           [
               { property: 'name',assign: 'Snoopy' },
               { property: 'owner',assign: 'Charlie Brown' },
               { property: 'type',assign: 'dog' }
           ],
       ]

createAnimals(arr4)