import exp, { Express } from 'express'

// load enviroment variables
import 'dotenv/config'

const app: Express = exp()




app.listen(process.env.PORT)