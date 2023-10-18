
//datatypes
//----------------------------------------------------------
let Lname : string;

Lname = "Nadav"

let newname = Lname.toUpperCase();

console.log(newname);


let age : number

age = 25.6

console.log(age);


//----------------------------------------------------------

//function
//----------------------------------------------------------
function add( a:number, b :number) :number{
    return a + b
}

let test = add(2,3);

console.log(test)

const sub = (a : number , b : number) : number => a-b;

console.log(sub(3,1));

//----------------------------------------------------------
//default value

function add( a:number, b :number, c = 10) :number{
    return a + b
}

let test = add(2,3);

console.log(test)

const sub = (a : number , b : number) : number => a-b;

console.log(sub(3,1));

//----------------------------------------------------------
//generic value


let concatRes = getItems<number>([1,2,3,4,5]);

let concatRes2 = getItems<string>(["2","2","3","4","5"]);

console.log(concatRes)

console.log(concatRes2)

//----------------------------------------------------------





