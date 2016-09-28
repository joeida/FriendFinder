exports.sampleUsers = [
    {
        "name":"Chase",
        // "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "photo":"https://static.pexels.com/photos/7289/animal-dog-pet-sad.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name":"Stanley",
        "photo":"http://www.publicdomainpictures.net/pictures/30000/velka/dog-1349074812Hpj.jpg",
        "scores":[
            1,
            3,
            2,
            5,
            2,
            2,
            1,
            5,
            3,
            2
        ]
    },
    {
        "name":"BamBam",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/a/a8/Lava_the_sled_dog.jpg",
        "scores":[
            2,
            4,
            1,
            3,
            1,
            1,
            3,
            4,
            2,
            5
        ]
    }
];

exports.convert = function (newUser) {
    for (var i = 0; i < newUser.scores.length; i++) {
        newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    return newUser;
}

exports.compare = function (newUser) {
    var lowestNum = 50;
    var calcNum = 0;
    var compUser;
    for (var i = 0; i < exports.sampleUsers.length; i++) {
        for (var j = 0; j < exports.sampleUsers[i].scores.length; j++) {
            var compNum = Math.abs(exports.sampleUsers[i].scores[j] - newUser.scores[j]);
            calcNum += compNum;
        }
        // console.log(calcNum);
        if (calcNum < lowestNum) {
            lowestNum = calcNum;
            compUser = exports.sampleUsers[i];
        }
        calcNum = 0;
    }
    exports.sampleUsers.push(newUser);
    return compUser;
};;