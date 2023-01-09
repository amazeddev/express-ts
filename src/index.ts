import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log('dsfdsg');
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server started on port 5000!');
});
