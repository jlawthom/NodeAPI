const express = require('express');
const axios = require('axios');

var fs = require('fs');
var http = require('http');
var https = require('https');

// To Create (Testing - No CA)
// Generate Private Key: $ openssl genrsa -out key.pem
// Create CSR (for Self-Signing): $ openssl req -new -key key.pem -out csr.pem
// Generate SSL Certificate: $ openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
var privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
const app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000, () => console.log('Listening on port 3000'));
httpsServer.listen(8443, () => console.log('Listening on port 8443'));

app.get('/', (req, res) => {
    const text = 'API Running!! You better go catch it -v2 --Business Name: ' + req?.query?.businessName;
    res.json(text);

    axios.post('https://envjnywsdj5nf.x.pipedream.net/', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    },
    {
        headers: {
            myHeader1: "lovely cushioned header, for GERRARRRD ..."
        }
    })
    .then((response) => {
        console.log('response:');
        console.log(response);
    })
    .catch((err) => {
        console.log('error:');
        console.log(err);
    })
})