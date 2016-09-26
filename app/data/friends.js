exports.sampleUsers = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
        ],
        "compScore": 0
    },
    {
        "name":"Palm",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
        5,
        1,
        4,
        1,
        5,
        1,
        2,
        3,
        2,
        1
        ],
        "compScore": 0
    }
];

exports.compare = function (newUser) {
    console.log(exports.sampleUsers);
    // for (var i = 0; i < exports.sampleUsers.length; i++) {

    // }
    return newUser;
  }