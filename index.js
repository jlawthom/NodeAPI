import express from 'express'

const app = express();

app.listen(5001, () => console.log('Listening on port 5001'));

app.get('/', (req, res) => res.json('API Running!! You better go catch it -v2'))