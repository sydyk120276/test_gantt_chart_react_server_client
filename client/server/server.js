require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const PORT = process.env.PORT || 5000

const server = express()
server.use(cors())
server.use(express.json())

server.get('/api/v1/test', async (req, res) => {
  const response = await axios('http://82.202.204.94/tmp/test.php')
    .then(({ data }) => JSON.stringify(data))
  console.log(response)
  res.json(JSON.parse(response))
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))