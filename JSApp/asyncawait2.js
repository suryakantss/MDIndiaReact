async function add(a, b) {
    if (a < 0 || b < 0)
        throw new Error('Invalid Nos.' + a + "," + b)
    return a + b;
}

async function main() {
    try {
        let res = await add(100, -200);
        console.log(res);
    } catch(err){
        console.log(err.message)
    }

}

main();