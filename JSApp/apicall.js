let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url).then(function (res) {
    return res.json();
}).then(function (abc) {
    console.log(abc);
});


console.log("===============");