function index(res){
    console.log('Request action index was called');
    res.writeHead(200, {"Content-Type": "text/plain"});

    var Users = {
        user1: 'Juanito',
        user2: 'Pepito',
        user3: 'Toñito'
    }

    for (user in Users) {
        console.log(Users[user]);
        res.write(Users[user]+"\n");
    }
    res.end();

}

function show(res){
    console.log('Request action show was called');

    var Users = {
        user1: 'Juanito',
        user2: 'Pepito',
        user3: 'Toñito'
    }
    var id = setTimeout(function(){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(Users.user1+"\n");
        res.end();
    }, 10000)


}

exports.index = index;
exports.show = show;
