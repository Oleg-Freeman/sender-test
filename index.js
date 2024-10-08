    const https = require('https');
    const options = {
        // host: 'jsonplaceholder.typicode.com',
        host: 'https://5995-91-196-55-8.ngrok-free.app'
        //path: '/todos/1',
        path: '/status    
        method: 'GET',
    };
    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
