import express from 'express';
const app = express();
const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 4400;
import api from './api/index';
app.use(express.static('public'));
app.use(api);
app.listen(port, () => {
  console.log(`Mac2Sell API listening at http://localhost:${port}`);
});
