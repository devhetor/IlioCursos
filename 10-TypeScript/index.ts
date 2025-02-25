
//basic type
let isDone: boolean = true;
console.log(isDone);


//any type
let isCheck: any = true;
isCheck = 'TRUE';
isCheck = 0;
isCheck = { id: 1, name: 'Haider' };
console.log(isCheck)

//variables
let fruit: string = 'Apple';
fruit = 'Orange';
console.log(typeof fruit)

//declare variables
let sample: string;
sample = 'test';
console.log(sample);

const list: number[] = [1, 23, 25]
console.log(list)

//tuple
let x: [number, string]
x = [0, 'hello']
console.log(x)

//enum
enum ActionTypes {
    GET_PRODUCTS = '[GET PRODUCTS] LOADED',
    CREATE_PRODUCT = '[CREATE PRODUCT] CREATE'
}

const action = {
    payload: 1,
    type: ActionTypes.GET_PRODUCTS
}
console.log(action)

let notSure: unknown = 4;
notSure = "Maybe a string instead";

notSure = false
console.log(notSure)


function test(): void {
    console.log('Hello world');
}
test();

let value = undefined;
value = 5;
console.log(value)

let result = null
result = { id: 1, name: 'Ali' };
console.log(result)