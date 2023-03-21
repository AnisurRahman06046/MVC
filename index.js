require('dotenv').config()
require('./config/db.config')
const app = require('./app')
const PORT = process.env.PORT || 5000





app.listen(PORT,()=>{
    console.log(`server is running from ${PORT}`)
})