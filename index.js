import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

const PORT = 5432
const DB_URL = '';
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
startApp()