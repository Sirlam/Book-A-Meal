import express from 'express';

const app = express();
const PORT = 9001;


app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  console.log(`APP is running on: ${PORT}`);
});
