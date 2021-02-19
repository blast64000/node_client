const axios = require('axios')

axios
    .put('https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1909195',

        {
            "name": "Buy the milk_02",
            "photoUrl": "https://c-sg.smule.com/rs-s27/arr/c6/05/1db60541-5165-4235-9672-e22399291d1f_256.jpg",
            "description": "api modify test",
            "managers": ["blast64000@algenbio"]
        },


        {
            headers: {
                'Content-Type': 'application/json',
                consumerKey: 'BHOjH7zxMnPPqXwycpf8',
                Authorization: 'Bearer AAABBju93cZn+gX41vXE5cObvYbvknsyM8CuLELT+CnoZQYueIYcuNdk7rijOR4l/YloZEX6WIUUfA1IsxUVIrwEm4irCeApyV0K/7qz/y7OkMywgv6C4E7saVN8wIOZ2T7JZbYN2XAoLrZOQhLQpV0SBtvHrWaUJfgLVucq8u3efGnREXOtTdS3PrbVeNQVSD/6a3kFcy7FCjTVWFRa8gHTFURBP2L6VRm8+50O3tmPvEFO5ufMechfBoSUXxKjoRgWnyTpzVwhpY0dYuryMGE/l4XSS0Q7NAkg1FSV05MB7wWa0vZEatWOBX4oUq+94FJAXsxfog2V0tAcRotPeluouoDfHJESnK3pD9PAHBI8A7Km'
            }

        })


.then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })