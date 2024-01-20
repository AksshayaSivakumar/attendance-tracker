const sequelize = require("../util/database");
const Sequelize = require('sequelize')

const rootDir=require('../util/path');
const DateModel= require('../models/datemodel');
const AttendanceModel=require('../models/attendancemodel');

exports.postDate= async (req,res,next)=>{

    try 
      {
  
     if(!req.body.date)
     {
      throw new Error('date is mandatory')
     }
   
      
      const date=req.body.date;
      const data = await DateModel.create({
          
          date:date
          
         
      })
       console.log('updated success');
       
      res.status(201).json({newDate:data})
      
       
      }
  catch(err)
  
  {
      res.status(500).json({error:err})
  }
  
  
  }



 



  