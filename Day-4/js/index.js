let data = [
    {
        "movieName": "The Shawshank Redemption",
        "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "rating": 4.8,
        "bestScenes": [
            {
                "title": "Andy Dufresne escapes from prison",
                "duration": "15 mins"
            },
            {
                "title": "Brooks was here",
                "duration": "10 mins"
            }
        ]
    },
    {
        "movieName": "The Godfather",
        "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
        "rating": 4.9,
        "bestScenes": [
            {
                "title": "Horse head in bed",
                "duration": "5 mins"
            },
            {
                "title": "Cannoli scene",
                "duration": "3 mins"
            }
        ]
    },
    {
        "movieName": "The Dark Knight",
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "rating": 4.8,
        "bestScenes": [
            {
                "title": "Opening bank robbery",
                "duration": "12 mins"
            },
            {
                "title": "Why So Serious interrogation",
                "duration": "8 mins"
            }
        ]
    },
    {
        "movieName": "The Lord of the Rings: The Return of the King",
        "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
        "rating": 4.9,
        "bestScenes": [
            {
                "title": "Ride of the Rohirrim",
                "duration": "10 mins"
            },
            {
                "title": "Frodo destroys the One Ring",
                "duration": "7 mins"
            }
        ]
    }
]


function bestScenes(data) {

    let arr = [];

    data.forEach((elem) => {
        let max = 0;
        elem.bestScenes.forEach((i) => {
            let duration = parseInt(i.duration.split(' ')[0]);
            if (duration > max) {
                max = duration;
            }
        });
        arr.push({ "movieName": elem.movieName, "longestSceneDuration": `${max} mins` });
    });

    return arr;
};

let ans = bestScenes(data);
// console.log(ans);


function averageRating(data) {

    let sum = data.reduce((accu, elem) => accu + elem.rating, 0);
    let avg = sum / data.length;

    return avg;
}

let avg = averageRating(data);
// console.log(avg);

function sortRating(data){
   return data.sort((a, b)=>b.rating - a.rating);
}

// let arr = sortRating(data);
// console.log(arr);


function sortByMovie(data){
   return data.sort((a,b)=>a.movieName.charCodeAt() - b.movieName.charCodeAt());
}

let sortMovie = sortByMovie(data);
// console.log(sortMovie);