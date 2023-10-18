
class Employee {
    id: number
    address: string;


    constructor( id : number ,address : string){
        this.id = id;
        this.address = address;
    } 

   getNameWithAddres():string{
        return `${this.name} stays at ${this.address}`
    }

  

}

let john = new Employee(10,"maza2");

console.log(john);
console.log(john.getNameWithAddres());

