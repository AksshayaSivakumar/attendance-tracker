const Sequelize=require('sequelize');

const sequelize=require('../util/database');

//const ReviewModel=require('../models/reviewmodel');

const Search=sequelize.define('search',{
  

name:{
  type:Sequelize.STRING,
  allowNull:false,
}
})



module.exports=Search;