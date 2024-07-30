const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personRouter = require('./Router/personRouter');
const main = express();


//bodyParser for converting sring to json format
main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json())


//mongooDB Connect.
let url = 'mongodb+srv://pradeep9100234360:Deepu1625@cluster0.zyiyzx2.mongodb.net/RightDoctors';
mongoose.connect(url)
    .then(()=>{
        console.log('DB got connected...')
    })
    .catch((err)=>{
        console.log(err)
    })


//port Connect.
main.listen(3000,()=>{
    console.log('Server connected....!')
})


// view engine
main.set('view engine','ejs')
main.use('/people',personRouter)