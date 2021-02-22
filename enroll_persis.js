const axios = require('axios')

axios
    .post('https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1909195/persistentmenu',

        {
            "content": {
                "actions": [{
                        "type": "postback",
                        "label": "label test-01",
                        "data": "action=buy&itemid=111",
                        "displayText": "send user reply text-01"
                    },
                    {
                        "type": "postback",
                        "label": "label test-02",
                        "data": "action=buy&itemid=112",
                        "displayText": "send user reply text-02"
                    },
                    {
                        "type": "postback",
                        "label": "label test-03",
                        "data": "action=buy&itemid=113",
                        "displayText": "send user reply text-03"
                    },
                    {
                        "type": "postback",
                        "label": "label test",
                        "data": "action=buy&itemid=114",
                        "displayText": "send user reply text-04"
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