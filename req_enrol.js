const https = require('https')

const data = JSON.stringify({
    name: 'Buy the milk_01',
    photoUrl: 'https://c-sg.smule.com/rs-s27/arr/c6/05/1db60541-5165-4235-9672-e22399291d1f_256.jpg',
    description: 'api request test',
    managers: 'blast64000@algenbio'
})

const options = {
    hostname: 'https://sandbox-apis.worksmobile.com',
    port: 443,
    path: '/kr1unqNPDxwAo/message/v1/bot',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'consumerKey': 'BHOjH7zxMnPPqXwycpf8',
        'Authorization': 'Bearer AAABBju93cZn+gX41vXE5cObvYbvknsyM8CuLELT+CnoZQYueIYcuNdk7rijOR4l/YloZEX6WIUUfA1IsxUVIrwEm4irCeApyV0K/7qz/y7OkMywgv6C4E7saVN8wIOZ2T7JZbYN2XAoLrZOQhLQpV0SBtvHrWaUJfgLVucq8u3efGnREXOtTdS3PrbVeNQVSD/6a3kFcy7FCjTVWFRa8gHTFURBP2L6VRm8+50O3tmPvEFO5ufMechfBoSUXxKjoRgWnyTpzVwhpY0dYuryMGE/l4XSS0Q7NAkg1FSV05MB7wWa0vZEatWOBX4oUq+94FJAXsxfog2V0tAcRotPeluouoDfHJESnK3pD9PAHBI8A7Km'

    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()