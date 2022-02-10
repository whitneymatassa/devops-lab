const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`server running on ${port}`))