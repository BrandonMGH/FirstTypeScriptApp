
class Cat {
    id: number;
    name: string; 
    weight: number;
    height: number;
    
    constructor(  id: number, 
        name: string,
        weight: number,
        height: number){
            this.id = id; 
            this.name = name;
            this.weight = weight;
            this.height = height; 

    }
    getInfo(): void{
        console.log(this.id, this.name, this.weight, this.height)
    }
}

const Sinatra = new Cat (1,"Sinatra",2, 10)

Sinatra.getInfo()

let wrapinArray = function(param: string | number | boolean) {
    if(typeof param === "string"){
        return [param]
    }else {
        return param
    }
}

let numArr: Array<number> = [1,2,3]

let domTest = (param: string) => {
    return param
}

document.body.textContent = domTest("Deborah");