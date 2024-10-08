    const https = require('https');
    const options = {
        host: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
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
