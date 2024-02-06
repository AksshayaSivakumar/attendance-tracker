const path=require('path');

const express=require('express');

const bodyparser=require('body-parser');
const cors = require('cors')


const rootDir=require('./util/path');

const sequelize=require('./util/database');



const app=express();

const ReviewRoute=require('./routes/reviewroute');



app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/reviews',ReviewRoute);

app.use(cors());


sequelize
.sync()
//.sync({force:true})
.then(result=>{
   console.log('database synced successfully');
})


.then(result=>{
    app.listen(3004);
})

.catch(err=>console.log(err))