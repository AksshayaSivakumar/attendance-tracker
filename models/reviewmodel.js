const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const SearchCompanyModel=require('../models/searchcompanymodel');

const CompanyReview=sequelize.define('companyreview',{
  
  name:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  pros:Sequelize.STRING,
  cons:Sequelize.STRING,
  ratingValue:{
  type:Sequelize.INTEGER,
  allowNull:false,
  validate: {
    min: 1,
    max: 5,
}
}

})
 
CompanyReview.belongsTo(SearchCompanyModel);    
      module.exports = CompanyReview;
      
      
