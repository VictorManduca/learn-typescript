import express from 'express'

import routes from './routes'

const app: express.Application = express()

app.use(express.json())
app.use(routes)

const port = 8080
const startupMessage = `running on: http://localhost:${port}`
app.listen(port, () => console.log(startupMessage))
