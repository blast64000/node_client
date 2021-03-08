const axios = require('./testapp/node_modules/axios')

axios
    .get('https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot',

        /*
            {
                "name": "Buy the milk_02",
                "photoUrl": "https://c-sg.smule.com/rs-s27/arr/c6/05/1db60541-5165-4235-9672-e22399291d1f_256.jpg",
                "description": "api modify test",
                "managers": ["blast64000@algenbio"]
            },
            */

        {
            headers: {
                'Content-Type': 'application/json',
                consumerKey: 'BHOjH7zxMnPPqXwycpf8',
                Authorization: 'Bearer AAABAoyo/3zFAMqau9uS6fIR0pPRf2z8FkHbsXa930xScg8gYjguZ81L0S8AszS7flys2lIznE4VfF8UZjFLDjhUHdNkwgYtdHPGpp3PaXc7iyHUtpkZFs9Y3wzS6zhML6zQKNu//940sNw9VqjFkKuulbAoTAF9xsJ7PA0r6OrhaxTzp/cWzEKFTmn81+MBpBvBPPL9N+EcbL+YyQiny+2gV1fHdRQRA2fVO9tiwLkHuLLPVEnpp6BJBfDGKIGy1GUIYiHA0xuEIBMl5vYoVwedo25HpnUhnWIro+GBm1Jhqn3sA6whkep7xsWFxD944TZ7IwiM6i3ipTXVfYppnUwdDINHFBDcTtX/11ienn8E/LRU'
            }
        })


.then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        console.log(res.data)

    })
    .catch(error => {
        console.error(error)
    })