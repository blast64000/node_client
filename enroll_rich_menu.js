const axios = require('axios')

axios
    .post('https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1909195/richmenu',

        {
            "size": {
                "width": 2500,
                "height": 843
            },
            "name": "Nice richmenu",
            "areas": [{
                    "bounds": {
                        "x": 0,
                        "y": 0,
                        "width": 1250,
                        "height": 843
                    },
                    "action": {
                        "type": "message",
                        "label": "Document",
                        "text": "Document"
                    }
                },
                {
                    "bounds": {
                        "x": 1250,
                        "y": 0,
                        "width": 1250,
                        "height": 843
                    },
                    "action": {
                        "type": "message",
                        "label": "Schedule",
                        "text": "Schedule"
                    }
                },
                {
                    "bounds": {
                        "x": 0,
                        "y": 843,
                        "width": 1250,
                        "height": 843
                    },
                    "action": {
                        "type": "message",
                        "label": "Bank",
                        "text": "Bank"
                    }
                },
                {
                    "bounds": {
                        "x": 1250,
                        "y": 843,
                        "width": 1250,
                        "height": 843
                    },
                    "action": {
                        "type": "message",
                        "label": "Q&A",
                        "text": "Q&A"
                    }
                }
            ]

        },


        {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
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