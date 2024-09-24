import exp from 'express';
// load enviroment variables
import 'dotenv/config';
const app = exp();
app.listen(process.env.PORT);
