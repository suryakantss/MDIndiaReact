function greet(){
    return function(){
        return function(){
            return "Hello ";
        }
    }
}


console.log(greet()()())