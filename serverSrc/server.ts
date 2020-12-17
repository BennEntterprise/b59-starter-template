import express from 'express'
console.log('Its working')
const PORT = process.env.NODE_ENV || 8080
const HOST = process.env.HOST || 'localhost'

// Obtain Environment Configs
const app = express();


//Connecct to Mongo Database


//Import Routes/Routers


// Mount routers



// Open a Port
app.listen(PORT, ()=>{
    console.log(`The project is running on https:${HOST}:${PORT}`)
    console.log(`The Project is running in ${process.env.NODE_ENV} mode.`)
})