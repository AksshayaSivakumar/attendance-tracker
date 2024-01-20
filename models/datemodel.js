const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const StudentList=sequelize.define('studentlist',{
  id:{
    type:Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    
},

date:{
    type:Sequelize.DATE,    
    allowNull:false,
    unique:true
}
})
      
      module.exports = StudentList;
      
      
