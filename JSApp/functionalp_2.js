function greet(name,fx)
{
    fx(name);
}

function welcome(nm){
    console.log("Welcome  !" + nm)
}
function sayGoodBye(nm){
    console.log("Good  Bye!!" + nm)
}
greet("John",sayGoodBye);
greet("John",welcome);

