import mongoose from 'mongoose'


const url = 'mongodb://localhost:27017/details'

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connect.then(db => {
    console.log("Connected to the MongoDB")
}).catch(err => {
    console.log(err)
})