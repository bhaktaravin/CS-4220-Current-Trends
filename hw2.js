
function print(obj1){
  // console.log(obj.members)
  const tmp1 = [];
  let m = ''
  const printed ={};
  let name = ''
  let leader = ''
  let members = ''
  m = obj1.members.toString()

  for(const i in obj1){
        tmp1[i] = m.replace(/,([^,]*)$/, ' and $1')
        obj1.members = tmp1.members
        printed["Team"] = obj1.name
        printed["Leader"] = obj1.leader
        printed["Members"] = obj1.members
        
  }
  name = printed["Team"]
  leader = printed["Leader"]
  members = printed["Members"]
  if(leader === undefined){
    printed["Leader"] = ''
} 
  for(key in printed){
      console.log(key + " : " +printed[key])
  }
  
}

const group1 = {
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}

print(group1)
print(group2)


class shoppingCart{
    constructor(cartArr = []){
        this.cartArr = cartArr
        this.items = {}
        this.total = 0

        this.cartArr.forEach(item => this.addItem(item))
    }

    addItem(cart){
        const {item,quantity,price="n/a"} = cart

        if(cart === false){
            this.items[item].quantity += parseInt(quantity)
            if(price === null){
                this.items[item].price = price
            }
        }
            else{
               this.items[item.toLowerCase()] = {
                   quantity: parseInt(quantity),
                   price: price
               };
            }
            
        return this;
    }
    removeItem(str){
        let tmp = str.toLowerCase()
        let quantity = this.items[tmp].quantity
        if(quantity<2){
            delete this.items[tmp]
        }else{
            this.items[tmp].quantity -= 1
        }
        return this;

    }
    addPrice(str,num){
        if(this.items[str.toLowerCase()]){
            this.items[str.toLowerCase()].price = num;
        }
        else{
            console.log("Error");
        }
        return this;
    }
    addTotal(){
        for(let i in this.items){
            let price = this.items[i].price;
            if(price === "n/a"){
                continue;
            }
            let quantity = parseInt(this.items[i].quantity);
            this.total += price * quantity
        }
        return this;
    }
    get print(){
        for(let i in this.items){
            let quantity = this.items[i].quantity
            let price = this.items[i].price
            console.log("Item: " + i + " | " + "Quantity: " + quantity + " | " + "Price: " + '$'+price);
        }
        if(this.total <= 0){
            console.log("Total: 0");
        }
        else{
            
            console.log("Total: " + '$'+this.total.toFixed(2)); 
        }

    }   
}
let g = new shoppingCart()
g
    .addItem({item: "bread", quantity: "1"})
    .addItem({item: "soup", quantity: "3"})
    .addItem({item: "chips", quantity: "4"})
    .addItem({item: "soda", quantity: "1"})
    .addPrice("chiPs",5.99)
    .removeItem("Chips")
    .addPrice("soda",1.04)
    .addTotal().print;
//console.log(g)