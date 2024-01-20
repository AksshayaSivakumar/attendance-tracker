const path=require('path');

const express=require('express');

const bodyparser=require('body-parser');
const cors = require('cors')
const DateModel= require('./models/datemodel')
const AttendanceModel = require('./models/attendancemodel')


const rootDir=require('./util/path');

const sequelize=require('./util/database');



const app=express();

const AttendaceRoute=require('./routes/attendanceroute');


app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));
//app.use(express.static(path.join(rootDir, 'public')));

app.use(AttendaceRoute);

app.use(cors())

sequelize.sync()
.then(result=>{

    app.listen(3004);
    
})
.catch(err=>console.log(err))