async function greet(name)
{
    return "Hello "+name;
}


async function main(){
let res = await greet("John");
console.log(res);
}
main();
console.log("==============");


