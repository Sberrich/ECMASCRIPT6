/*
    Arrow Function

*/

// Regular Function With No Parameters
let test1 = function()
{
    return 2;
}
// With No Params
let Arrow1 = () => 2;
let Arrow2 = () => 2;

// Regular Function With One Params
let test2 = function(param)
{
    return param * 2;
}

// Regular Function With One Params
let test3 = function(param1, param2)
{
    return param * 2;
}

let Arrow3 = param => param * 2;
let Arrow4 = (param1, param2) => param1 * param2;

console.log (Arrow4(3,4));




/*This Problem*/ 

let test = function()
{
    document.getElementById('app').innerHTML = this;

}

function Person()
{
    let that = this;

    this.age = 0;
    setInterval(() =>{
        this.age++;
        console.log(this.age); 
    },1000);
}

let user = new Person();
