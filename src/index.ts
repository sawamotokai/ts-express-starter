import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import errorHandler from './middlewares/error-handler';
import NotFoundError from './errors/not-found-error';

import userRouter from './routers/signup-router';

const app = express();
const port = process.env.PORT || 3333;


app.use(json());
app.use(userRouter);

app.all('*', () => {
  throw new NotFoundError();
})

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
