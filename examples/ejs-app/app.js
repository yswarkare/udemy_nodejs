import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = 5000

app.listen(port)

