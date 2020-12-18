import express, { Request, Response } from 'express'
import path from 'path'
const PORT = process.env.NODE_ENV || 8080
const HOST = process.env.HOST || 'localhost'
const NODE_ENV = process.env.NODE_ENV || 'unset'

// Obtain Environment Configs
const app: express.Application = express();


//Connecct to Mongo Database


//Import Routes/Routers


// Mount routers


// Mount Middlewares
// the __dirname is the current directory from where the script is running
app.use(express.json())
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname,'../', 'client', 'build')))

app.get('/ping', (req:express.Request, res: express.Response)=>{
    res.send({msg: 'pong', success: true})
})

// Serve The Client Side React App
app.get('/*', (req: express.Request, res: express.Response)=>{
    let clientAppPath = path.resolve(__dirname,'../', 'client', 'build', 'index.html')
    res.sendFile(clientAppPath)
    console.log(`sending ${clientAppPath}`)
})

// Open a Port
app.listen(PORT, ()=>{
    console.log(`The project is running on http://${HOST}:${PORT}`)
    console.log(`The Project is running in ${NODE_ENV} mode.`)
})