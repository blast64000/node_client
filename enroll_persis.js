const axios = require('axios')

axios
    .post('https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1909195/persistentmenu',

        {
            "content": {
                "actions": [{
                        "type": "uri",
                        "label": "label test-01",
                        "uri": "test-01"
                    },
                    {
                        "type": "uri",
                        "label": "label test-02",
                        "uri": "test-02"
                    },
                    {
                        "type": "uri",
                        "label": "label test-03",
                        "uri": "test-03"
                    },
                    {
                        "type": "uri",
                        "label": "label test-04",
                        "uri": "test-04"
                    }

                ]
            }

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