
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